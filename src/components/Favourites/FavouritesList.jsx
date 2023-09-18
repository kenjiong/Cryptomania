import { Link } from "react-router-dom";

export default function FavouritesList({ favourites }) {
  return (
    <div>
      <h4>My Favourites</h4>
      {favourites.map((favourite) => (
        <>
          <Link to={`{url}`}>{favourite.name}</Link>
        </>
      ))}
    </div>
  );
}
