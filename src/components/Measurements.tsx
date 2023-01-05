import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Clock from './tools/Clock';
import Compass from './tools/Compass';
import Odometer from './tools/Odometer';
import Speedometer from './tools/Speedometer';
import GeolocationHandler from './GeolocationHandler';
import {GeoPosition} from 'react-native-geolocation-service';

import getDistance from 'geolib/es/getDistance';
import {TouchableRipple} from 'react-native-paper';

type MeasurementsProps = {
  isGeoDebug: boolean;
  showConfirmation: () => void;
  restartODO: boolean;
  setRestartODO: React.Dispatch<React.SetStateAction<boolean>>;
};

let delta = 0;
let totalDistance = 0;
let odoRef = {latitude: 4.852573, longitude: -74.0833168};

const saveLocation = (location: {latitude: number; longitude: number}) => {
  odoRef = {...location};
};

const Measurements = ({
  isGeoDebug,
  showConfirmation,
  restartODO,
  setRestartODO,
}: MeasurementsProps) => {
  const [geoLocation, setGeoLocation] = useState<GeoPosition | null>(null);
  if (geoLocation) {
    let currentLocation = {
      latitude: geoLocation?.coords.latitude!,
      longitude: geoLocation?.coords.longitude!,
    };

    delta = getDistance(
      odoRef,
      {
        latitude: geoLocation?.coords.latitude!,
        longitude: geoLocation?.coords.longitude!,
      },
      1,
    );

    totalDistance = totalDistance + delta;

    saveLocation(currentLocation);
  }
  useEffect(() => {
    setRestartODO(false);
    console.log('ODO value on reset:', totalDistance);
    totalDistance = 0;
  }, [restartODO]);
  return (
    <View style={styles.measurementWrapper}>
      <View style={[styles.top]}>
        <TouchableRipple
          style={[styles.info, styles.odoWrapper]}
          onPress={() => showConfirmation()}
          rippleColor="rgba(0, 0, 0, .32)">
          <Odometer odovalue={(totalDistance / 1000).toFixed(2)} />
        </TouchableRipple>
        <View style={[styles.info, styles.capHeadingWrapper]}>
          <Compass heading={geoLocation?.coords.heading} />
        </View>
      </View>
      <View style={[styles.bottom]}>
        <View style={[styles.info, styles.speedWrapper]}>
          <Speedometer speed={geoLocation?.coords.speed} />
        </View>
        <View style={[styles.info, styles.timeWrapper]}>
          <Clock />
        </View>
      </View>
      <View
        style={[
          styles.geoWrapper,
          isGeoDebug ? styles.geoVisible : styles.geoHidden,
        ]}>
        <GeolocationHandler
          location={geoLocation}
          setLocation={setGeoLocation}
        />
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
export default Measurements;
