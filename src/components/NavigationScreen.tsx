import React, {useState} from 'react'; // ,{useState, createContext, useEffect}
import {View, useColorScheme, StatusBar, StyleSheet} from 'react-native';
import QuickAccess from './QuickAccess';
import Measurements, {addODO} from './Measurements';
import PDFBrowser from './PDFBrowser';
import ConfirmationDialog from './utils/ConfirmationDialog';

const NavigationScreen = ({
  navigation,
  pdf_uri,
  myhandler,
  isGeoDebug,
}: any) => {
  const [istouchEnabled, setIstouchEnabled] = React.useState(true);
  const toggleNavTouch = () => {
    setIstouchEnabled(!istouchEnabled);
  };
  const [visible, setVisible] = React.useState(false);
  const [totalDistance, setTotalDistance] = useState(0);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);
  const [restartOdo, setRestartOdo] = React.useState(false);

  const resetOdomoter = () => {
    setRestartOdo(true);
    setVisible(false);
  };

  const increaseODO = () => {
    setTotalDistance(totalDistance + 10);
  };
  const decreaseODO = () => {
    if (totalDistance > 10) {
      setTotalDistance(totalDistance - 10);
    }
  };

  const testfn = () => {
    console.log('THIs is good');
  };

  return (
    <View style={styles.safeWrapper}>
      <StatusBar hidden />
      <View style={styles.navWrapper}>
        <View style={styles.toolsWrapper}>
          <Measurements
            isGeoDebug={isGeoDebug}
            showConfirmation={() => showDialog()}
            restartODO={restartOdo}
            setRestartODO={setRestartOdo}
            totalDistanceODO={totalDistance}
            setTotalDistanceODO={setTotalDistance}
          />
          <QuickAccess
            lockTouchHandler={toggleNavTouch}
            isTouchEnabled={istouchEnabled}
            autoScrollHandler={testfn}
            toggleMenuHandler={navigation.toggleDrawer}
          />
        </View>
        <PDFBrowser
          pdf_uri={pdf_uri}
          openFileHandler={myhandler}
          istouchEnabled={istouchEnabled}
          isFocusModeEnabled={true}
          increaseODO={increaseODO}
          decreaseODO={decreaseODO}
        />
      </View>
      <ConfirmationDialog
        isVisible={visible}
        hideDialogHandler={hideDialog}
        confirmHandler={resetOdomoter}
      />
    </View>
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
