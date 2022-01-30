import DomParser from "dom-parser";
import axios from "axios";
import { Card, Button, List, Avatar, Skeleton, Divider } from "antd";
import { useMemo, useState } from "react";
import Address from "components/Address/Address";
import { useMoralis, useMoralisQuery } from "react-moralis";
import { getEllipsisTxt } from "helpers/formatters";
import InfiniteScroll from "react-infinite-scroll-component";
import Text from "antd/lib/typography/Text";

const parser = new DomParser();
export default function Admin() {
  const { Moralis, chainId } = useMoralis();
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState();
  const [page, setPage] = useState(1);
  const [stoped, setStoped] = useState(false);

  /**Moralis Live query for displaying contract's events*/
  const { data } = useMoralisQuery("Events", (query) => query, [], {
    live: true,
  });

  const startParsing = async () => {
    if (stoped) {
      return;
    }
    // get mainnet transactions for the current user
    // const transactions = await Moralis.Web3API.account.getTransactions();

    // get BSC transactions for a given address
    // with most recent transactions appearing first
    const options = {
      chain: "bsc",
      address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
      order: "desc",
      offset: page * 500,
    };
    console.log("startParsing");

    setLoading(true);
    const data = await Moralis.Web3API.account.getTransactions(options);

    setTransactions([...transactions, ...data.result]);
    setLoading(false);
    console.log("transactions", data);

    setPage(page + 1);
    // startParsing();
  };

  const loadMoreData = () => {};
  const stopParsing = () => {
    setStoped(true);
    setLoading(false);
  };

  return (
    <div
      style={{
        margin: "auto",
        display: "flex",

        gap: "20px",
        marginTop: "25",
        width: "70vw",
      }}
    >
      <Card
        title="Parsing"
        size="large"
        style={{
          width: "70%",
          alignItems: "flex-end",
          boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 20%)",
          border: "1px solid #e7eaf3",
          borderRadius: "0.5rem",
        }}
      >
        <div
          style={{
            height: "200px",
            overflow: "auto",
            width: "100%",
          }}
        >
          <InfiniteScroll
            dataLength={transactions.length}
            next={loadMoreData}
            hasMore={transactions.length < 50}
            endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
            scrollableTarget="scrollableDiv"
          >
            <List
              loading={loading}
              // itemLayout="horizontal"
              style={{ width: "100%" }}
              dataSource={transactions}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    title={
                      <a
                        target="_blank"
                        href={"https://bscscan.com/tx/" + item.hash}
                      >
                        {item.hash}
                      </a>
                    }
                    description={item.from_address}
                  />
                  <List.Item.Meta
                    title={""}
                    style={{
                      right: 20,
                      justifyContent: "flex-end",
                      alignSelf: "flex-end",
                      textAlign: "end",
                    }}
                    description={
                      new Date(item.block_timestamp).toLocaleTimeString() +
                      " | " +
                      new Date(item.block_timestamp).toLocaleDateString("en-US")
                    }
                  />
                </List.Item>
              )}
            />
          </InfiniteScroll>
        </div>
        <div style={{ marginTop: "20px", right: 0 }}>
          <Text>Page: {page}</Text>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
          }}
        >
          {loading && (
            <Button
              onClick={stopParsing}
              style={{ marginTop: "50px", marginRight: "10px" }}
              type="primary"
              size="large"
            >
              Stop
            </Button>
          )}

          <Button
            onClick={startParsing}
            style={{ marginTop: "50px" }}
            type="primary"
            size="large"
          >
            Start
          </Button>
        </div>
      </Card>
    </div>
  );
}
