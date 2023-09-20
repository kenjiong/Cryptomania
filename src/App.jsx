import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import FiatSelector from "./components/FiatSelector/FiatSelector";
import NavBar from "./components/Nav/NavBar";
import Watchlist from "./components/Watchlist/Watchlist";
// import Portfolio from "./components/Portfolio/Portfolio";
import HomePage from "./pages/HomePage/HomePage";
import CoinsListPage from "./pages/Coins/CoinsListPage";
import CoinPage from "./pages/Coins/CoinPage";
import ConverterPage from "./pages/CoinConverter/ConverterPage";

function App() {
  const [coins, setCoins] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  // const [portfolio, setPortfolio] = useState([]);
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

  useEffect(() => {
    const fetchWatchlist = async () => {
      const url = "https://api.airtable.com/v0/apprApIcqcI5oHlTI/Watchlist";
      const token =
        "patMCS33ZnaCOmRwz.e6010bc1518019b727914ee0c305944a0e1164e73625a18ef29d64d8d04cbb83";
      const response = await fetch(`${url}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const jsonData = await response.json();
      const airtableData = jsonData.records.map((data) => ({
        ...data.fields,
        id: data.id,
      }));
      setWatchlist(airtableData);
    };
    fetchWatchlist();
  }, []);

  const addWatchlist = (coin) => setWatchlist([...watchlist, coin]);

  const deleteWatchlist = (id) =>
    setWatchlist(watchlist.filter((coin) => coin.id !== id));

  const changeFiat = (newFiat) => {
    setFiat(newFiat);
  };

  return (
    <div className="container text-center">
      <header className="header">
        <Header />
        <FiatSelector fiat={fiat} changeFiat={changeFiat} />
      </header>
      <nav className="nav navbar navbar-expand-lg bg-body-tertiary">
        <NavBar />
      </nav>
      <section className="section text-light">
        <div>
          <Routes>
            <Route path="/main" element={<HomePage />} />
            <Route
              path="/coins"
              element={<CoinsListPage coins={coins} fiat={fiat} />}
            />
            <Route path="/coins/:coinId" element={<CoinPage fiat={fiat} />} />
            <Route
              path="/converter"
              element={<ConverterPage coins={coins} />}
            />
          </Routes>
        </div>
      </section>
      <aside className="aside">
        <div>
          <Watchlist
            watchlist={watchlist}
            addWatchlist={addWatchlist}
            deleteWatchlist={deleteWatchlist}
            coins={coins}
          />
        </div>
        {/* <div>
          <Portfolio portfolio={portfolio} />
        </div> */}
      </aside>
      <hr />
      <footer>
        <p>
          Cryptomania (est 2023) - powered by the{" "}
          <a href="https://documenter.getpostman.com/view/5734027/RzZ6Hzr3">
            CoinStats API
          </a>
          <br />A project by <a href="https://github.com/kenjiong">Kenji Ong</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
