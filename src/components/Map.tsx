import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 48.4232, // Latitude for Sasinkovo, Slovakia
  lng: 17.7281, // Longitude for Sasinkovo, Slovakia
};

const GoogleMapComponent: React.FC = () => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  // Check if API key exists
  if (!apiKey) {
    return <div>Error: Google Maps API key is missing.</div>;
  }

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={20}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
