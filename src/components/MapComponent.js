import React from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import MarkerIcon from "./MarkerIcon";

const MapComponent = ({ selectedLocation }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
  });
  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);
  if (loadError) return "Error";
  if (!isLoaded) return "Maps";

  return (
    <div>
      <GoogleMap
        mapContainerStyle={{
          height: "630px",
        }}
        center={selectedLocation}
        zoom={10}
        onLoad={onMapLoad}
      >
        <MarkerF
          position={selectedLocation}
          icon={<MarkerIcon />}
        />
      </GoogleMap>
    </div>
  );
};

export default MapComponent;
