// GoogleMapComponent.jsx
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '500px'
};

const center = {
  lat: 28.6139,
  lng: 77.2090
};

const MapComponent = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyCp49PklYM9bMQA1wPA-mlfQjfZycVI33U">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
