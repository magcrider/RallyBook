import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
const Compass = ({heading}: any) => {
  return (
    <View style={styles.compassWrapper}>
      <View style={styles.label}>
        <Text variant="labelSmall">{'Cap Heading (°)'}</Text>
      </View>
      <View style={styles.data}>
        <Text variant="displayLarge">{Math.round(heading)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  compassWrapper: {
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
export default Compass;
