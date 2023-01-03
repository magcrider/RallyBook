import {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import CompassHeading from 'react-native-compass-heading';
const Compass = () => {
  const [cap, setCap] = useState(0);
  useEffect(() => {
    const degree_update_rate = 3;

    CompassHeading.start(degree_update_rate, ({heading, accuracy}) => {
      setCap(heading);
    });

    return () => {
      CompassHeading.stop();
    };
  }, []);

  return (
    <View style={styles.compassWrapper}>
      <View style={styles.label}>
        <Text variant="labelSmall">{`Cap Heading (°)`}</Text>
      </View>
      <View style={styles.data}>
        <Text variant="displayLarge">{cap}</Text>
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
