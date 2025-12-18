import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import NavLink from "../Components/NavLink";

//styling

const TopNav = styled.div`
display: flex;
position: absolute;
top: 20px;
z-index: 10;
`;

const InfoRow = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: left;
  gap: 15px;
  padding: 20px;
  z-index: 1;
  box-sizing: border-box;

  @media (min-width: 768px) { 
    flex-direction: row;
    align-items: flex-end;
    gap: 30px;
    padding: 50px;
  }
`;

const InfoText = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  gap: 10px;


  @media (min-width: 768px) {
    max-width: 400px; 
  }
`;

const Backdrop = styled.div`
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative; 
  display: flex;
  align-items: column;
 

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(rgba(0,0,0,0)0%, rgba(0,0,0,0.9) 90%);
  }

 @media (min-width: 768px) {
    height: 100vh; 
    align-items: flex-end; 
  }
`;

const Card = styled.div`
  width: 100%; 
  height: 80%;
  max-width: 60%;
  aspect-ratio: 2 / 3; 
  border: 6px solid white;
  margin-top: 60px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; 
    display: block;
  }
`;

const TitleRow = styled.div`
  align-items: center;
  gap: 2px;

    @media (min-width: 768px) {
    display: flex;
  }
`;
const Title = styled.h1`
margin-bottom: 10px;
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);

@media (min-width: 768px) {
    margin-top: 330px; 
  }
`;
const Rating = styled.span`
  background-color: #ffffffad;
  color: black;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  font-weight: bold;
  border-radius: 2px;
  padding: 0.2rem 0.5rem;
  font-size: 1rem;
  margin-top: 0px;

@media (min-width: 768px) {
    margin-top: 330px; 
  }
  `;

const Info = styled.p`
 text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
 font-size: 12px;
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
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  //backdrop, movie poster and info
  return (
    <>
      <Backdrop
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`
        }}
      >
        <TopNav>
          <NavLink to="/"> ⬅ Movies</NavLink>
        </TopNav>
        <InfoRow>
          <Card>
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

