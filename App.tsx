import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './src/routes/RootStack';
import 'react-native-gesture-handler';

const App = () => {

  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  )
}

export default App