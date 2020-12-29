import Axios from "axios";

const instance = Axios.create({
  baseURL:
    "https://chikapp-env.eba-ni56ywqs.ap-southeast-1.elasticbeanstalk.com/",
});

export default instance;
// "http://localhost:5000/"
