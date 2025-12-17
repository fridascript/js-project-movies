import styled from "styled-components";
import { Link } from "react-router-dom"


//styling
const Card = styled.div`
 position: relative;
  height: auto;
  min-width: 0px;
  text-align: left;

   &:hover div {
    opacity: 1;
  }
`;
const Poster = styled.img`
  width: 100%;
`;
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.7);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;  
  align-items: left;      
  opacity: 0;
  transition: opacity 0.3s ease;
  text-align: left;
  padding: 1rem;
`;
const Title = styled.h2`
  font-size: 1rem;
  background: none;
`;
const ReleaseDate = styled.p`
  font-size: 0.9rem;
    background: none;
`;

//component 
export const MovieCard = ({ movie }) => {
  const IMAGE_BASE = "https://image.tmdb.org/t/p/w342";

  // card with overlay and movie title 
  return (
    <>
      <Card>
        <Link to={`/movies/${movie.id}`}>
          <Poster
            src={`${IMAGE_BASE}${movie.poster_path}`}
            alt={movie.title}
          />
          <Overlay>
            <Title>{movie.title}</Title>
            <ReleaseDate>{movie.release_date}</ReleaseDate>
          </Overlay>
        </Link>
      </Card>
    </>
  )
}

