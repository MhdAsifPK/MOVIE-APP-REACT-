import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import { MDBIcon } from "mdb-react-ui-kit";
import Loader from "./Loader";

function MovieDetails() {
  const { id } = useParams();
  console.log(id);

  const [movieList, setMovieList] = useState(null);
  
  const searchHandler = async (movieID) => {
    const movieApi = await fetch(
      `https://api.themoviedb.org/3/movie/${movieID}?api_key=a5496a08592f32d07777c4950203851a&append_to_response=credits,videos,reviews`
    );
    const movies = await movieApi.json();
    setMovieList(movies);
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    searchHandler(id);
  }, [id]);
  if (!movieList)
    return <p className="text-center text-gray-500"></p>;

  const trailer = movieList.videos.results.find(
    (video) => video.type === "Trailer" && video.site === "YouTube"
  );

  console.log(movieList.videos);
  

  return (
    <>
      {isLoading ? (
        <Loader setIsLoading={setIsLoading} />
      ) : (
        <div className="bg-zinc-900">
          <img
            src={`https://image.tmdb.org/t/p/original/${movieList.backdrop_path}`}
            className=" h-[70vh] w-[300vh] "
            alt=""
          />
          <div className="border-t-8 bg-zinc-900 -mt-40 h-96">
            <div
              className="-mt-40 ml-40"
              style={{ width: "370px", height: "200px" }}
            >
              <Card className="m-2">
                <Card.Img
                  variant="top"
                  src={`https://image.tmdb.org/t/p/original/${movieList.poster_path}`}
                  className="p-2 bg-stone-900"
                />
                <Card.Body className="bg-stone-900 rounded-b-md -mt-1 text-white">
                  <Card.Title>
                    <h3 className="content-center ml-14">{movieList.title}</h3>
                  <li><strong>Genres:</strong> {movieList.genres.map(genre => genre.name).join(', ')}</li>
                  <li><strong>Runtime:</strong> {movieList.runtime} minutes</li>
                  <li><strong>Rating:</strong> {movieList.vote_average} / 10</li>
                  <li><strong>Release Date:</strong> {movieList.release_date}</li>
                  <li><strong>Cast:</strong> {movieList.credits.cast.slice(0, 4).map(actor => actor.name).join(', ')}</li>
                  </Card.Title>
                </Card.Body>
              </Card>
            </div>
            <div className="ml-[550px] m-[1px] text-9xl flex justify-center font-light text-white text-sm">
              <h4 className="font-light text-sm[17px]">
                {movieList.overview}{" "}
                <ul>
                  
                  {console.log(trailer)
                  }
                  {trailer && (
                    <div className="mt-10">
                      <iframe
                        width="400"
                        height="200"
                        src={`https://www.youtube.com/embed/${trailer.key}`}
                      ></iframe>
                    </div>
                  )}
                </ul>
              </h4>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MovieDetails;
