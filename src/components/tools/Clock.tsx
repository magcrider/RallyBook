import {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import dayjs from 'dayjs';

const Clock = () => {
  const [time, setTime] = useState(dayjs());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(dayjs());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <View style={styles.clockWrapper}>
      <View style={styles.label}>
        <Text variant="labelSmall">{`Time`}</Text>
      </View>
      <View style={styles.data}>
        <Text variant="displayMedium">{time.format('HH:mm:ss')}</Text>
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
