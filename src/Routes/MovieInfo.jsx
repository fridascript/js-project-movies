import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// import { NavLink } from "../Components/NavLink";
import { MovieCard } from "../Components/MovieCard";
import styled from "styled-components";

export const MovieInfo = () => {

  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  //fetching API
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=a2b94bfec7b2f944f7fff21bcd94ef06&language=en-US`)
      .then(res => res.json())
      .then(data => setMovie(data))
      .catch(err => console.error(err));
  }, [id]);

  if (!movie) return <p>Loading...</p>;


  return (
    <>
      {/* <NavLink>Movies</NavLink> */}
      <Backdrop
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`
        }}
      >
        <Card>
          <MovieCard movie={movie} />
        </Card>
        <Title>{movie.title}</Title>
        <Info>{movie.overview}</Info>
      </Backdrop>
    </>
  );
}

const Backdrop = styled.div`
 width: 100%;
 height: 100vh;
 background-size: cover;
 background-position: center;
 background-repeat: no-repeat;
`;


const Card = styled.div`
/* margin-top: 400px; */
margin-left: 100px;
margin-bottom: 30px;
border: 2px solid white;
max-width: 200px;
max-height: 300px;
`;

