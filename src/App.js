/* eslint-disable jsx-a11y/alt-text */
import "./App.css";
import { getMovieList, searchMovie, searchMovieUpcoming } from "./api";
import { useEffect, useState } from "react";

// const App = () => {
//   const [popularMovies, setPopularMovies] = useState([]);

//   useEffect(() => {
//     getMovieList().then((result) => {
//       setPopularMovies(result);
//     });

//     // setPopularMovies(getMovieList());
//   }, []);

//   const search = async (q) => {
//     if (q.length > 3) {
//       const query = await searchMovie(q);

//       setPopularMovies(query.results);
//       console.log({ query: query });
//     }
//   };

//   // console.log({ popularMovies: popularMovies });

//   const PopularMovieList = () => {
//     return popularMovies.map((movie, i) => {
//       return (
//         <div className="Movie-wrapper" key={i}>
//           <div className="Movie-title">{movie.title}</div>
//           <img
//             className="Movie-image"
//             src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
//           />
//           <div className="Movie-date">{movie.release_date}</div>
//           <div className="Movie-rate">{movie.vote_average}</div>
//         </div>
//       );
//     });
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>MOVIE FILMS</h1>
//         <input
//           type="text"
//           placeholder="Cari Film...."
//           className="Movie-search"
//           onChange={({ target }) => search(target.value)}
//         />
//         <div className="Movie-container">
//           <PopularMovieList />
//         </div>
//       </header>
//     </div>
//   );
// };

const App = () => {
  const [upcomingMovie, setUpcomingMovie] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getMovieList().then((result) => {
      setUpcomingMovie(result);
    });
  }, []);

  const debounce = (func, delay) => {
    let timer;

    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => func.apply(this, args), delay);
    };
  };

  const search = debounce(async (q) => {
    if (q.length > 3) {
      const query = await searchMovieUpcoming(q);
      setUpcomingMovie(query.results);
    }
    // console.log({ query: query });
  }, 500);

  // console.log({ upcomingMovie: upcomingMovie });

  const UpcomingMovieList = () => {
    return upcomingMovie.map((movie, i) => {
      return (
        <div className="Movie-wrapper" key={i}>
          <div className="Movie-title">{movie.title}</div>
          <img
            className="Movie-image"
            src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
          />
          <div className="Movie-date">{movie.release_date}</div>
          <div className="Movie-rate">{movie.vote_average}</div>
        </div>
      );
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>MOVIE FILMS</h1>
        <input
          type="text"
          placeholder="Cari Film...."
          className="Movie-search"
          onChange={({ target }) => {
            search(target.value);
            setSearchTerm(target.value);
          }}
        />
        <div className="Movie-container">
          <UpcomingMovieList />
        </div>
      </header>
    </div>
  );
};

export default App;
