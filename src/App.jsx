import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Routes/Home"
import { MovieInfo } from "./Routes/MovieInfo"

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<MovieInfo />} />
      </Routes>
    </BrowserRouter>
  );
}


