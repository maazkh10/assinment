import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import background from './imgs/background.png';

function App() {
  return (
    <div>
      <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${background})` }}>
      <div className="absolute inset-0 flex flex-col ">
        <Navbar />
        <Banner />
      </div>
      <div>
      </div>
    </div>

    </div>
  );
}

export default App;
