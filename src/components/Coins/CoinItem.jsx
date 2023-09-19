import { Link } from "react-router-dom";

export default function CoinItem({ coin }) {
  return (
    <tr>
      <td>{coin.rank}</td>
      <td>
        <Link to={`/coins/${coin.id}`}>
          <img src={`${coin.icon}`} /> {coin.name} ({coin.symbol})
        </Link>
      </td>
      <td>{coin.price.toFixed(2)}</td>
      <td>{coin.priceChange1h}%</td>
      <td>{coin.volume.toFixed()}</td>
    </tr>
  );
}
