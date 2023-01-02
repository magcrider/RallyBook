import {useState} from 'react';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import Options from './Options';
import Preferences from './Preferences';
import {StyleSheet} from 'react-native';

type Props = {
  toggleAutoScroll: () => void;
  toggleFocusMode: () => void;
  toggleNavArrows: () => void;
  toggleDarkMode: () => void;

  isDarkTheme: boolean;
};

const DrawerItems = ({
  toggleAutoScroll,
  toggleFocusMode,
  toggleNavArrows,
  toggleDarkMode,
  isDarkTheme,
}: Props) => {
  const [drawerItemIndex, setDrawerItemIndex] = useState<number>(0);

  const _setDrawerItem = (index: number) => setDrawerItemIndex(index);

  return (
    <DrawerContentScrollView style={[styles.drawerContent]}>
      <Options />
      <Preferences isDarkTheme={isDarkTheme} />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
});

export default DrawerItems;
