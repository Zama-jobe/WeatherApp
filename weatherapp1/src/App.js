import React,{useState} from 'react'
import axios from 'axios'

function App() {
  const[data,setData]= useState({})
  const[location,setLocation] = useState('')

const url= `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=5cb706d8a590f9b694c3a42119cf153e`

const searchLocation= (event) =>{
  if(event.key === 'Enter'){
    axios.get(url).then((response)=>{
      setData(response.data)
      console.log(response.data)
    })
    setLocation('')
  }
  
}

  return (
    <div className="app">
      <div className="search">
        <input
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder='Enter Location'
        type="text" />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
           {data.main ? <h1>{data.main.temp}°C</h1> : null}
          {/* <h1>{data.main.temp}°C</h1> */}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
            {/* <p>Partly Cloudy</p> */}
          </div>
        </div>


        {data.name != undefined &&

<div className="bottom">
<div className="feels">
  {data.main ? <p className="bold">{data.main.feels_like}°C</p> : null}
  {/* <p className='bold'>21°C</p> */}
  <p>Feels Like</p>
</div>
<div className="humidity">
  {data.main ? <p className="bold">{data.main.humidity}%</p> :null}
  {/* <p className='bold'>20%</p> */}
  <p>Humidity</p>
</div>
<div className="wind">
  {data.wind ? <p className="bold">{data.wind.speed} KPH</p> : null}
 {/* <p className='bold'>12 MPH</p> */}
  <p>Wind Speed</p>
</div>
</div>

        
        }
       

      </div>
     
    </div>
  );
}

export default App;
