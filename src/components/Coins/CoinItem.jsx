import { Link } from "react-router-dom";

export default function CoinItem({ coin }) {
  return (
    <tr>
      <td>{coin.rank}</td>
      <td>
        <Link
          to={`/coins/${coin.id}`}
          className="bg-transparent link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
        >
          <img className="icon" src={`${coin.icon}`} /> {coin.name} (
          {coin.symbol})
        </Link>
      </td>
      <td>{coin.price.toFixed(2)}</td>
      <td>{coin.priceChange1h}%</td>
      <td>{coin.volume.toFixed()}</td>
    </tr>
  );
}
