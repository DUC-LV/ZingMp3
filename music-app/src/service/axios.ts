import axios from "axios";

const instance = axios.create({
    baseURL:`https://mp3.zing.vn/`,
    headers: {
        'Content-Type':'application/json'
    }
});
instance.defaults.params = {};
export default instance;