import GoogleMap from 'components/map/GoogleMap';
import AppContext from 'context/Context';
import React, { useContext } from 'react';

const MapDark = () => {
  return (
    <GoogleMap
      initialCenter={{
        lat: 23.8383608,
        lng: 90.3680554
      }}
      mapStyle="Cobalt"
      className="vh-50 rounded-soft mt-5"
    />
  );
};
const MapLight = () => {
  return (
    <GoogleMap
      initialCenter={{
        lat: 23.8383608,
        lng: 90.3680554
      }}
      mapStyle="Default"
      className="vh-50 rounded-soft mt-5"
    ></GoogleMap>
  );
};
const EventDetailsGmap = () => {
  const {
    config: { isDark }
  } = useContext(AppContext);

  return <>{isDark ? <MapDark /> : <MapLight />}</>;
};

export default EventDetailsGmap;
