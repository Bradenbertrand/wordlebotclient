import axios from 'axios';

const url = 'http://localhost:5000/';

export const fetchAvg = async () => {
    console.log("Fetching Posts");
    return await axios.get(url + "avg");
};

export const fetchPoints = () => {
    console.log("Fetching Posts");
    return axios.get(url + "points");
};