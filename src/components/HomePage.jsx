import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MovieListing from "./MovieListing";
import Carousel from "react-bootstrap/Carousel";
// import SearchAndFiltering from "./SearchAndFiltering";
import { Navbar, Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Footer from "./Footer";
import NavBar from "./NavBar";

function HomePage() {
  const navigate = useNavigate();
  const [faverate, setfaverate] = useState([]);

  const [popular, setpopular] = useState([]);

  const [rated, setrated] = useState([]);
  const [latest, setlatest] = useState([]);

  // =======API FETCHING=========

  const popularApi = async () => {
    const movieApi = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=a5496a08592f32d07777c4950203851a`
    );
    const movies = await movieApi.json();
    setpopular(movies.results);
  };
  const faverateApi = async () => {
    const movieApi = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=a5496a08592f32d07777c4950203851a`
    );
    const movies = await movieApi.json();
    setfaverate(movies.results);
  };
  const ratedApi = async () => {
    const movieApi = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=a5496a08592f32d07777c4950203851a`
    );
    const movies = await movieApi.json();
    setrated(movies.results);
  };
  const latestApi = async () => {
    const movieApi = await fetch(
      `https://api.themoviedb.org/3/discover/movie?primary_release_year=2024&api_key=a5496a08592f32d07777c4950203851a`
    );
    const movies = await movieApi.json();
    setlatest(movies.results);
  };

  // const searchHandlerButton = () => {
  //   navigate("/search");
  // };
  const detailHandler = (id) => {
    navigate(`/details/${id}`);
  };

  useEffect(() => {
    latestApi();
    popularApi();
    faverateApi();
    ratedApi();
  }, []);

  return (
    <>
      {/* =============NAVBAR SECTION=================== */}
      <div className="bg-stone-900">
        {/* <NavBar/> */}
        {/* ============BANNER SECTION======================== */}
        <form>
          <div id="banner" className="flex mt-2">
            <Container className="h-[530px] ">
              <Carousel data-bs-theme="dark">
                {latest.map((item, ind) => {
                  return (
                    <Carousel.Item key={ind} className="bg-stone-900">
                      <div className="flex">
                        <img
                          className="d-block relative object-cover rounded-xl  h-[530px] w-full brightness-0"
                          src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                          alt="First slide"
                        />

                        <img
                          onClick={() => detailHandler(item.id)}
                          className="d-block boxshadowOut absolute object-cover border-y-yellow-950 h-[500px]  my-4 ml-48 rounded-xl"
                          src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                          alt="First slide"
                        />

                        <Carousel.Caption className="flex flex-col ml-[430px] mb-24 ">
                          <h5 className="truncate p-4 w-[300px] text-center bg-red-800 uppercase rounded-3xl text-1xl mx-4 text-gray-200 boxshadowOut">
                            {item.title}
                          </h5>
                          <p className="text-white text-sm text-center">
                            {item.release_date}
                          </p>{" "}
                          <span></span>
                        </Carousel.Caption>
                      </div>
                    </Carousel.Item>
                  );
                })}
              </Carousel>
            </Container>
          </div>

          {/* ===========MOVIE LISTING==================== */}
          <div
            id="popularmovie"
            className="bg-red-900 py-3 mx-4 mt-20 rounded-xl"
          >
            <h3 className=" mx-3 p-1 rounded-lg uppercase text-lg bg-white text-black-400">
              popular movie
            </h3>
            <div className="flex mx-3  overflow-x-auto overflow-y-hidden">
              {popular.map((item, ind) => {
                return (
                  <div onClick={() => detailHandler(item.id)} key={ind}>
                    <MovieListing
                      title={item.title}
                      poster={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                      releaseDate={item.release_date}
                    />
                  </div>
                );
              })}
            </div>
            <h3 className=" m-3 p-1 rounded-lg uppercase text-lg bg-white text-black-400">
              Rated
            </h3>
            <div
              id="rated"
              className="flex mx-3  overflow-x-auto overflow-y-hidden"
            >
              {rated.map((item, ind) => {
                return (
                  <div onClick={() => detailHandler(item.id)} key={ind}>
                    <MovieListing
                      title={item.title}
                      poster={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                      releaseDate={item.release_date}
                    />
                  </div>
                );
              })}
            </div>
            <h3
              id="faverate"
              className=" m-3 p-1 rounded-lg uppercase text-lg bg-white text-black-400"
            >
              Favorite
            </h3>
            <div className="flex mx-3  overflow-x-auto overflow-y-hidden">
              {faverate.map((item, ind) => {
                return (
                  <div onClick={() => detailHandler(item.id)} key={ind}>
                    <MovieListing
                      title={item.title}
                      poster={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                      releaseDate={item.release_date}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </form>
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
