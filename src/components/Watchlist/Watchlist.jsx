import AddCoin from "./AddCoin";
import DeleteCoin from "./DeleteCoin";
import { Link } from "react-router-dom";

export default function Watchlist({ watchlist, fetchWatchlist, coins }) {
  return (
    <div>
      <div className="d-inline-flex">
        <p className="fs-4 fw-bold text-light">
          <img className="icon" src="/watchlist.png" />
          &nbsp;My Watchlist
        </p>
        &nbsp;&nbsp;
        <AddCoin
          watchlist={watchlist}
          fetchWatchlist={fetchWatchlist}
          coins={coins}
        />
      </div>
      <br />
      {watchlist.map((coin) => (
        <div className="container" key={coin.fields?.coinId}>
          <div className="row">
            <div className="col">
              <img src={`${coin.fields?.icon}`} className="icon" />
              &nbsp;
              <Link
                to={`/coins/${coin.fields?.coinId}`}
                className="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover fs-5"
              >
                {coin.fields?.name} ({coin.fields?.symbol})
              </Link>
            </div>
            <div className="col-2">
              <DeleteCoin fetchWatchlist={fetchWatchlist} id={coin?.id} />
            </div>
          </div>
          <br />
        </div>
      ))}
    </div>
  );
}
