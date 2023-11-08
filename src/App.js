import React, { useEffect } from 'react';
import "./App.css";
import Maps from "./components/Map.jsx";
import "leaflet/dist/leaflet.css";
import Information from "./components/Information.jsx";
import Dates from "./components/Dates.jsx";
import WeddingCountdown from "./components/WeddingCountdown.jsx";

const App = () => {

  useEffect(() => {
    const handleContextmenu = e => {
      e.preventDefault()
    }
    document.addEventListener('contextmenu', handleContextmenu)
    return function cleanup() {
      document.removeEventListener('contextmenu', handleContextmenu)
    }
  }, [])


  return (
    <div className="app-container">
      <div className="column left-column">
        <Maps />
      </div>
      <div className="column center-column">
        <Information />
        <WeddingCountdown />
      </div>
      <div className="column right-column">
        <Dates />
      </div>
    </div>
  );
};

export default App;
