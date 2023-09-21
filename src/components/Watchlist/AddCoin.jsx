import { useState } from "react";

export default function AddCoin({ watchlist, fetchWatchlist, coins }) {
  const [selectedCoin, setSelectedCoin] = useState(1);
  const [status, setStatus] = useState("idle");

  const handleAddCoin = async () => {
    const index = selectedCoin - 1;
    const data = {
      fields: {
        coinId: `${coins[index]?.id}`,
        name: `${coins[index]?.name}`,
        symbol: `${coins[index]?.symbol}`,
        icon: `${coins[index]?.icon}`,
      },
    };

    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].fields.coinId === data.fields.coinId) {
        return;
      }
    }
    try {
      setStatus("loading");
      const url = "https://api.airtable.com/v0/apprApIcqcI5oHlTI/Watchlist";
      const token =
        "patMCS33ZnaCOmRwz.e6010bc1518019b727914ee0c305944a0e1164e73625a18ef29d64d8d04cbb83";
      const response = await fetch(`${url}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });
      await response.json();
      setStatus("success");
      fetchWatchlist();
    } catch (error) {
      setStatus("error");
    }
  };

  const isLoading = status === "loading";
  const isError = status === "error";

  if (isLoading) {
    return <progress />;
  }

  if (isError) {
    return <h2>Something went wrong...</h2>;
  }

  return (
    <div>
      <button
        type="button"
        className="btn btn-success btn-sm"
        data-bs-toggle="modal"
        data-bs-target="#addModal"
      >
        +
      </button>

      <div
        className="modal fade"
        id="addModal"
        tabindex="-1"
        aria-labelledby="addModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="addModalLabel">
                Add to Watchlist
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <select
                className="form-select"
                value={selectedCoin}
                onChange={(event) => setSelectedCoin(event.target.value)}
              >
                {coins.map((coin) => (
                  <option key={coin.id} value={coin.rank}>
                    {coin.name} ({coin.symbol})
                  </option>
                ))}
              </select>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-success"
                onClick={handleAddCoin}
                data-bs-dismiss="modal"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
