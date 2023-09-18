import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function HeroInfo({heroes}) {
  const { index } = useParams();

  return (
    <>
      <div>
        <p>
          <h3>{heroes[index]?.localized_name}</h3>
        </p>
        <p>
          <img src={`${heroes[index]?.img}`} />
        </p>
      </div>
      <div>
        <p>Primary Attribute: {heroes[index]?.primary_attr}</p>
        <p>Pro Picks: {heroes[index]?.pro_pick}</p>
        <p>Pro Bans: {heroes[index]?.pro_ban}</p>
        <p>Pro Wins: {heroes[index]?.pro_win}</p>
      </div>
    </>
  );
}
