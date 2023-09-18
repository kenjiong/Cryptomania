import { useEffect, useState } from "react";

function useFetchHoliday(id) {
  const [holiday, setHoliday] = useState({});
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    const fetchHoliday = async () => {
      try {
        setStatus("loading");
        const url = `http://localhost:3000/api/holidays/${id}`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }

        const data = await response.json();
        log("load %o", data);
        setStatus("success");
        setHoliday(data);
      } catch (error) {
        setStatus("error");
        log(error);
      }
    };
    fetchHoliday();
  }, [id]);

  const isLoading = status === "loading";
  const isError = status === "error";

  return { holiday, isLoading, isError };
}

export default function HolidayInfo() {

  const { id } = useParams();

  const { holiday, isLoading, isError } = useFetchHoliday(id);

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
        {/* Current players */}
    </div>
    </>
  );
}