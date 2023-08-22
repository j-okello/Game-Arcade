import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "fd848c7d1d9b408683f7c58b2d53b0a9",
  },
});
