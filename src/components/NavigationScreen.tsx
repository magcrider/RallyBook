import React, {useState, createContext, useEffect} from 'react';
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
import {Button} from 'react-native-paper';
import getDistance from 'geolib/es/getDistance';

export type GeoLocationContextType = {
  geolocation: Geolocation.GeoPosition | null;
  // setSpeed: (c: number | null) => void;
  setGeoLocation: any;
};
export const GeoLocationContext = createContext<GeoLocationContextType>({
  geolocation: null,
  setGeoLocation: () => {},
});

let restartOdo = true;
let initialODORef = {
  latitude: 0,
  longitude: 0,
};
let distance = 0;
const requestODORestart = () => {
  restartOdo = true;
};

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

  if (geolocation) {
    distance =
      getDistance(
        initialODORef,
        {
          latitude: geolocation?.coords.latitude!,
          longitude: geolocation?.coords.longitude!,
        },
        10,
      ) / 1000;
  }

  if (geolocation) {
    console.log(
      'DISTANCE:',
      initialODORef,
      getDistance(
        initialODORef,
        {
          latitude: geolocation?.coords.latitude!,
          longitude: geolocation?.coords.longitude!,
        },
        10,
      ) / 1000,
    );
  }

  useEffect(() => {
    restartOdo = false;
    if (geolocation) {
      initialODORef = {
        latitude: geolocation?.coords.latitude,
        longitude: geolocation?.coords.longitude,
      };
    }
    console.log('ODO value on reset:', initialODORef);
  }, [restartOdo]);

  return (
    <GeoLocationContext.Provider value={{geolocation, setGeoLocation}}>
      {/* <GeoContext.Provider value={{speed, setSpeed}}> */}
      <SafeAreaView style={styles.safeWrapper}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

        <View style={styles.navWrapper}>
          <View style={styles.toolsWrapper}>
            <Measurements
              locationData={geolocation?.coords.speed}
              odovalue={distance}
              heading={geolocation?.coords.heading}
            />
            <QuickAccess
              lockTouchHandler={testfn}
              autoScrollHandler={testfn}
              toggleMenuHandler={navigation.toggleDrawer}
            />
          </View>
          <PDFBrowser pdf_uri={pdf_uri} openFileHandler={myhandler} />
          <Button onPress={requestODORestart}>restart</Button>
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
