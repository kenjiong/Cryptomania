import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import NavBar from "./components/Nav/NavBar";
import FavouritesList from "./components/Favourites/FavouritesList";
import MainPage from "./pages/MainPage";
import TeamsListPage from "./pages/Teams/TeamsListPage";
import TeamPage from "./pages/Teams/TeamPage";
import PlayersListPage from "./pages/Players/PlayersListPage";
import PlayerPage from "./pages/Players/PlayerPage";
import HeroesListPage from "./pages/Heroes/HeroesListPage";
import HeroPage from "./pages/Heroes/HeroPage";

function App() {
  const [teams, setTeams] = useState([]);
  const [players, setPlayers] = useState([]);
  const [heroes, setHeroes] = useState([]);
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const url = `http://localhost:3000/api/holidays/${id}`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }

        const data = await response.json();
        setHoliday(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchHoliday();
  }, [id]);

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
            <Route path="/teams" element={<TeamsListPage />} />
            <Route path="/teams/:id" element={<TeamPage />} />
            <Route path="/players" element={<PlayersListPage />} />
            <Route path="/players/:id" element={<PlayerPage />} />
            <Route path="/heroes" element={<HeroesListPage />} />
            <Route path="/heroes/:id" element={<HeroPage />} />
          </Routes>
        </div>
      </section>
      <aside>
        <FavouritesList favourites={favourites} />
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
