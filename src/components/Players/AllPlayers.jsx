import PlayerCard from "./PlayerCards";

export default function AllPlayers({ players }) {
  return (
    <>
      {players.map((player) => (
        <div key={player.id}>
          <PlayerCard player={player} />
        </div>
      ))}
    </>
  );
}