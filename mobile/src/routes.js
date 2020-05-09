import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Incidents from './pages/Incidents';
import Detail from './pages/Detail';
import Logon from './pages/Logon';
import Projects from './pages/Projects';
import Tasks from './pages/Tasks'
import MyProjects from './pages/MyProjects';


export default function Routes() {
  return (
    <NavigationContainer> 
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen name="Logon" component={Logon} />
      <AppStack.Screen name="MyProjects" component={MyProjects} />
      <AppStack.Screen name="Projects" component={Projects} />
      <AppStack.Screen name="Tasks" component={Tasks} />
      <AppStack.Screen name="Incidents" component={Incidents} />
      <AppStack.Screen name="Detail" component={Detail} />


      </AppStack.Navigator>
    </NavigationContainer>
  );
}