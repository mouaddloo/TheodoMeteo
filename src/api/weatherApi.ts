import axios from 'axios';
import { WeatherItem } from '../models/Weather';


export const fetchWeather = async (): Promise<WeatherItem[]> => {
  try {
      const response = await axios.get('http://localhost:3000/weather');
      
      const hourlyData = response.data.data.timelines
          .find((timeline: any) => timeline.timestep === "1h")
          ?.intervals.map((interval: any) => ({
              time: interval.startTime,
              temperature: interval.values.temperature,
              apparentTemperature: interval.values.temperatureApparent,
              windSpeed: interval.values.windSpeed,
              precipitationIntensity: interval.values.precipitationIntensity,
              weatherCode: interval.values.weatherCode,
              cloudCover: interval.values.cloudCover
          })) || [];
      
      return hourlyData;
  } catch (error) {
      console.error('Error fetching weather data:', error);
      throw error;
  }
};