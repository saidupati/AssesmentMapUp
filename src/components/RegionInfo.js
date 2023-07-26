import React from 'react';
import { useSelector } from 'react-redux';

const RegionInfo = () => {
  const regionData = useSelector((state) => state.map.regionData);

  return (
    <div style={{ background: '#f0f2f5', padding: '16px', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
      {regionData && (
        <div>
          <h2 style={{ marginBottom: '16px' }}>{regionData.name}</h2>
          <p>Currency: {regionData.currency}</p>
          <p>Speed Unit: {regionData.speedUnit}</p>
          <p>Distance Unit: {regionData.distanceUnit}</p>
          <p>Volume Unit: {regionData.volumeUnit}</p>
          <p>Timezone: {regionData.timezone}</p>
        </div>
      )}
    </div>
  );
};

export default RegionInfo;
