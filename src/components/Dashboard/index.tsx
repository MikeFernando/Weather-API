import { useState } from 'react';

import { Container, Content, SearchBox, LocationBox, WeatherBox, Temp, Location } from "./styles";
import {useAuth} from '../../hooks/useAuth'
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';

interface Weather {
  name: string;
  sys: {
    country: string;
  }
  main: {
    temp: number;
  }
  weather: [{
    main: [];
  }]
}

const API_KEY = 'AIzaSyB_03_MqGia6dGTY_TUCT2-_DRMbhkvJqs'

const api = {
  key: "bd85f01c833201bdff9423fe56a92225",
  base: "https://api.openweathermap.org/data/2.5/"
}

export function Dashboard() {
  const { user } = useAuth()
  const history = useHistory();
  
  if (!user) {
    history.push("/");
  }

  const [query, setQuery] = useState("Curitiba");
  const [weather, setWeather] = useState<Weather>({} as Weather);

  navigator.geolocation.getCurrentPosition(function(position) {
    console.log((position.coords.latitude, position.coords.longitude));
  });

  useEffect(() => {
    async function getCity() {
      const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=${API_KEY}`)
        .then(res => res.json())
      return response
    }
    
    getCity()
  }, [])

  const search = (evt: { key: string; }) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }
 
  const dateBuilder = (d: any) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }


  return (
    <Container temperature={weather.main ? weather.main.temp : 16}>
        <Content>
          <SearchBox>
            <input
              className="search-bar"
              type="text"
              placeholder="Search city..."
              value={query}
              onChange={event => setQuery(event.target.value)}
              onKeyPress={search}
            />
          </SearchBox>
            {typeof weather.main !== "undefined" ? (
              <div>
                <LocationBox>
                  <Location>{weather.name}, {weather.sys.country}</Location>
                  <div className="date">{dateBuilder(new Date())}</div>
                </LocationBox>

                <WeatherBox>
                  <Temp>{Math.round(weather.main.temp)}ºc</Temp>
                  <div className="weather">{weather.weather[0].main}</div>
                </WeatherBox>
              </div>
            ) : ('')}
        </Content>
    </Container>   
  )
}