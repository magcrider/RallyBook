import {View, StyleSheet} from 'react-native';
import Clock from './tools/Clock';
import Compass from './tools/Compass';
import Odometer from './tools/Odometer';
import Speedometer from './tools/Speedometer';

const Measurements = () => {
  return (
    <View style={styles.measurementWrapper}>
      <View style={[styles.top]}>
        <View style={[styles.info, styles.odoWrapper]}>
          <Odometer />
        </View>
        <View style={[styles.info, styles.capHeadingWrapper]}>
          <Compass />
        </View>
      </View>
      <View style={[styles.bottom]}>
        <View style={[styles.info, styles.speedWrapper]}>
          <Speedometer />
        </View>
        <View style={[styles.info, styles.timeWrapper]}>
          <Clock />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  measurementWrapper: {
    flex: 1,
  },

  top: {
    height: '60%',
    flexDirection: 'row',
  },
  bottom: {
    flex: 1,
    flexDirection: 'row',
  },

  info: {
    width: '50%',
    height: '100%',
  },
  odoWrapper: {
    width: '60%',
  },
  capHeadingWrapper: {
    width: '40%',
  },
  speedWrapper: {
    width: '40%',
  },
  timeWrapper: {
    width: '60%',
  },
});
export default Measurements;
