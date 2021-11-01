import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID CH0vmrlU8KI22R7paxUSyxQ7nV2yWoYNE_h3lof_Hr8",
  },
});
