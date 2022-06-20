import axios from "axios";

const getData = async (path) => {
  const data = await axios
    .request({
      method: "GET",
      url: `https://fakestoreapi.com/${path}`,
      headers: {
        "X-RapidAPI-Key": "bdb7eaf2demshce7bcd6b0bc8993p19b3e1jsn82a4d65cfafb",
        "X-RapidAPI-Host": "covid-19-statistics.p.rapidapi.com",
      },
    })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
  return data;
};

export default getData;
