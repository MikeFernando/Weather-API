import styled from "styled-components";

import sun from '../../assets/sun.jpg';
import rain from '../../assets/rain.jpg';

interface IBannerProps {
  temperature: number;
}

export const Container = styled.main<IBannerProps>`
  height: 100vh;
  margin: 0 auto;
  overflow: hidden;

  background-image: ${props => `url(${props.temperature < 16 ? rain : sun})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

`;

export const Content = styled.div`
  max-width: 700px;
  margin: 0 auto;
  width: 100%;
  height: 100%;

  min-height: 100vh;
  /* background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)); */
  padding: 25px;
  
`;

export const SearchBox = styled.div`
  width: 100%;
  margin: 0 0 75px;
  padding: 0 50px;

  .search-bar {
    display: block;
    width: 100%;
    padding: 15px;

    appearance: none;
    background: none;
    border: none;
    outline: none;

    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 0px 0px 16px 16px;

    box-shadow: 0px 5px rgba(0, 0, 0, 0.2);
    
    color: var(--text-title);
    font-size: 20px;

    transition: 0.4s ease;

    &:focus {
      background-color: rgba(255, 255, 255, 0.75);
    }
  }
`;

export const LocationBox = styled.div`
  .date {
    color: #FFF;
    font-size: 20px;
    font-weight: 300;
    font-style: italic;
    text-align: center;
    text-shadow: 2px 2px rgba(50, 50, 70, 0.5);
  }
`;

export const Location = styled.div`
  color: #FFF;
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  text-shadow: 3px 3px rgba(50, 50, 70, 0.5);
`;

export const WeatherBox = styled.div`
  text-align: center;

  .weather {
    color: #FFF;
    font-size: 48px;
    font-weight: 700;
    text-shadow: 3px 3px rgba(50, 50, 70, 0.5);
  }
`;

export const Temp = styled.div`
  position: relative;
  display: inline-block;
  margin: 30px auto;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 16px;

  padding: 15px 25px;

  color: #FFF;
  font-size: 102px;
  font-weight: 900;

  text-shadow: 3px 6px rgba(50, 50, 70, 0.5);
  text-align: center;
  box-shadow: 3px 6px rgba(0, 0, 0, 0.2);
`;