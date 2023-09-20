import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

export default function AddCoin({ addWatchlist, coins }) {
  const [selectedCoin, setSelectedCoin] = useState(1);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleAddCoin = async () => {
    const index = selectedCoin - 1;
    const data = {
      "fields": {
        "name": `${coins[index]?.name}`,
        "coinId": `${coins[index]?.id}`,
        "symbol": `${coins[index]?.symbol}`,
        "price": `${coins[index].price}`
      }
    };
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
      addWatchlist(data.fields);
    };

  return (
    <div>
      <button onClick={handleOpen}>+</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <fieldset>
            <label>
              Add to Watchlist
              <select value={selectedCoin} onChange={event => setSelectedCoin(event.target.value)}>
                {coins.map((coin) => (
                  <option key={coin.id} value={coin.rank}>
                    {coin.symbol}
                  </option>
                ))}
              </select>
              <br />
              <button onClick={handleAddCoin}>Add</button>
            </label>
          </fieldset>
        </Box>
      </Modal>
    </div>
  );
}
