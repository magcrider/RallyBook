import React from 'react';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import Preferences from './Preferences';
import {StyleSheet} from 'react-native';
import {Drawer} from 'react-native-paper';

type DrawerItemsProps = {
  navigation: any;
  openPDFHandler: Function;
  focusMode: boolean;
  toggleFocusMode: Function;
  autoScroll: boolean;
  toggleAutoScroll: Function;
  showButtons: boolean;
  toggleShowButtons: Function;
  lockTouch: boolean;
  toggleLockTouch: Function;
  onZoomHandler: Function;
};

const DrawerItems = ({
  navigation,
  openPDFHandler,
  focusMode,
  toggleFocusMode,
  autoScroll,
  toggleAutoScroll,
  showButtons,
  toggleShowButtons,
  lockTouch,
  toggleLockTouch,
  onZoomHandler,
}: DrawerItemsProps) => {
  return (
    <DrawerContentScrollView style={[styles.drawerContent]}>
      <Drawer.Section title="Options">
        <Drawer.Item
          label="Select PDF ..."
          icon="file-plus"
          onPress={() => {
            navigation.closeDrawer();
            openPDFHandler();
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
      <Preferences
        navigation={navigation}
        focusMode={focusMode}
        toggleFocusMode={toggleFocusMode}
        autoScroll={autoScroll}
        toggleAutoScroll={toggleAutoScroll}
        showButtons={showButtons}
        toggleShowButtons={toggleShowButtons}
        lockTouch={lockTouch}
        toggleLockTouch={toggleLockTouch}
        onZoomHandler={onZoomHandler}
      />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
});

export default DrawerItems;
