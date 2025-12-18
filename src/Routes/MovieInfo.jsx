import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import NavLink from "../Components/NavLink";
import { MovieCard } from "../Components/MovieCard";

//styling
const InfoRow = styled.div`
  position: absolute;
  bottom: 10px;
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
  max-width: 400px;
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
margin-left: 80px;
margin-bottom: 20px;
border: 6px solid white;
max-width: 80%;
max-height: 60%x;
`;
const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px; 
`;

const Title = styled.h1`
margin-top: 330px;
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);

`
const Rating = styled.span`
  background-color: #ffffffad;
  color: black;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  font-weight: bold;
  border-radius: 2px;
  padding: 0.2rem 0.5rem;
  font-size: 1rem;
  margin-top: 330px;
  `;
const Info = styled.p`
 text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);

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

  // backdrop, movie poster and info
  return (
    <>
      <Backdrop
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`
        }}
      >
        <NavLink to="/"> ⬅ Movies</NavLink>
        <InfoRow>
          <Card>
            {/* <MovieCard movie={movie} /> */}
            <img src={posterUrl} alt={movie.title} />
          </Card>
          <InfoText>
            <TitleRow>
              <Title>{movie.title}</Title>
              <Rating> ⭐️ {movie.vote_average.toFixed(1)}</Rating>
            </TitleRow>
            <Info>{movie.overview}</Info>
          </InfoText>
        </InfoRow >
      </Backdrop>
    </>
  );
}

