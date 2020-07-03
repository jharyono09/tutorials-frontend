import axios from "axios";

// Production configuration
export default () => {
  return axios.create({
    baseURL: `https://tutorials-api.herokuapp.com/`,
    headers: {
      "Content-type": "application/json",
    },
  });
};

//Development Configuration
// export default axios.create({
//   baseURL: "http://localhost:8080/api",
//   headers: {
//     "Content-type": "application/json"
//   }
// });
