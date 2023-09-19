import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <Link to={`/teams`}>Home</Link>
      <Link to={`/players`}>Coins</Link>
      <Link to={`/heroes`}>Currency Converter</Link>
    </div>
  );
}
