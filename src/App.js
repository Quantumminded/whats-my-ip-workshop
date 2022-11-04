import './App.css';
import { useState, useEffect } from 'react';
import { getInfo } from './fetches/fetches';


function App() {

  const [ipInfo, setIpInfo] = useState({});

  useEffect(() =>{

    (async () => {
      setIpInfo(await getInfo())
  })();
}, [])
  
  return (
    <div className="App">
      Hello world
      <h2><strong>Your Ip address is:</strong> {ipInfo.ip}</h2>
      <h2><strong>Your currently location in:</strong> {ipInfo.city}, {ipInfo.region}, {ipInfo.country}</h2>
      <h2><strong>Your postal code is:</strong> {ipInfo.postalCode}</h2>
      <h2><strong>Your current timezone is:</strong> {ipInfo.timezone}</h2>
    </div>
  );
}

export default App;
