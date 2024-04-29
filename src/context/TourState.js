import c1 from "./TourContext";
import React, { useEffect, useState } from "react";

const TourState = (props) => {
  // const [progress, setProgress] = useState(0);

  useEffect(() => {
    // if (localStorage.getItem("token")) {
    //   show();
    // } else {
    //   <Navigate to="/login" />;
    // }
    count();
    // show();
  });

  // const val1 = () => {
  //   return localStorage.getItem("user");
  // };

  // const val2 = (name, token) => {
  //   localStorage.setItem("user", name);
  //   localStorage.setItem("token", token);
  // };

  // const clear = () => {
  //   return localStorage.clear();
  // };

  const signup1 = async (x) => {
    const result = await fetch("http://localhost:4500/signup", {
      method: "POST",
      body: JSON.stringify(x),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await result.json();

    if (data.register) {
      alert("User Registered Successfully !!!!");
    } else {
      alert("User Is Already Registered");
    }
  };

  const signin1 = async (x) => {
    const result = await fetch("http://localhost:4500/login", {
      method: "POST",
      body: JSON.stringify(x),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await result.json();

    if (data.sign) {
      alert("Login Successfully !!!");
      localStorage.setItem(
        "user",
        JSON.stringify({ user: x.username, login: true })
      );
      localStorage.setItem("token", data.sign);
    } else {
      alert("Username / Password Is Incorrect !!!!");
      localStorage.setItem(
        "user",
        JSON.stringify({ user: x.username, login: false })
      );
    }
  };

  const change = async (x) => {
    const result = await fetch("http://localhost:4500/login1", {
      method: "PUT",
      body: JSON.stringify({
        username: x,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    localStorage.clear();
  };

  const show = async () => {
    const data = await fetch("http://localhost:4500/Packages", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await data.json();
    setState(result);
  };

  const count = async () => {
    const data1 = await fetch("http://localhost:4500/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result1 = await data1.json();
    setCountry(result1);
  };

  const cities = async (name) => {
    const data1 = await fetch(`http://localhost:4500/country/${name}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result1 = await data1.json();
    setCity(result1);
  };

  const desc = async (name1) => {
    const data1 = await fetch(
      `http://localhost:4500/tour_description/${name1}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const result1 = await data1.json();
    setName(result1);
  };

  const card = async (y) => {
    const data1 = await fetch(`http://localhost:4500/Payment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(y),
    });
  };

  const passenger = async (y) => {
    console.log(y.valid_form);
    const data1 = await fetch(
      `http://localhost:4500/tour_description/passenger_list/${y.valid_form[0].city}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(y.valid_form),
      }
    );
    // const result = await data1.json();
    // setPass(result);
  };

  const sample = () => {
    let final = 0;
    let limit = 5;
    let size = state.length;

    if (size % limit == 0) {
      final = size / limit;
    } else {
      final = Math.round(size / limit);
    }

    return final;
  };

  const [state, setState] = useState([]);
  const [country, setCountry] = useState([]);
  const [city, setCity] = useState([]);
  const [name, setName] = useState([]);
  const [pass, setPass] = useState([]);
  const [dest, setDest] = useState({ city: "", payment: null });

  return (
    <c1.Provider
      value={{
        state,
        show,
        sample,
        country,
        cities,
        card,
        city,
        desc,
        name,
        passenger,
        pass,
        setDest,
        dest,
        signin1,
        signup1,
        change,
      }}
    >
      {props.children}
    </c1.Provider>
  );
};

export default TourState;
