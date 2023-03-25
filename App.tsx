import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Provider} from 'react-redux';
import DetailsScreen from './src/DetailsScreen';
import HomeScreen from './src/HomeScreen';
import store from './store/store';

const prefix = 'restaurantapp://';

const Stack = createStackNavigator();

const linking = {
  prefixes: [prefix],
  config: {
    screens: {
      Home: '',
      Details: 'details/:itemId',
    },
  },
};

const StackNavigation = () => {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator initialRouteName={'Home'}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Restaurant Menu'}}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{title: 'Menu Details'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <StackNavigation />
    </Provider>
  );
};

export default App;
