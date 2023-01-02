import {useState} from 'react';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import Options from './Options';
import Preferences from './Preferences';
import {StyleSheet} from 'react-native';
import {Drawer} from 'react-native-paper';

type DrawerItemsProps = {
  //   toggleAutoScroll: () => void;
  //   toggleFocusMode: () => void;
  //   toggleNavArrows: () => void;
  //   toggleDarkMode: () => void;

  //   isDarkTheme: boolean;
  navigation: any;
};

const DrawerItems = ({navigation}: DrawerItemsProps) => {
  const [drawerItemIndex, setDrawerItemIndex] = useState<number>(0);

  const _setDrawerItem = (index: number) => setDrawerItemIndex(index);

  return (
    <DrawerContentScrollView style={[styles.drawerContent]}>
      <Drawer.Section title="Options">
        <Drawer.Item
          label="Select PDF ..."
          icon="file-pdf-box"
          onPress={() => navigation.navigate('Settings')}
        />
        <Drawer.Item
          label="Settings"
          icon="cog"
          onPress={() => {
            navigation.navigate('Settings');
          }}
        />
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
