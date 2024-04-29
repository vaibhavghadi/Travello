import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../style/Description.css";
import c1 from "../context/TourContext";

export default function Description() {
  const value = useContext(c1);
  const navigate = useNavigate();
  const { name, setDest } = value;
  let data = [];
  let url;
  let days = [];

  if (name[0]) {
    data = name[0];
    url = require("../images/" + data.img1);
    days = [data.day1, data.day2, data.day3, data.day4, data.day5, data.day6];
  }

  return (
    <div>
      <Navbar />
      <div className="description">
        <div className="desc_img">
          <img src={url} className="desc_image" />
        </div>
        <div className="desc">
          <h3>Description :-</h3>
          <p className="para">{data.desc}</p>
          {days.map((x, index) => {
            if (x == "NONE") {
              return null;
            }
            return (
              <>
                <h4>Day {index + 1} : </h4>
                {<p className="para"> {x}</p>}
              </>
            );
          })}
          <input
            type="button"
            value="Book Now"
            className="btn btn-primary"
            onClick={() => {
              navigate(`/tour_description/passenger_list/${data.dest_name}`);
              setDest({ city: data.dest_name, payment: data.price });
            }}
          />
        </div>
      </div>
    </div>
  );
}
