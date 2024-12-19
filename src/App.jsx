import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import HomePage from "./components/HomePage";
import { Routes, Route } from "react-router-dom";

import SearchAndFiltering from "./components/SearchAndFiltering";
import MovieDetails from "./components/MovieDetails";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/search" element={<SearchAndFiltering />} />
        <Route path="/details/:id" element={<MovieDetails />} />
      </Routes>
    </>
  );
}

export default App;
