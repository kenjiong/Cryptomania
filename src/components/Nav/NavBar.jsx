import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <Link to={`/main`}>Home</Link>
      <Link to={`/coins`}>Coins</Link>
      <Link to={`/converter`}>Currency Converter</Link>
    </div>
  );
}
