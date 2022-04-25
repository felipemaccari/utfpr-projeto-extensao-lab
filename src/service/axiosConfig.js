import axios from "axios";

const authToken = localStorage.getItem("USER");

axios.defaults.headers.common["X-Auth-Token"] = `${authToken}`;
