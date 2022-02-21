import LeafletMap from "./components/LeafletMap.js";
import "./Map.css";
import Data from "./data/germanCities.json";
import { useState } from "react";

function App() {
  const [locations, setLocations] = useState(Data);
  return (
    <>
      <LeafletMap locations={locations} setLocations={setLocations} />
    </>
  );
}

export default App;
