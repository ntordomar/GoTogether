import { createContext } from 'react';

const initialLocation = {
  lat: 0,
  lng: 0
};

const LocationContext = createContext(initialLocation);

export default LocationContext;