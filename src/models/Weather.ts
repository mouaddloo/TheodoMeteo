export interface WeatherItem {
  time: string;
  temperature: number;
  apparentTemperature: number;
  windSpeed: number;
  precipitationIntensity?: number;
  weatherCode?: number;
  cloudCover?: number;
}