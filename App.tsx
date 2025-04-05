import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaView } from 'react-native';
import { store } from './src/store/store';
import HomeScreen from './src/screens/HomeScreen';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <HomeScreen />
      </SafeAreaView>
    </Provider>
  );
}