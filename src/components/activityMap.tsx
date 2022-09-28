import React, { useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

type ActivityMapProps = {
  latitude: number;
  longitude: number;
};

const containerStyle = {
  height: "400px",
};

const ActivityMap = ({ latitude, longitude }: ActivityMapProps) => {
  const [map, setMap] = useState<any>(null);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY as string,
  });

  const onLoad = React.useCallback(function callback(map: any) {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={{
        lat: latitude,
        lng: longitude,
      }}
      zoom={20}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker position={{ lat: latitude, lng: longitude }} />
      {/* Adding these hardcoded markers because no latitude and longitude given for nearby */}
      <Marker
        draggable
        position={{ lat: 51.05263447173259, lng: 3.7284718576728456 }}
      />
      <Marker
        draggable
        position={{ lat: 51.05266997173259, lng: 3.7284718576728456 }}
      />
      <Marker
        draggable
        position={{ lat: 51.05263447173259, lng: 3.7285928578 }}
      />
    </GoogleMap>
  ) : null;
};

export default ActivityMap;
