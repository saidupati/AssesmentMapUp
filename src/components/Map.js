import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { useSelector } from 'react-redux';

const Map = () => {
  const regionData = useSelector((state) => state.map.regionData);

  const MapViewport = () => {
    const map = useMap();
    useEffect(() => {
      if (regionData) {
        // map center and zoom based on the selected region data
        map.flyTo([regionData.lat, regionData.lng], regionData.zoom);
      }
    }, [map, regionData]);

    return null;
  };

  const handleMarkerClick = () => {
    
  };

  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        
      />
      <MapViewport />
     
      {regionData && (
        <Marker position={[regionData.lat, regionData.lng]} onClick={handleMarkerClick}>
          <Popup>{regionData.name}</Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default Map;
