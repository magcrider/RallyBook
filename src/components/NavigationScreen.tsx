import {useEffect} from 'react';
import {
  View,
  useColorScheme,
  SafeAreaView,
  StatusBar,
  Text,
  StyleSheet,
} from 'react-native';
import {Button} from 'react-native-paper';
import {IconButton, MD3Colors} from 'react-native-paper';
import QuickAccess from './QuickAccess';
import Measurements from './Measurements';

const NavigationScreen = ({navigation}: any) => {
  const isDarkMode = useColorScheme() === 'dark';
  useEffect(() => {
    navigation.setOptions({headerShown: false});
  }, []);

  const testfn = () => {
    console.log('THIs is good');
  };

  return (
    <SafeAreaView style={styles.safeWrapper}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {/* <Button onPress={() => navigation.toggleDrawer()} title="Menu" /> */}

      <View style={styles.navWrapper}>
        <View style={styles.toolsWrapper}>
          <Measurements />
          <QuickAccess
            lockTouchHandler={testfn}
            autoScrollHandler={testfn}
            toggleMenuHandler={navigation.toggleDrawer}
          />
        </View>
        <View style={styles.pdfWrapper}></View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeWrapper: {
    flex: 1,
  },
  navWrapper: {
    flex: 1,
  },
  toolsWrapper: {
    height: '25%',
    maxHeight: 170,
    flexDirection: 'row',
  },
  measurementWrapper: {
    flex: 1,
  },
  quickAccessWrapper: {
    backgroundColor: 'pink',
    paddingHorizontal: 5,
    justifyContent: 'space-around',
  },
  pdfWrapper: {
    flex: 1,
    backgroundColor: 'green',
  },
});

export default NavigationScreen;
