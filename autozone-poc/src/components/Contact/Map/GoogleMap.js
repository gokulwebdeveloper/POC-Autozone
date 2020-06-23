import React, { Fragment } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const mapStyles = {
  width: "100%",
  height: "100%",
};

function GoogleMap(props) {
  return (
    <Map
      google={props.google}
      zoom={props.zoom}
      style={mapStyles}
      initialCenter={props.initialCenter}
    />
  );
}

GoogleMap.defaultProps = {
  initialCenter: {
    lat: 28.527582,
    lng: 77.0688991,
  },
  zoom: 14,
};

export default GoogleApiWrapper({
  apiKey: process.env.google_maps_api_key,
})(GoogleMap);
