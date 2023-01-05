import React from 'react';
import {useEffect} from 'react';
import {View, Button, SafeAreaView, StyleSheet} from 'react-native';

const SettingsScreen = ({navigation}: any) => {
  useEffect(() => {
    navigation.setOptions({headerShown: false});
  }, []);
  return (
    <View style={styles.settingsWrapper}>
      <View
        style={styles.settingsWrapper}
        // style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
      >
        <Button onPress={() => navigation.goBack()} title="Go back" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  settingsWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SettingsScreen;
