import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { WeatherItem } from "../../models/Weather";
import { fetchWeather } from "../../api/weatherApi";
import { loadCache, saveCache } from "../../utils/storage";


interface WeatherState {
    data: WeatherItem[];
    loading: boolean;
    error: string | null;
  }
  
  const initialState: WeatherState = {
    data: [],
    loading: false,
    error: null,
  };
  
  export const getWeather = createAsyncThunk(
    'weather/fetchWeather',
    async (_, { rejectWithValue }) => {
      try {
        const data = await fetchWeather();
        await saveCache('weatherData', data);
        console.log(data);
        return data;
      } catch (error) {
        console.log(error);
        const cached = await loadCache('weatherData');
        if (cached) return cached;
        return rejectWithValue('Failed to load weather data');
      }
    }
  );
  
  const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getWeather.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(getWeather.fulfilled, (state, action) => {
          state.loading = false;
          state.data = action.payload;
        })
        .addCase(getWeather.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload as string;
        });
    },
  });
  
  export default weatherSlice.reducer;