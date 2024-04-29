import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Passenger from "./pages/Passenger";
import Show from "./pages/Show";
import User from "./pages/User";
import Description from "./pages/Description";
import TourState from "./context/TourState";
import Packages from "./pages/Packages";
import Countries from "./pages/Countries";
import Private from "./pages/Private";
import Payment from "./pages/Payment";

export default function App() {
  return (
    <div className="App">
      <TourState>
        <Router>
          <Routes>
            <Route element={<Private />}>
              <Route path="/" element={<Home />} />
              <Route
                path="/tour_description/passenger_list/:name/Payment"
                element={<Payment />}
              />
              <Route
                path="/tour_description/:name/"
                element={<Description />}
              ></Route>
              <Route
                path="/tour_description/passenger_list/:name"
                element={<Passenger />}
              />
              <Route path="/contact" element={<Show />} />
              <Route path="/packages" element={<Packages />} />
              <Route path="/country/:name" element={<Countries />} />
            </Route>
            <Route path="/user" element={<User />} />
          </Routes>
        </Router>
      </TourState>
    </div>
  );
}
