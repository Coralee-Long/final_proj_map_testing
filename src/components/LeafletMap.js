import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../Map.css";

import React, { useState } from "react";

import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";

const icon = new Icon({
  iconUrl: markerIconPng,
  iconSize: [12, 20],
  iconAnchor: [12, 41],
});

const LeafletMap = ({ locations, setLocations }) => {
  const startPosition = [51.0647, 12.0128];

  console.log(locations);

  return (
    <MapContainer center={[startPosition[0], startPosition[1]]} zoom={5}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map((point) => {
        return (
          <>
            {/* <h1>{point.latitude}</h1> */}
            <Marker
              position={[point.lat, point.lng]}
              icon={icon}
              key={point.address1}
            >
              <Popup>I am a pop-up!</Popup>
            </Marker>
          </>
        );
      })}
    </MapContainer>
  );
};

export default LeafletMap;
// const center = [51.0647, 12.0128];

// const OpenStreetMap = () => {
//   return (
//     <MapContainer center={center} zoom={13}>
//       <TileLayer
//         attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
//       <Marker position={center}>
//         <Popup>I am a pop-up!</Popup>
//       </Marker>
//     </MapContainer>
//   );
// };

// export default OpenStreetMap;
