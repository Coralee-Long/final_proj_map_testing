import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../Map.css";

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
