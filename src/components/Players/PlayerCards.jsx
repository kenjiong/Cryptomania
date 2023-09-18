import { Link } from "react-router-dom";

export default function PlayerCard({ player }) {
  return (
    <>
      <div>
        <p>
          <img src={`${player.avatarmedium}`} alt={`${player.name} logo`} />
        </p>
        <p>
          <Link to={`/players/${player.account_id}`}>{player.name}</Link>
        </p>
      </div>
    </>
  );
}