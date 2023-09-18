import TeamCard from "./TeamCards";

export default function AllTeams({ teams }) {
  return (
    <>
      {teams.map((team) => (
        <div key={team.team_id}>
          <TeamCard team={team} />
        </div>
      ))}
    </>
  );
}
