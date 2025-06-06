import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Routes} from './src/routes';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import store from './src/store';

export default function App() {
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
