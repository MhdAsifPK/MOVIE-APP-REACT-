import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";
// import ReactStars from "react-stars";
import { Navigate } from "react-router-dom";
import { MDBIcon } from "mdb-react-ui-kit";
// import Footer from "./Footer";
// import NavBar from "./NavBar";


function SearchAndFiltering() {
  const [searitile, setsearitle] = useState([]);
  const searchTitile = useRef();
  const navigate=useNavigate()
  const searchHandler = async (titile) => {
    const movieApi = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=a5496a08592f32d07777c4950203851a&query=${titile}`
    );
    const movies = await movieApi.json();
    console.log(movies.results);

    setsearitle(movies.results);
  };

  const detailHandler=((id)=>{
    navigate(`/details/${id}`)
  })
  const searchHandlerss = () => {
    searchHandler(searchTitile.current.value.replace(" ", "+"));
    console.log(searitile);
  };

  const handleBack = () => {
    navigate('/');
  };
  return (
    <>
    {/* <NavBar/> */}
    <span onClick={handleBack} className="bg-blue-500  text-white  rounded-full p-2 ">
    <MDBIcon fas icon="chevron-circle-left" />
        </span>
    
    <div className="flex justify-center  ">
    <div className="max-h-0 justify-center  mt-2">
        {/* <span onClick={handleBack} className="bg-blue-500  text-white  rounded-full p-2 ">
        <MDBIcon fas icon="home" />
        </span> */}
      </div>
      <div className="flex justify-center h-12 rounded-3xl boxshadowOut focus-within:shadow-lg bg-white overflow-hidden mt-20 w-96">
        <input
          className="peer h-full w-full outline-none text-sm text-gray-700 pr-2 pl-3"
          type="text"
          id="search"
          placeholder="Search something.."
          ref={searchTitile}
        />
        <div
         
          className="grid place-items-center h-full w-12 text-gray-300"
        >
          <span  onClick={searchHandlerss}><MDBIcon fas icon="search" /></span>
        </div>
      </div>
      
    </div>
    <div className="flex flex-wrap mx-3 m-4 bg-slate-700 justify-center">
      {searitile.map((item, ind) => {
        return (
          <div key={ind} className="boxshadowOut m-2">
            <Card onClick={() => detailHandler(item.id)}
              style={{ width: "200px", height: "360px" }}
              className="m-2"
            >
              <Card.Img
                variant="top"
                src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                className="p-2 bg-stone-900"
              />
              <Card.Body className="bg-stone-900 rounded-b-md -mt-1">
                <Card.Title>
                  <h4 className="truncate text-sm -m-2 text-slate-300">
                    {item.title}
                  </h4>
                  <p className="text-zinc-500 text-sm -m-2">{item.release_date}</p>
                </Card.Title>
              </Card.Body>
            </Card>
          </div>
        );
      })}
     
    </div>
    {/* <Footer/> */}
  </>
  );
}

export default SearchAndFiltering;
