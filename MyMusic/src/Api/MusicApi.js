import axios from "axios";

const albumAPI = {
    method: "GET",
    url: "https://spotify23.p.rapidapi.com/search/",
    params: {
      q: "<REQUIRED>",
      type: "multi",
      offset: "0",
      limit: "10",
      numberOfTopResults: "5"
    },
    headers: {
      "x-rapidapi-host": "spotify23.p.rapidapi.com",
      "x-rapidapi-key": "eed5de033cmsh00d7be4071d3c36p183f53jsnc58326769e59"
    }
  };