import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// import { NavLink } from "../Components/NavLink";
import { MovieCard } from "../Components/MovieCard";
import styled from "styled-components";

//styling
const InfoRow = styled.div`
  position: absolute;
  bottom: 40px;
  left: 40px;
  display: flex;
  align-items: flex-start;
  gap: 30px;
  background-color: transparent;
`;

const InfoText = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
`;

const Backdrop = styled.div`
 width: 100%;
 height: 100vh;
 background-size: cover;
 background-position: center;
 background-repeat: no-repeat;
 position: relative; 
`;

const Card = styled.div`
margin-left: 100px;
margin-bottom: 30px;
border: 2px solid white;
max-width: 500px;
max-height: 700px;
`;
const Title = styled.h1`
margin-top: 350px;
`
const Info = styled.p`
  `;


//component 
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

  // backgrop, movie poster and info
  return (
    <>
      {/* <NavLink>Movies</NavLink> */}
      <Backdrop
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`
        }}
      >
        <InfoRow>
          <Card>
            <MovieCard movie={movie} />
          </Card>
          <InfoText>
            <Title>{movie.title}</Title>
            <Info>{movie.overview}</Info>
          </InfoText>
        </InfoRow >
      </Backdrop>
    </>
  );
}

