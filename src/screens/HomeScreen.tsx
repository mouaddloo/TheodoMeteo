import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { ActivityIndicator, FlatList, RefreshControl, Text, View } from "react-native";
import { getWeather } from '../store/slices/weatherSlice';
import WeatherCard from "../components/WeatherCard";
import { useEffect } from "react";

const HomeScreen = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { data, loading, error } = useSelector((state: RootState) => state.weather);
  
    useEffect(() => {
      dispatch(getWeather());
    }, []);
  
    return (
      <View style={{ flex: 1, padding: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>Météo</Text>
        <Text style={{ fontSize: 16, marginBottom: 4 }}>Prévisions horaires</Text>
        <Text style={{ fontSize: 14, color: 'gray', marginBottom: 10 }}>
          {data.length} prévisions disponibles
        </Text>
        {loading && <ActivityIndicator />}
        {error && <Text style={{ color: 'red' }}>{error}</Text>}
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <WeatherCard item={item} />}
          refreshControl={
            <RefreshControl refreshing={loading} onRefresh={() => dispatch(getWeather())} />
          }
        />
      </View>
    );
  };
  
  export default HomeScreen;