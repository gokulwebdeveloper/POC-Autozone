import React, { Fragment } from "react";
import PropTypes from "prop-types";
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

GoogleMap.propTypes = {
  initialCenter: PropTypes.object,
  zoom: PropTypes.number,
};

GoogleMap.defaultProps = {
  initialCenter: {
    lat: 35.1207024,
    lng: -90.0729671,
  },
  zoom: 14,
};

export default GoogleApiWrapper({
  apiKey: process.env.google_maps_api_key,
})(GoogleMap);
