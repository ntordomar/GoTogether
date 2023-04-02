import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import { Box } from '@chakra-ui/react';
import { useEffect, useRef } from 'react';
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB9xmRVlQYRcTxhjM9b8RggYJBfqu6fZfA"></script>
const Map = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const mapOptions = {
      center: { lat: 37.7749, lng: -122.4194 },
      zoom: 11
    };
    const map = new window.google.maps.Map(mapRef.current, mapOptions);
  }, []);

  return <Box h="400px" w="100%" ref={mapRef} />;
};

export default Map;



