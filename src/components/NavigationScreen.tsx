import React from 'react'; // ,{useState, createContext, useEffect}
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
import ConfirmationDialog from './utils/ConfirmationDialog';

const NavigationScreen = ({
  navigation,
  pdf_uri,
  myhandler,
  isGeoDebug,
}: any) => {
  const isDarkMode = useColorScheme() === 'dark';
  const [visible, setVisible] = React.useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);
  const [restartOdo, setRestartOdo] = React.useState(false);

  const resetOdomoter = () => {
    setRestartOdo(true);
    setVisible(false);
  };

  const testfn = () => {
    console.log('THIs is good');
  };

  return (
    <SafeAreaView style={styles.safeWrapper}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.navWrapper}>
        <View style={styles.toolsWrapper}>
          <Measurements
            isGeoDebug={isGeoDebug}
            showConfirmation={() => showDialog()}
            restartODO={restartOdo}
            setRestartODO={setRestartOdo}
          />
          <QuickAccess
            lockTouchHandler={testfn}
            autoScrollHandler={testfn}
            toggleMenuHandler={navigation.toggleDrawer}
          />
        </View>
        <PDFBrowser pdf_uri={pdf_uri} openFileHandler={myhandler} />
      </View>
      <ConfirmationDialog
        isVisible={visible}
        hideDialogHandler={hideDialog}
        confirmHandler={resetOdomoter}
      />
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
