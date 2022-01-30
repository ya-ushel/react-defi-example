import { useMoralis, useNativeBalance } from "react-moralis";

function NativeBalance(props) {
  const { data: balance } = useNativeBalance(props);
  const { account, isAuthenticated } = useMoralis();

  if (!account || !isAuthenticated) return null;

  return (
    <div style={{ textAlign: "center", whiteSpace: "nowrap" }}>
      10.000 AUF (~1337 BNB)
    </div>
  );
}

export default NativeBalance;