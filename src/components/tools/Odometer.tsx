import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
const Odometer = ({odovalue}: any) => {
  return (
    <View style={styles.odometerWrapper}>
      <View style={styles.label}>
        <Text variant="labelSmall">{'ODO (Km)'}</Text>
      </View>
      <View style={styles.data}>
        <Text variant="displayLarge">{odovalue}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  odometerWrapper: {
    flex: 1,
  },
  label: {
    height: 20,
    backgroundColor: 'pink',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  data: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
});
export default Odometer;
