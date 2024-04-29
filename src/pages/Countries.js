import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import "../style/Packages.css";
import Pagination from "../components/Pagination";
import c1 from "../context/TourContext";
import { useNavigate } from "react-router-dom";

export default function Countries() {
  const value = useContext(c1);
  const { city, desc } = value;
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(8);
  const size = Math.round(city.length / limit);
  const pack = [];
  const navigate = useNavigate();

  const getData = (x) => {
    desc(x);
    navigate(`/tour_description/${x}`, {
      replace: true,
    });
  };

  for (let x = (page - 1) * limit; x < page * limit; x++) {
    if (city[x]) {
      pack.push(city[x]);
    } else {
      break;
    }
  }
  return (
    <div>
      <div className="packages">
        <Navbar className="nav1" />
        <div className="tour1">
          {pack.map((x) => {
            const url = require("../images/" + x.img1);
            return (
              <div
                className="card item1"
                style={{ width: "20vw", height: "32vw" }}
              >
                <img src={url} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title"> {x.dest_name}</h5>
                  <p className="card-text "> {x.desc}</p>
                  <div className="time">
                    <p className="badge text-bg-danger" id="badge">
                      Price : {x.price}
                    </p>
                    <span>
                      <i className="fa-regular fa-clock"></i> {x.days} Days
                    </span>
                  </div>

                  <p>
                    {Array.from(Array(x.rating), () => {
                      return <i className="fa-solid fa-star"></i>;
                    })}
                  </p>
                  <button
                    className="btn btn-primary"
                    onClick={() => getData(x.dest_name)}
                  >
                    View Page
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <Pagination size={size} page={page} set={setPage} />
      </div>
    </div>
  );
}
