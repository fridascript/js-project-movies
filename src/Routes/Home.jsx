import { useEffect, useState } from "react";
import { MovieCard } from "../Components/MovieCard"
import styled from "styled-components";

//styling 
const Grid = styled.section`
  display: grid;
  gap: 0;
  margin: 0;
  grid-template-columns: repeat(2, minmax(140px, 1fr)); 

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(140px, 1fr));
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, minmax(140px, 1fr));

  }
`;

// component 
export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  //fetching API
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=a2b94bfec7b2f944f7fff21bcd94ef06&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(data => {
        setMovies(data.results);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching movies:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading movies...</p>;

  // movie grid
  return (
    <Grid>
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </Grid>
  );
}




