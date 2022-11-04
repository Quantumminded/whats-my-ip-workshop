import './App.css';
import { useState, useEffect } from 'react';
import { getInfo } from './fetches/fetches';
import { Map, Marker } from "pigeon-maps";
import { DateTime } from 'luxon';



function App() {

  const [ipInfo, setIpInfo] = useState({});

  useEffect(() =>{

    (async () => {
      setIpInfo(await getInfo())
  })();
    

  return () => clearInterval(setInterval)
}, [])

 
  
  return (
    <div className="App">
      {/* <Map height={300} defaultCenter={[ipInfo.lat,ipInfo.lng]} defaultZoom={11}>
        <Marker width={50} anchor={[ipInfo.lat,ipInfo.lng]} />
      </Map> */}
      Hello world
      <h2><strong>Your Ip address is:</strong> {ipInfo.ip}</h2>
      <h2><strong>Your currently located in:</strong> {ipInfo.city}, {ipInfo.region}, {ipInfo.country}</h2>
      <h2><strong>Your postal code is:</strong> {ipInfo.postalCode}</h2>
      <h2><strong>Your current timezone is:</strong> {ipInfo.timezone}</h2>
      <Map height={700} defaultCenter={[ipInfo.lat,ipInfo.lng]} defaultZoom={11}>
        <Marker width={50} anchor={[ipInfo.lat,ipInfo.lng]} />
      </Map>

      {/* <p>Today is the {dateTime.c.day < 10 ? `0${dateTime.c.day}` : dateTime.c.day}/{dateTime.c.month < 10 ? `0${dateTime.c.month}` : dateTime.c.month}/{dateTime.c.year}</p>
      <p>Your local time is {dateTime.c.hour < 10 ? `0${dateTime.c.hour}` : dateTime.c.hour}:{dateTime.c.minute < 10 ? `0${dateTime.c.minute}` : dateTime.c.minute}</p> */}
    </div>
  );
}

export default App;
