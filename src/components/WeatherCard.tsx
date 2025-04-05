import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { WeatherItem } from '../models/Weather';
import { fahrenheitToCelsius, formatDayTime, getBackgroundColor } from '../utils/utils';

const WeatherCard = ({ item }: { item: WeatherItem }) => {

  const backgroundColor = getBackgroundColor(item.temperature);

  return (
    <View style={[
      styles.card,{backgroundColor: backgroundColor}
    ]}>
      <Text style={styles.time}>{formatDayTime(item.time)}</Text>
      <Text style={styles.label}>Vitesse du vent: 
        <Text style={styles.value}> {item.windSpeed} km/h</Text>
      </Text>
      <Text style={styles.label}>Température: 
        <Text style={styles.value}> {fahrenheitToCelsius(item.temperature)}°C</Text>
      </Text>
      <Text style={styles.label}>Température apparente: 
        <Text style={styles.value}> {fahrenheitToCelsius(item.apparentTemperature)}°C</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  time: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  label: {
    fontWeight: 'bold',
    color: '#333',
  },
  value: {
    fontWeight: 'normal',
  },
});

export default WeatherCard;