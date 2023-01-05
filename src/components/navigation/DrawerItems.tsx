import React from 'react';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import Preferences from './Preferences';
import {StyleSheet} from 'react-native';
import {Drawer} from 'react-native-paper';

type DrawerItemsProps = {
  navigation: any;
  myhandler: Function;
};

const DrawerItems = ({navigation, myhandler}: DrawerItemsProps) => {
  return (
    <DrawerContentScrollView style={[styles.drawerContent]}>
      <Drawer.Section title="Options">
        <Drawer.Item
          label="Select PDF ..."
          icon="file-plus"
          onPress={() => {
            navigation.closeDrawer();
            myhandler();
          }}
        />
        <Drawer.Item
          label="Settings"
          icon="cog"
          onPress={() => {
            navigation.navigate('Settings');
          }}
        />
        {/* <Drawer.Item
          label="Geo"
          icon="cog"
          onPress={() => {
            navigation.navigate('Geo');
          }}
        /> */}
      </Drawer.Section>
      <Preferences />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
});

export default DrawerItems;
