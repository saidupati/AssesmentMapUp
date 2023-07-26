import React from 'react';
// import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Map from './components/Map';
import { Layout } from 'antd';
import FormInput from './components/FormInput';
import RegionInfo from './components/RegionInfo';
import './App.css';
import HeaderSection from './components/Header';

const App = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar />
    <div className="app">
      <HeaderSection />
      {/* <div className="main">
        <Sidebar /> */}
        <div className="content">
          <Map />
          <FormInput />
          <RegionInfo />
        </div>
      </div>
      <Footer />
    {/* </div> */}
    </Layout>
  );
};

export default App;
