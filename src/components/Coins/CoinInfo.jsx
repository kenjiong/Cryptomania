import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function useFetchCoinInfo(coinId, fiat) {
  const [coin, setCoin] = useState({});
  const [markets, setMarkets] = useState([]);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        setStatus("loading");
        const url = `https://openapiv1.coinstats.app/coins/${coinId}?currency=${fiat}`;
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            "X-API-KEY": "zS+xwg1S0eBD4554v8Q1G4K+dJiLrbVmGpCLGJR+Lko=",
          },
        };
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }
        const data = await response.json();
        setStatus("success");
        setCoin(data);
      } catch (error) {
        setStatus("error");
      }
    };
    fetchCoin();
  }, [coinId, fiat]);

  useEffect(() => {
    const fetchMarkets = async () => {
      try {
        setStatus("loading");
        const url = `https://openapiv1.coinstats.app/tickers/markets?coinId=${coinId}`;
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            "X-API-KEY": "zS+xwg1S0eBD4554v8Q1G4K+dJiLrbVmGpCLGJR+Lko=",
          },
        };
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }
        const data = await response.json();
        setStatus("success");
        setMarkets(data.result);
      } catch (error) {
        setStatus("error");
      }
    };
    fetchMarkets();
  }, [coinId, fiat]);

  const isLoading = status === "loading";
  const isError = status === "error";

  return { coin, markets, isLoading, isError };
}

export default function CoinInfo({ fiat }) {
  const { coinId } = useParams();

  const { coin, markets, isLoading, isError } = useFetchCoinInfo(coinId, fiat);

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
          <h3>
            <img className="logo" src={`${coin.icon}`} /> {coin.name} (
            {coin.symbol})
          </h3>
        </p>
        <div className="fs-5">
          <p>
            Price ({fiat}): {coin.price}
          </p>
          <p>Price Change (1h): {coin.priceChange1h}%</p>
          <p>Price Change (1d): {coin.priceChange1d}%</p>
          <p>Price Change (1w): {coin.priceChange1w}%</p>
          <p>Volume: {coin.volume}</p>
        </div>
      </div>
      <br />
      <h3 className="text-info">Markets Info</h3>
      <div className="container">
        <div className="row row-cols-4">
          {markets.map((market) => (
            <div className="col border border-secondary">
              <p>Pair: {market.pair}</p>
              <p>Price: {market.price}</p>
              <p>Exchange: {market.exchange}</p>
              <p>Volume: {market.volume}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
