/**
 * MAGC Rally Book
 * https://github.com/magcrider/RallyBook
 *
 * Created by Magicbit SAS
 *
 */
import 'react-native-gesture-handler';
import React, {useEffect, type PropsWithChildren} from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import DrawerItems from './components/navigation/DrawerItems';
import SettingsScreen from './components/SettingsScreen';
import NavigationScreen from './components/NavigationScreen';

const Drawer = createDrawerNavigator();

const DrawerContent = (props: any) => {
  return <DrawerItems {...props} />;
};

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Navigation"
        drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Navigation" component={NavigationScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
