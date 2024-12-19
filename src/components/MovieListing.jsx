import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate, useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";

function MovieListing({title,poster,releaseDate}) {
 
  return (
    <>
    <div>
      <Card type="button" style={{width:"200px", height:"350px"}} className=" m-2 mx-3 mb-5">
        <Card.Img variant="top"  src={poster} className="p-2 bg-red-900 h-64"/>
        <Card.Body className="bg-red-900 rounded-b-md -mt-2">
          <Card.Title ><h4 className="truncate text-sm -m-2 text-slate-300" >{title}</h4>
          
          <p className="text-zinc-500 text-sm mt-4 -m-2">{releaseDate}</p>
          
          </Card.Title>
        </Card.Body>
      </Card>
      
      </div>
    </>
  );
}

export default MovieListing;
