import React, {useState, useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Drawer, TouchableRipple, Switch} from 'react-native-paper';

import {GeoDebugContext} from '../../App';

const Preferences = ({isDarkTheme}: any) => {
  const [active, setActive] = useState('');
  const [isDark0, setIsDark0] = useState(false);
  const [isDark1, setIsDark1] = useState(false);
  const [isDark2, setIsDark2] = useState(false);
  const [isDark3, setIsDark3] = useState(false);
  // const [isGeoDebug, setIsGeoDebug] = useState(false);

  const {isGeoDebug, setIsGeoDebug} = useContext(GeoDebugContext);

  const toggleTheme3 = () => {
    setIsDark3(!isDark3);
  };
  const toggleTheme2 = () => {
    setIsDark2(!isDark2);
  };
  const toggleTheme1 = () => {
    setIsDark1(!isDark1);
  };
  const toggleTheme = () => {
    setIsDark0(!isDark0);
  };
  const toggleGeoDebug = () => {
    setIsGeoDebug(!isGeoDebug);
  };

  return (
    <Drawer.Section title="Preferences">
      <TouchableRipple onPress={toggleTheme3}>
        <View style={[styles.preference, styles.v3Preference]}>
          <Text>Auto scroll</Text>
          <View pointerEvents="none">
            <Switch value={isDark3} />
          </View>
        </View>
      </TouchableRipple>
      <TouchableRipple onPress={toggleTheme2}>
        <View style={[styles.preference, styles.v3Preference]}>
          <Text>Focus mode</Text>
          <View pointerEvents="none">
            <Switch value={isDark2} />
          </View>
        </View>
      </TouchableRipple>
      <TouchableRipple onPress={toggleTheme1}>
        <View style={[styles.preference, styles.v3Preference]}>
          <Text>Show arrows</Text>
          <View pointerEvents="none">
            <Switch value={isDark1} />
          </View>
        </View>
      </TouchableRipple>
      <TouchableRipple onPress={toggleTheme}>
        <View style={[styles.preference, styles.v3Preference]}>
          <Text>Dark mode</Text>
          <View pointerEvents="none">
            <Switch value={isDark0} />
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
