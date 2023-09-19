import CoinItem from "./CoinItem";

export default function AllCoins({ coins }) {
  return (
    <>
      {coins.map((coin) => (
        <div key={team.team_id}>
          <TeamCard team={team} />
        </div>
      ))}
    </>
  );
}
