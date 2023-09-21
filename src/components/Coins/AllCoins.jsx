import CoinItem from "./CoinItem";

export default function AllCoins({ coins, fiat }) {
  return (
    <table className="table table-dark table-striped">
      <tr>
        <th className="fs-5">#</th>
        <th className="fs-5">Coin</th>
        <th className="fs-5">Price ({fiat})</th>
        <th className="fs-5">Price Change (1h)</th>
        <th className="fs-5">Volume</th>
      </tr>
      <tbody className="table-group-divider">
        {coins.map((coin) => (
          <CoinItem key={coin.id} coin={coin} />
        ))}
      </tbody>
    </table>
  );
}
