import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import FiatSelector from "./components/FiatSelector/FiatSelector";
import NavBar from "./components/Nav/NavBar";
import Watchlist from "./components/Watchlist/Watchlist";
import Portfolio from "./components/Portfolio/Portfolio";
import HomePage from "./pages/HomePage";
import CoinsListPage from "./pages/Coins/CoinsListPage";
import CoinPage from "./pages/Coins/CoinPage";
import ConverterPage from "./pages/CoinConverter/ConverterPage";

function App() {
  const [coins, setCoins] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [fiat, setFiat] = useState("USD");

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const url = `https://api.coinstats.app/public/v1/coins?currency=${fiat}`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }
        const data = await response.json();
        setCoins(data.coins);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCoins();
  }, [fiat]);

  const changeFiat = newFiat => {setFiat(newFiat)};

  return (
    <>
      <header>
        <Header />
        <FiatSelector fiat={fiat} changeFiat={changeFiat} />
      </header>
      <nav>
        <NavBar />
      </nav>
      <section>
        <div>
          <Routes>
            <Route path="/main" element={<HomePage />} />
            <Route path="/coins" element={<CoinsListPage coins={coins} fiat={fiat} />} />
            <Route path="/coins/:coinId" element={<CoinPage fiat={fiat} />} />
            <Route path="/converter" element={<ConverterPage coins={coins} />} />
          </Routes>
        </div>
      </section>
      <aside>
        <div>
          <Watchlist watchlist={watchlist} />
        </div>
        <div>
          <Portfolio portfolio={portfolio} />
        </div>
      </aside>
      <hr />
      <footer>
        <p>
          Cryptomania (est 2023) - powered by the CoinStats API
          <br />A project by <a href="https://github.com/kenjiong">Kenji Ong</a>
        </p>
      </footer>
    </>
  );
}

export default App;
