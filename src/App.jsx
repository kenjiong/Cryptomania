import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import NavBar from "./components/Nav/NavBar";
// import FavouritesList from "./components/Favourites/FavouritesList";
import MainPage from "./pages/MainPage";
import TeamsListPage from "./pages/Teams/TeamsListPage";
import TeamPage from "./pages/Teams/TeamPage";
// import PlayersListPage from "./pages/Players/PlayersListPage";
// import PlayerPage from "./pages/Players/PlayerPage";
// import HeroesListPage from "./pages/Heroes/HeroesListPage";
// import HeroPage from "./pages/Heroes/HeroPage";

function App() {
  const [teams, setTeams] = useState([]);
  // const [players, setPlayers] = useState([]);
  // const [heroes, setHeroes] = useState([]);
  // const [favteams, setFavTeams] = useState([]);
  // const [favplayers, setFavPlayers] = useState([]);
  // const [favheroes, setFavHeroes] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        // const url = `https://api.opendota.com/api/teams`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }
        const data = await response.json();
        setTeams(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTeams();
  }, []);

  // useEffect(() => {
  //   const fetchPlayers = async () => {
  //     try {
  //       const url = `http://localhost:3001/`;
  //       const response = await fetch(url);
  //       if (!response.ok) {
  //         throw new Error("Network response was not OK");
  //       }
  //       const data = await response.json();
  //       setPlayers(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchPlayers();
  // }, []);

  // useEffect(() => {
  //   const fetchHeroes = async () => {
  //     try {
  //       const url = `http://localhost:3002/`;
  //       const response = await fetch(url);
  //       if (!response.ok) {
  //         throw new Error("Network response was not OK");
  //       }
  //       const data = await response.json();
  //       setHeroes(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchHeroes();
  // }, []);

  return (
    <>
      <header>
        <Header />
      </header>
      <nav>
        <NavBar />
      </nav>
      <section>
        <div>
          <Routes>
            <Route path="/main" element={<MainPage />} />
            <Route path="/teams" element={<TeamsListPage teams={teams} />} />
            <Route path="/teams/:teamId" element={<TeamPage />} />
            {/* <Route path="/players" element={<PlayersListPage players={players} />} />
            <Route path="/players/:playerId" element={<PlayerPage />} />
            <Route path="/heroes" element={<HeroesListPage heroes={heroes} />} />
            <Route path="/heroes/:heroId" element={<HeroPage heroes={heroes}/>} /> */}
          </Routes>
        </div>
      </section>
      <aside>
        {/* <FavouritesList favteams={favteams} favplayers={favplayers} favheroes={favheroes} /> */}
      </aside>
      <footer>
        <p>
          OneDota (est 2023) - powered by the OpenDota API
          <br />A project by <a href="https://github.com/kenjiong">Kenji Ong</a>
        </p>
      </footer>
    </>
  );
}

export default App;
