// OPEN STREET MAPS ********************************************

import LeafletMap from "./components/LeafletMap.js";
import OpenStreetMap from "./components/LeafletMap.js";
import "./Map.css";
import Data from "./data/germanCities.json";
import React, { useState } from "react";

function App() {
  const [locations, setLocations] = useState(Data);
  return (
    <>
      {/* <OpenStreetMap /> */}
      <LeafletMap locations={locations} setLocations={setLocations} />
    </>
  );
}

export default App;

// GOOGLE MAPS *********************************************
// import "./App.css";
// import Map from "./components/Map";
// import {
//   // existing imports
//   withGoogleMap,
//   withScriptjs,
// } from "react-google-maps";

// <Map />;

// const MapWrapped = withScriptjs(withGoogleMap(Map));

// function App() {
//   return (
//     <div style={{ width: "100vw", height: "100vh" }}>
//       <MapWrapped
//         googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
//         loadingElement={<div style={{ height: `100%` }} />}
//         containerElement={<div style={{ height: `100%` }} />}
//         mapElement={<div style={{ height: `100%` }} />}
//       />
//     </div>
//   );
// }

// export default App;
