const createWatchlistItem = async (data) => {
    const url = "https://api.airtable.com/v0/apprApIcqcI5oHlTI/Watchlist";
    const key = "patMCS33ZnaCOmRwz.e6010bc1518019b727914ee0c305944a0e1164e73625a18ef29d64d8d04cbb83";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const newHoliday = await response.json();
    return newHoliday;
  };
  
  export default {
    doPostCreateHoliday,
  };

  import {doPostCreateHoliday} from "./holidaysAPI"

export const makeHoliday = async (name) => {
    const data = {
      name,
      celebrated: false,
      description: "",
      likes: 0,
    };
    const newHoliday = await doPostCreateHoliday(data);
    return newHoliday;
  };

  export default {
    makeHoliday
  };