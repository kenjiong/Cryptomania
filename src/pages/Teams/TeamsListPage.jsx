import AllTeams from "../../components/Teams/AllTeams";

export default function TeamsListPage({ teams }) {
  return (
    <div>
      <AllTeams teams={teams} />
    </div>
  );
}
