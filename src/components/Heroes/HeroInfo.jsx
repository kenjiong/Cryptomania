import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
  const idx = id - 1;
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
        <p>
          <h3>{hero[idx]?.localized_name}</h3>
        </p>
        <p>
          <img src={`${hero[idx].img}`} />
        </p>
      </div>
      <div>
        <p>Primary Attribute: {hero[idx].primary_attr}</p>
        <p>Pro Picks: {hero[idx].pro_pick}</p>
        <p>Pro Bans: {hero[idx].pro_ban}</p>
        <p>Pro Wins: {hero[idx].pro_win}</p>
      </div>
    </>
  );
}
