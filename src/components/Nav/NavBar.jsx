import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="container-fluid">
      <Link to={`/main`} className="nav-link">Home</Link>
      <Link to={`/coins`} className="nav-link">Coins</Link>
      <Link to={`/converter`} className="nav-link">Coin Converter</Link>
    </div>
  );
}
