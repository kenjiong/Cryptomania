import { useState } from "react";

export default function DeleteCoin({ fetchWatchlist, id }) {
  const [status, setStatus] = useState("idle");

  const handleDelete = async () => {
    try {
      setStatus("loading");
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
        className="btn btn-danger btn-sm"
        data-bs-toggle="modal"
        data-bs-target="#deleteModal"
      >
        -
      </button>

      <div
        className="modal fade"
        id="deleteModal"
        tabindex="-1"
        aria-labelledby="deleteModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <h1 className="modal-title fs-5" id="deleteModalLabel">
                Are you sure you want to delete this coin from your watchlist?
              </h1>
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
                className="btn btn-danger"
                onClick={handleDelete}
                data-bs-dismiss="modal"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
