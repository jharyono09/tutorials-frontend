import axios from "axios";

// Production configuration
export default axios.create({
  baseURL: "https://tutorials-api.herokuapp.com/api/",
  headers: {
    "Content-type": "application/json",
  },
});

//Development Configuration
// export default axios.create({
//   baseURL: "http://localhost:8080/api",
//   headers: {
//     "Content-type": "application/json"
//   }
// });
