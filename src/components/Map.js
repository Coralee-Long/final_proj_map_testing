import { GoogleMap, Marker } from "react-google-maps";
import dogData from "../data/dummyData.json";

import React from "react";

// console.log(dogData.latlng);

const Map = () => {
  return (
    // TESTING GETTING LAT & LONG:
    // <>
    //   {dogData.map((dog) => (
    //     <>
    //       <p key={dog.id}>LAT: {parseFloat(dog.latlng.split(",")[0])}</p>

    //       <p key={dog.id}>LONG: {parseFloat(dog.latlng.split(",")[1])}</p>
    //     </>
    //   ))}
    // </>

    <GoogleMap defaultZoom={6} defaultCenter={{ lat: 52.3, lng: 13.25 }}>
      {dogData.map((dog) => (
        <Marker
          key={dog.id}
          position={{
            lat: parseFloat(dog.latlng.split(",")[0]),
            lng: parseFloat(dog.latlng.split(",")[1]),
          }}
          icon={{
            url: `https://picsum.photos/id/237/200/300`,
            scaledSize: new window.google.maps.Size(25, 25),
          }}
        />
      ))}
    </GoogleMap>
  );
};

export default Map;
