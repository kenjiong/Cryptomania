export default function DeleteCoin({ deleteWatchlist, id, coinId }) {
  const handleDelete = async () => {
    const decision = window.confirm("Are you sure you want to delete this item from your watchlist?");

    if (!decision) {
      return;
    }

    const url = "https://api.airtable.com/v0/apprApIcqcI5oHlTI/Watchlist";
    const token =
      "patMCS33ZnaCOmRwz.e6010bc1518019b727914ee0c305944a0e1164e73625a18ef29d64d8d04cbb83";
    const response = await fetch(`${url}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    await response.json();
    deleteWatchlist(coinId);
  };
  return <button onClick={handleDelete}>-</button>;
}
