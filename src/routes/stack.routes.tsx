import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home, Cart} from '../pages';

export type StackParamList = {
  Home: undefined;
  'Meu carrinho': undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

export const StackRoutes = () => {
  console.log('Renderizou StackRoutes');
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Meu carrinho" component={Cart} />
    </Stack.Navigator>
  );
};
