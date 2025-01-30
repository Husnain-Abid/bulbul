import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { GoogleMapApiKey } from "../../asset/util/AppAsset";

// Define a default container style for the map
const containerStyle = {
  width: "100%",
  height: "100%",
};

const MapComponent = ({ latitude, longitude }) => {
  // Set the center of the map based on the passed latitude and longitude
  const center = {
    lat: latitude,
    lng: longitude,
  };

  // Map options to disable zoom, fullscreen, and other controls
  const mapOptions = {
    disableDefaultUI: true, // Disable all default UI controls (including zoom)
    zoomControl: false, // Disable zoom control button
    fullscreenControl: false, // Disable fullscreen button
    streetViewControl: false, // Disable StreetView button
    mapTypeControl: false, // Disable map type control (satellite, terrain, etc.)
  };

  return (
    <LoadScript googleMapsApiKey= {GoogleMapApiKey}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        options={mapOptions} // Pass the options here
      >
        {/* Add a marker at the center position */}
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;




