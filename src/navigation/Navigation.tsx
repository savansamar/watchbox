import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler'
import GlobalStack from './stack/globalStack';


function Navigation() {

  return (
      <NavigationContainer>
        <GlobalStack />
      </NavigationContainer>
   
  );
}

export default Navigation