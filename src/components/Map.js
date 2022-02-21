import { GoogleMap, Marker } from "react-google-maps";
import dogData from "../data/dummyData.json";
import Geocode from "react-geocode";

import React from "react";

const Map = () => {
  Geocode.setApiKey(process.env.REACT_APP_GOOGLE_KEY);

  // Get latitude & longitude from address.
  Geocode.fromAddress("Eiffel Tower").then(
    (response) => {
      const { lat, lng } = response.results[0].geometry.location;
      console.log(lat, lng);
    },
    (error) => {
      console.error(error);
    }
  );

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
    <>
      <GoogleMap defaultZoom={6} defaultCenter={{ lat: 52.3, lng: 13.25 }}>
        <form>
          <input
            type="text"
            label="Address"
            placeholder="Wätjenstraße 101, Bremen"
          ></input>
        </form>
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
    </>
  );
};

export default Map;
