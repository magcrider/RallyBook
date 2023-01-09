import React, {useState} from 'react'; // ,{useState, createContext, useEffect}
import {View, useColorScheme, StatusBar, StyleSheet} from 'react-native';
import QuickAccess from './QuickAccess';
import Measurements, {addODO} from './Measurements';
import PDFBrowser from './PDFBrowser';
import ConfirmationDialog from './utils/ConfirmationDialog';

const NavigationScreen = ({
  navigation,
  pdf_uri,
  openPDFHandler,
  isGeoDebug,
  isFocusMode,
  isAutoScroll,
  autoScrollHandler,
  showButtons,
  lockTouch,
  toggleLockTouch,
}: any) => {
  // const [istouchEnabled, setIstouchEnabled] = React.useState(true);

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
            isAutoscrollEnabled={isAutoScroll}
            autoScrollHandler={autoScrollHandler}
            toggleMenuHandler={navigation.toggleDrawer}
            lockTouch={lockTouch}
            toggleLockTouch={toggleLockTouch}
          />
        </View>
        <PDFBrowser
          pdf_uri={pdf_uri}
          openFileHandler={openPDFHandler}
          lockTouch={lockTouch}
          isFocusModeEnabled={isFocusMode}
          increaseODO={increaseODO}
          decreaseODO={decreaseODO}
          showButtons={showButtons}
          pdfWidth={200}
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
    zIndex: 2,
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
