import AddCoin from "./AddCoin";
import DeleteCoin from "./DeleteCoin";
import { Link } from "react-router-dom";

export default function Watchlist({ watchlist, fetchWatchlist, coins }) {
  return (
    <div>
      <div className="d-inline-flex">
        <p className="fs-4 fw-bold text-light">My Watchlist</p>&nbsp;&nbsp;
        <AddCoin fetchWatchlist={fetchWatchlist} coins={coins} />
      </div>
      <br />
      {watchlist.map((coin) => (
        <div className="container" key={coin.coinId}>
          <div className="row">
            <div className="col">
              <img src={`${coin.icon}`} className="icon" />
              &nbsp;
              <Link
                to={`/coins/${coin.coinId}`}
                className="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover fs-5"
              >
                {coin.name} ({coin.symbol})
              </Link>
            </div>
            <div className="col-2">
              <DeleteCoin fetchWatchlist={fetchWatchlist} id={coin.id} />
            </div>
          </div>
          <br />
        </div>
      ))}
    </div>
  );
}
