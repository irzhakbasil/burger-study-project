import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-marvin.firebaseio.com/"
});

export default instance;
