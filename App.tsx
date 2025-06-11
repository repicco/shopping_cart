import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Routes} from './src/routes';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import store from './src/store';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  useEffect(() => {
    return () => {
      AsyncStorage.removeItem('@products');
    };
  }, []);

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <StatusBar backgroundColor="#f0f4ff" barStyle="dark-content" />
          <Routes />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}
