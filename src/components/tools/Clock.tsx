import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

const Clock = () => {
  return (
    <View style={styles.clockWrapper}>
      <View style={styles.label}>
        <Text variant="labelSmall">{`Time`}</Text>
      </View>
      <View style={styles.data}>
        <Text variant="displayMedium">{`12:45:05`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  clockWrapper: {
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
export default Clock;
