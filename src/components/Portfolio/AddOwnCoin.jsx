export const doPostCreateHoliday = async (data) => {
    const url = "http://localhost:3000/api/holidays/";
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