import AddCoin from "./AddCoin";
import DeleteCoin from "./DeleteCoin";
import { Link } from "react-router-dom";

export default function Watchlist({ watchlist, addWatchlist, deleteWatchlist, coins }) {
  return (
    <div>
      <span>
        My Watchlist <AddCoin addWatchlist={addWatchlist} coins={coins} />
      </span>
      {watchlist.map((coin) => (
        <div key={coin.coinId}>
          <Link to={`/coins/${coin.coinId}`}>
            {coin.name} ({coin.symbol})
          </Link>{" "}
          - {coin.price} &nbsp;
          <DeleteCoin deleteWatchlist={deleteWatchlist} id={coin.id} coinId={coin.coinId} />
        </div>
      ))}
    </div>
  );
}
