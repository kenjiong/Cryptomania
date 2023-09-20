import { Link } from "react-router-dom";
import FiatSelector from "../FiatSelector/FiatSelector";

export default function NavBar({fiat, changeFiat}) {
  return (
    <div className="nav justify-content-center">
      <Link to={`/main`} className="nav-item link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Home</Link>
      <Link to={`/coins`} className="nav-item link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Coins</Link>
      <Link to={`/converter`} className="nav-item link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Coin Converter</Link>
      <FiatSelector className="nav-item" fiat={fiat} changeFiat={changeFiat}/>
    </div>
  );
}
