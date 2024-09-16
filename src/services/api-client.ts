import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "aa5a88d0445f4f8888206e44962682e4",
  },
});
