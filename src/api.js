// import axios from "axios";

// // function untuk mengambil data api

// const apiKey = process.env.REACT_APP_APIKEY;
// const baseUrl = process.env.REACT_APP_BASEURL;

// export const getMovieList = async () => {
//   const movie = await axios.get(
//     `${baseUrl}/movie/popular?page=1&api_key=${apiKey}`
//   );
//   return movie.data.results;
//   //   console.log({ movieList: movie });
// };

// export const searchMovie = async (q) => {
//   const search = await axios.get(
//     `${baseUrl}/search/movie?query=${q}&page=1&api_key=${apiKey}`
//   );
//   return search.data;
// };

import axios from "axios";

const apiKey = process.env.REACT_APP_APIKEY;
const baseUrl = process.env.REACT_APP_BASEURL;

export const getMovieList = async () => {
  const movie = await axios.get(
    `${baseUrl}/movie/upcoming?page=1&api_key=${apiKey}`
  );

  return movie.data.results;

  // console.log({ movie: movie });
};

export const searchMovieUpcoming = async (q) => {
  const query = await axios.get(
    `${baseUrl}/search/movie?query=${q}&page=1&api_key=${apiKey}`
  );

  return query.data;

  // console.log({ query: query });
};
