import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <Link to={`/teams`}>Teams</Link>
      <Link to={`/players`}>Players</Link>
      <Link to={`/heroes`}>Heroes</Link>
    </div>
  );
}
