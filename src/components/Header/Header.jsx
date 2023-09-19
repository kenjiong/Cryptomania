import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <Link to={`/main`}>
        <h1>Cryptomania</h1>
        Get cryptocurrency at a steal!
      </Link>
    </>
  );
}