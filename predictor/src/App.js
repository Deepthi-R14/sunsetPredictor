import React, {useState}  from "react";

function App() {

const url = `http://api.openweathermap.org/geo/1.0/direct?q=London&appid=5620f9a52de6aa33309ae43808a0eafc`
const lon = url.lon
const lat = url.lat 

  return (
    <div className="App">
     <div className="container">
      <div className="top">
        <div className="location">
          <p>London</p>
        </div>
        <div className="comment"></div>
      </div>
      <div className="bottom">
        <div className="temp">
          <h3>40 deg</h3>
        </div>
        <div className="setime">
          <p>6:00 pm</p>
        </div>
        <div className="humidity">
          <p>68%</p>
        </div>
        <div className="wind">
          <p>25 kmph</p>
        </div>

      </div>
     </div>
    </div>
  );
}

export default App;
