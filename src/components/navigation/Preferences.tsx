import React, {useState, useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Drawer, TouchableRipple, Switch} from 'react-native-paper';

import {GeoDebugContext} from '../../App';

const Preferences = ({
  navigation,
  focusMode,
  toggleFocusMode,
  autoScroll,
  toggleAutoScroll,
  showButtons,
  toggleShowButtons,
  lockTouch,
  toggleLockTouch,
  onZoomHandler,
}: any) => {
  const [isDark0, setIsDark0] = useState(false);

  const {isGeoDebug, setIsGeoDebug} = useContext(GeoDebugContext);
  const toggleGeoDebug = () => {
    setIsGeoDebug(!isGeoDebug);
  };

  return (
    <Drawer.Section title="Preferences">
      <Drawer.Item
        label="Set PDF Zoom"
        icon="magnify"
        onPress={() => {
          navigation.closeDrawer();
          onZoomHandler();
          console.log('Setting zoom');
        }}
      />
      <TouchableRipple onPress={toggleLockTouch}>
        <View style={[styles.preference, styles.v3Preference]}>
          <Text>Lock PDF touch</Text>
          <View pointerEvents="none">
            <Switch value={lockTouch} />
          </View>
        </View>
      </TouchableRipple>
      <TouchableRipple onPress={toggleAutoScroll}>
        <View style={[styles.preference, styles.v3Preference]}>
          <Text>Auto scroll</Text>
          <View pointerEvents="none">
            <Switch value={autoScroll} />
          </View>
        </View>
      </TouchableRipple>
      <TouchableRipple onPress={toggleFocusMode}>
        <View style={[styles.preference, styles.v3Preference]}>
          <Text>Focus mode</Text>
          <View pointerEvents="none">
            <Switch value={focusMode} />
          </View>
        </View>
      </TouchableRipple>
      <TouchableRipple onPress={toggleShowButtons}>
        <View style={[styles.preference, styles.v3Preference]}>
          <Text>Show buttons</Text>
          <View pointerEvents="none">
            <Switch value={showButtons} />
          </View>
        </View>
      </TouchableRipple>
      <TouchableRipple onPress={toggleGeoDebug}>
        <View style={[styles.preference, styles.v3Preference]}>
          <Text>Debug Geo</Text>
          <View pointerEvents="none">
            <Switch value={isGeoDebug} />
          </View>
        </View>
      </TouchableRipple>
    </Drawer.Section>
  );
};

const styles = StyleSheet.create({
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  v3Preference: {
    height: 56,
    paddingHorizontal: 28,
  },
});

export default Preferences;
