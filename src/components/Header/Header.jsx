import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="d-inline-flex align-items-center text-white">
        <Link to={`/main`}>
          <img className="logo" src="/crypto.png" />
        </Link>
        &nbsp;
        <h1 className="display-1">Cryptomania</h1>
      </div>
      <p className="fs-4 text-white text-opacity-50">
        Get cryptocurrency at a steal!
      </p>
    </>
  );
}
