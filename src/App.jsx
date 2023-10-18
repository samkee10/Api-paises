import React, { useState, useEffect } from 'react';
import MiApi from './components/MiApi'
import './style.css'
import Header from './components/header';
import Footer from './components/footer';


function App() {
  return (
    <>
    <Header />
    <div className="landing">
      <MiApi />
    </div>
    <Footer />
    </>
  );
}

export default App;