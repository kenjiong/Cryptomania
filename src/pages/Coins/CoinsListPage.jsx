import AllCoins from "../../components/Coins/AllCoins";

export default function CoinsListPage({ coins, fiat }) {
  return (
    <div>
      <AllCoins coins={coins} fiat={fiat} />
    </div>
  );
}
