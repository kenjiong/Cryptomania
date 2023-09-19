import CoinItem from "./CoinItem";

export default function AllCoins({ coins, fiat }) {
  return (
      <table>
        <tr>
          <th>Rank</th>
          <th>Coin</th>
          <th>Price ({fiat})</th>
          <th>Price Change (1h)</th>
          <th>Volume</th>
        </tr>
      {coins.map((coin) => (
          <CoinItem key={coin.id} coin={coin} />
      ))}
      </table>
  );
}
