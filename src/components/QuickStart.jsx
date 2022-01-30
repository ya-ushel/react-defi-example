import { Card, Button, Typography } from "antd";
import React, { useMemo } from "react";
import { useMoralis } from "react-moralis";

const { Text } = Typography;

const styles = {
  title: {
    fontSize: "20px",
    fontWeight: "700",
  },
  text: {
    fontSize: "16px",
  },
  card: {
    boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 20%)",
    border: "1px solid #e7eaf3",
    borderRadius: "0.5rem",
  },
  timeline: {
    marginBottom: "-45px",
  },
};

export default function QuickStart({ isServerInfo }) {
  const { Moralis } = useMoralis();

  const isInchDex = useMemo(
    () => (Moralis.Plugins?.oneInch ? true : false),
    [Moralis.Plugins?.oneInch],
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          marginRight: "350px",
          marginLeft: "350px",
          marginTop: "150px",
          marginBottom: "150px",
        }}
      >
        <Text bold="true" style={{ fontSize: "50px", color: "##34bbff" }}>
          AUF Token
        </Text>
        <Text style={{ fontSize: "20px", textAlign: "center" }}>
          The first major Micro & LowCap launchPad on LP. Bringing stabilty,
          safety and amazing opportunities on the new and highly anticipated
          KuCoin Community Chain!
        </Text>
        <Button style={{ marginTop: "50px" }} type="primary" size="large">
          Get airdrop
        </Button>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          marginRight: "350px",
          marginLeft: "350px",
          marginTop: "100px",
          marginBottom: "100px",
        }}
      >
        <Text bold="true" style={{ fontSize: "50px", color: "##34bbff" }}>
          Our Partners
        </Text>
        <div
          style={{ flexDirection: "row", display: "flex", borderWidth: "1px" }}
        >
          <div style={{ marginRight: "10px", marginLeft: "10px" }}>
            <img
              alt="Bitcoin"
              src="https://static.hwweb.online/56e1/images/blue3.png"
            />
          </div>
          <div style={{ marginRight: "10px", marginLeft: "10px" }}>
            <img
              alt="Bitcoin"
              class="img-responsive"
              src="https://static.hwweb.online/56e1/images/DCI2.png"
            />
          </div>
          <div style={{ marginRight: "10px", marginLeft: "10px" }}>
            <img
              alt="Bitcoin"
              class="img-responsive"
              src="https://static.hwweb.online/56e1/images/oig2.png"
            />
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          marginRight: "350px",
          marginLeft: "350px",
          marginTop: "100px",
          marginBottom: "100px",
        }}
      >
        <Text bold="true" style={{ fontSize: "50px", color: "##34bbff" }}>
          FEATURES
        </Text>
        <Text style={{ fontSize: "20px", textAlign: "center" }}>
          AUF Is An Exclusive Decentralized Launchpad Focusing On Low Cap Gems &
          Memecoins On KuCoin Community Chain.
        </Text>
      </div>

      <div>
        <Card
          style={styles.card}
          title={
            <>
              <Text strong>AUF Token</Text>
            </>
          }
        >
          <Text style={styles.text}>AUF Token</Text>
        </Card>
      </div>
    </div>
  );
}
