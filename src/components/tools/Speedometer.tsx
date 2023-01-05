import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
type SpeedometerProps = {
  speed: number | null | undefined;
};
const Speedometer = ({speed}: SpeedometerProps) => {
  return (
    <View style={styles.speedometerWrapper}>
      <View style={styles.label}>
        <Text variant="labelSmall">{`Speed (Km/h)`}</Text>
      </View>
      <View style={styles.data}>
        <Text variant="displayMedium">{Math.floor(speed)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  speedometerWrapper: {
    flex: 1,
  },
  label: {
    height: 20,
    backgroundColor: 'pink',
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  data: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
});
export default Speedometer;
