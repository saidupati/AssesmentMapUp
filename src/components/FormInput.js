import React, { useState } from 'react';
import { Select, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { loadRegionData } from '../actions';

const { Option } = Select;

const FormInput = () => {
  const [selectedRegion, setSelectedRegion] = useState('');
  const dispatch = useDispatch();

  const handleRegionChange = (value) => {
    setSelectedRegion(value);
  };

  const handleLoadButtonClick = () => {
    // loading region data for the selected region
    const regionData = getRegionData(selectedRegion); 

    if (regionData) {
      dispatch(loadRegionData(regionData));
    }
  };

  // Replace this function with your data fetching logic to get region data
  const getRegionData = (region) => {
    switch (region) {
      case 'us':
        return {
          name: 'United States',
          currency: 'USD',
          speedUnit: 'mph',
          distanceUnit: 'miles',
          volumeUnit: 'gallons',
          timezone: 'UTC-5 to UTC-10',
          lat: 37.0902,
          lng: -95.7129,
          zoom: 4,
        };
      case 'in':
        return {
          name: 'India',
          currency: 'INR',
          speedUnit: 'kmph',
          distanceUnit: 'kilometers',
          volumeUnit: 'liters',
          timezone: 'UTC+5:30',
          lat: 20.5937,
          lng: 78.9629,
          zoom: 5,
        };
      case 'uk':
        return {
          name: 'United Kingdom',
          currency: 'GBP',
          speedUnit: 'mph',
          distanceUnit: 'miles',
          volumeUnit: 'liters',
          timezone: 'UTC+0 to UTC+1',
          lat: 55.3781,
          lng: -3.4360,
          zoom: 5,
        };
      default:
        return null;
    }
  };

  return (
    <div>
      <Select defaultValue="Select a region" style={{ width: 200 }} onChange={handleRegionChange}>
        <Option value="us">United States</Option>
        <Option value="in">India</Option>
        <Option value="uk">United Kingdom</Option>
      </Select>
      <Button type="primary" onClick={handleLoadButtonClick}>Load</Button>
    </div>
  );
};

export default FormInput;
