import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function useFetchTeamInfo(teamId) {
  const [team, setTeam] = useState({});
  const [teamPlayers, setTeamPlayers] = useState([]);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        setStatus("loading");
        // const url = `https://api.opendota.com/api/teams/${teamId}`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }
        const data = await response.json();
        setStatus("success");
        setTeam(data);
      } catch (error) {
        setStatus("error");
      }
    };
    fetchTeam();
  }, [teamId]);

useEffect(() => {
  const fetchTeamPlayers = async () => {
    try {
      setStatus("loading");
      // const url = `https://api.opendota.com/api/teams/${teamId}/players`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      const data = await response.json();
      setStatus("success");
      setTeamPlayers(data);
    } catch (error) {
      setStatus("error");
    }
  };
  fetchTeamPlayers();
}, [teamId]);

const isLoading = status === "loading";
const isError = status === "error";

return { team, teamPlayers, isLoading, isError };
};

export default function TeamInfo() {

  const { teamId } = useParams();

  const { team, teamPlayers, isLoading, isError } = useFetchTeamInfo(teamId);

  if (isLoading) {
    return <progress />;
  }

  if (isError) {
    return <h2>Something went wrong...</h2>;
  }

  return (
    <>
        <div>
      <p><h3>{team.name}</h3></p>
      <p><img src={`${team.logo_url}`} alt={`${team.name} Logo`} /></p>
      <p>Rating: {team.rating}</p>
        <p>Wins: {team.wins}</p>
        <p>Losses: {team.losses}</p>
    </div>
    <div>
        <p>Players</p>
        {teamPlayers.map((player) => (
          player.is_current_team_member === true ?
        <Link to={`/players/${player.account_id}`}>{player.name}</Link> : <br/>) 
        )}
    </div>
    </>
  );
}