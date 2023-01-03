import React from 'react';
import {
  View,
  useColorScheme,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import QuickAccess from './QuickAccess';
import Measurements from './Measurements';
import PDFBrowser from './PDFBrowser';

const NavigationScreen = ({navigation, pdf_uri, myhandler}: any) => {
  const isDarkMode = useColorScheme() === 'dark';
  console.log('PDF_URI', pdf_uri);

  const testfn = () => {
    console.log('THIs is good');
  };

  return (
    <SafeAreaView style={styles.safeWrapper}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <View style={styles.navWrapper}>
        <View style={styles.toolsWrapper}>
          <Measurements />
          <QuickAccess
            lockTouchHandler={testfn}
            autoScrollHandler={testfn}
            toggleMenuHandler={navigation.toggleDrawer}
          />
        </View>
        <PDFBrowser pdf_uri={pdf_uri} openFileHandler={myhandler} />
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
