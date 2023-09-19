import { Link } from "react-router-dom";

export default function FavouritesList({ favteams, favplayers, favheroes }) {
  return (
    <div>
      <h4>My Favourites</h4>
      {/* {favourites.map((favourite) => (
        <>
          <Link to={`{url}`}>{favourite.name}</Link>
        </> */}
      ))}
    </div>
  );
}
