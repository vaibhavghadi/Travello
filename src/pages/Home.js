import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import "../style/Home.css";
import c1 from "../context/TourContext";
import { NavLink, useNavigate } from "react-router-dom";

export default function Home() {
  const value = useContext(c1);
  const { cities, country } = value;

  const navigate = useNavigate();

  const getCities = (x) => {
    cities(x);
    navigate(`/country/${x}`, { replace: true });
  };

  const data = [
    {
      img: require("../images/pics/banner.png"),
    },
    {
      img: require("../images/pics/banner2.png"),
    },
    {
      img: require("../images/pics/banner3.png"),
    },
  ];

  return (
    <div>
      <Navbar className="nav1" />
      <div className="cont1">
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            {data.map((x) => {
              return (
                <div className="carousel-item active">
                  <img src={x.img} className="d-block win" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>ADVENTURE IS WORTHWHILE</h5>
                    <p>
                      Discover New Places Along With Us , Adventure Awaits ....
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="country">
        <h1 id="ctitle">Popular Destinations</h1>
        <h4>
          A Wonderful serenity has taken to the posession of my entire soul
        </h4>
      </div>
      <div className="tour">
        {country.map((x) => {
          const url = require("../images/" + x.img1);
          return (
            <div
              className="card item1"
              style={{ width: "18vw", height: "13vw" }}
              onClick={() => getCities(x.country)}
            >
              <img src={url} className="card-img-top image" alt="..." />
              <div className="card-body cbody">
                <h5 className="card-title ctitle">
                  {" "}
                  <span className="badge text-bg-danger">{x.country}</span>
                </h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
