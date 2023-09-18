import { Link } from "react-router-dom";

export default function TeamCard({ team }) {
  return (
    <>
      <div>
        <p>
          <img src={`${team.logo_url}`} alt={`${team.name} logo`} />
        </p>
        <p>
          <Link to={`/teams/${team.id}`}>{team.name}</Link>
        </p>
      </div>
    </>
  );
}
