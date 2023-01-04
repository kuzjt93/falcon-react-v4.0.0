import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from 'context/Context';
import googleMapStyles from 'helpers/googleMapStyles';
import {
  GoogleMap as ReactGoogleMap,
  Marker,
  InfoWindow,
  useJsApiLoader
} from '@react-google-maps/api';
import mapMarker from '../../../src/assets/img/icons/map-marker.png';

const GoogleMap = ({
  mapStyle,
  initialCenter,
  darkStyle,
  className,
  children,
  ...rest
}) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY
  });

  const {
    config: { isDark }
  } = useContext(AppContext);

  const [showInfoWindow, setShowInfoWindow] = useState(false);
  const [mapStyles, setMapStyles] = useState(mapStyle);

  const options = {
    mapTypeControl: true,
    streetViewControl: true,
    fullscreenControl: true,
    styles: googleMapStyles[mapStyles]
  };

  useEffect(() => {
    if (darkStyle && isDark) setMapStyles(darkStyle);
    else setMapStyles(mapStyle);
  }, [isDark]);

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className={`h-100 ${className}`} {...rest}>
      <ReactGoogleMap
        zoom={18}
        options={options}
        center={initialCenter}
        mapContainerStyle={{
          width: '100%',
          height: '100%'
        }}
      >
        <Marker
          onClick={() => setShowInfoWindow(!showInfoWindow)}
          position={initialCenter}
          icon={mapMarker}
        >
          {children && showInfoWindow ? (
            <InfoWindow
              position={initialCenter}
              onCloseClick={() => setShowInfoWindow(false)}
            >
              <div>{children}</div>
            </InfoWindow>
          ) : null}
        </Marker>
      </ReactGoogleMap>
    </div>
  );
};

GoogleMap.propTypes = {
  mapStyle: PropTypes.oneOf([
    'Default',
    'Gray',
    'Midnight',
    'Hopper',
    'Beard',
    'AssassianCreed',
    'SubtleGray',
    'Tripitty',
    'Cobalt'
  ]),
  darkStyle: PropTypes.oneOf([
    'Default',
    'Gray',
    'Midnight',
    'Hopper',
    'Beard',
    'AssassianCreed',
    'SubtleGray',
    'Tripitty',
    'Cobalt'
  ]),
  className: PropTypes.string,
  children: PropTypes.node,
  initialCenter: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number
  })
};

export default GoogleMap;
