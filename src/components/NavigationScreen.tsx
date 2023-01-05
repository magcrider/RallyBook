import React, {useState, createContext} from 'react';
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
import GeoHandler from './GeoHandler';
import Geolocation from 'react-native-geolocation-service';

export type GeoLocationContextType = {
  geolocation: Geolocation.GeoPosition | null;
  // setSpeed: (c: number | null) => void;
  setGeoLocation: any;
};
export const GeoLocationContext = createContext<GeoLocationContextType>({
  geolocation: null,
  setGeoLocation: () => {},
});

const NavigationScreen = ({
  navigation,
  pdf_uri,
  myhandler,
  isGeoDebug,
}: any) => {
  const isDarkMode = useColorScheme() === 'dark';
  const [geolocation, setGeoLocation] =
    useState<Geolocation.GeoPosition | null>(null);

  const testfn = () => {
    console.log('THIs is good');
  };

  console.log(geolocation);

  return (
    <GeoLocationContext.Provider value={{geolocation, setGeoLocation}}>
      {/* <GeoContext.Provider value={{speed, setSpeed}}> */}
      <SafeAreaView style={styles.safeWrapper}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

        <View style={styles.navWrapper}>
          <View style={styles.toolsWrapper}>
            <Measurements locationData={geolocation?.coords.speed} />
            <QuickAccess
              lockTouchHandler={testfn}
              autoScrollHandler={testfn}
              toggleMenuHandler={navigation.toggleDrawer}
            />
          </View>
          <PDFBrowser pdf_uri={pdf_uri} openFileHandler={myhandler} />
          <View
            style={[
              styles.geoWrapper,
              isGeoDebug ? styles.geoVisible : styles.geoHidden,
            ]}>
            <GeoHandler />
          </View>
        </View>
      </SafeAreaView>
    </GeoLocationContext.Provider>
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
  geoWrapper: {
    flex: 1,
    position: 'absolute',
    top: 172,
    right: 0,
    // opacity: 0.9,
  },
  geoVisible: {
    display: 'flex',
  },
  geoHidden: {
    display: 'none',
  },
});

export default NavigationScreen;
