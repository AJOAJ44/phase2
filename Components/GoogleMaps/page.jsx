

import React from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {

  height: '300px'
};

const center = {
  lat: 10.11677515834533,
  lng:  76.48079019377539
};

function GoogleMaps() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey:"AIzaSyDzzxHbW0hw_9tYTXY2__p-O4cOs1QartI"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  function enableScrollwheel(map) {
    if(map) map.setOptions({ scrollwheel: true });
}

function disableScrollwheel(map) {
    if(map) map.setOptions({ scrollwheel: false });
}

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
        onLoad={onLoad}
        onUnmount={onUnmount}
        disableScrollwheel={false}
      >
        
        <Marker position={center}/>
      </GoogleMap>
  ) : <></>
}

export default React.memo(GoogleMaps)

