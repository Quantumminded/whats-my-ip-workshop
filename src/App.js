import './App.css';
import { useState, useEffect } from 'react';
import { getUserInfo } from './fetches/fetches';


function App() {

  const [ipInfo, setIpInfo] = useState({});

  useEffect(() =>{

    (async () => {
      setIpInfo(await getUserInfo())
  })();
}, [])
  
  return (
    <div className="App">
      Hello world
      <h2>Your Ip address is {ipInfo.ip}</h2>
    </div>
  );
}

export default App;
