import LeafletMap from "./components/LeafletMap.js";
import "./Map.css";
import Data from "./data/germanCities.json";
import { useState } from "react";
import GeoCodeTest from "./components/GeoCodeTest.js";

function App() {
  const [locations, setLocations] = useState(Data);
  return (
    <>
      <GeoCodeTest locations={locations} setLocations={setLocations} />
      <LeafletMap locations={locations} setLocations={setLocations} />
    </>
  );
}

export default App;
