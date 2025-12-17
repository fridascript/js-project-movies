import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// import { NavLink } from "../Components/NavLink";
import { MovieCard } from "../Components/MovieCard";
import styled from "styled-components";

//styling
const InfoRow = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  gap: 30px;
  background-color: transparent;
  padding: 50px;
  width: 100%;
  max-height: 100%;
  z-index: 1;
  box-sizing: border-box;

  @media (max-width: 576px) {
    flex-direction: column;  
    align-items: flex-start;
    justify-content: flex-end;
    height: 100%;
    padding: 40px;
    gap: 15px;
  }  
`;

const InfoText = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  flex: 1;
`;

const Backdrop = styled.div`
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative; 
  display: flex;
  align-items: flex-end;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(rgba(0,0,0,0)0%, rgba(0,0,0,0.9) 90%);
  }
`;

const Card = styled.div`
border: 2px solid white;
flex: 1;
max-width: 400px;
max-height: 700px;
flex-shrink: 0;
line-height: 0;
overflow: hidden;

img {
  max-width: 100%;
  height: auto;
  display: block;
}

@media (max-width: 576px) {
  width: 250px;
  height: auto;
}
`;

const Title = styled.h1`
@media (max-width: 576px) {
  margin-top: 0;
}
`


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
            <p>{movie.overview}</p>
          </InfoText>
        </InfoRow >
      </Backdrop>
    </>
  );
}

