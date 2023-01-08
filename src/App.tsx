/**
 * MAGC Rally Book
 * https://github.com/magcrider/RallyBook
 *
 * Created by Magicbit SAS
 *
 */
import 'react-native-gesture-handler';
import React, {useEffect, useState, createContext} from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import DrawerItems from './components/navigation/DrawerItems';
import SettingsScreen from './components/SettingsScreen';
import NavigationScreen from './components/NavigationScreen';
import {useKeepAwake} from '@sayem314/react-native-keep-awake';

import DocumentPicker, {
  DirectoryPickerResponse,
  DocumentPickerResponse,
  isInProgress,
  types,
} from 'react-native-document-picker';
import {Provider} from 'react-native-paper';

const Drawer = createDrawerNavigator();
export type GeoDebugContextType = {
  isGeoDebug: boolean;
  setIsGeoDebug: any;
};

export const GeoDebugContext = createContext<GeoDebugContextType>({
  isGeoDebug: false,
  setIsGeoDebug: () => {},
});

const App = () => {
  useKeepAwake();
  const [result, setResult] = useState<
    Array<DocumentPickerResponse> | DirectoryPickerResponse | undefined | null
  >();
  const [selectedPDFuri, setSelectedPDFuri] = useState<string | null>('');

  useEffect(() => {
    console.log(JSON.stringify(result, null, 2));
  }, [result]);

  const handleError = (err: unknown) => {
    if (DocumentPicker.isCancel(err)) {
      console.warn('cancelled');
      // User cancelled the picker, exit any dialogs or menus and move on
    } else if (isInProgress(err)) {
      console.warn(
        'multiple pickers were opened, only the last will be considered',
      );
    } else {
      throw err;
    }
  };

  const openSingleFile = async () => {
    try {
      const pickerResult = await DocumentPicker.pickSingle({
        presentationStyle: 'fullScreen',
        copyTo: 'cachesDirectory',
        type: types.pdf,
      });
      setResult([pickerResult]);
      setSelectedPDFuri(pickerResult.fileCopyUri);
    } catch (e) {
      handleError(e);
    }
  };

  const [isGeoDebug, setIsGeoDebug] = useState(false);
  const [isFocusModeEnabled, setIsFocusModeEnabled] = React.useState(false);
  const [isAutoScrollEnabled, setAutoScrollEnabled] = React.useState(false);
  const [showButtons, setShowButtons] = React.useState(false);
  const [lockTouch, setLockTouch] = React.useState(false);

  const onFocusChange = () => {
    setIsFocusModeEnabled(!isFocusModeEnabled);
  };
  const onAutoscrollChange = () => {
    setAutoScrollEnabled(!isAutoScrollEnabled);
  };
  const onToggleShowButtonsHandler = () => {
    setShowButtons(!showButtons);
  };
  const onToggleLocktouch = () => {
    setLockTouch(!lockTouch);
  };

  const DrawerContent = (props: any) => {
    return (
      <DrawerItems
        {...props}
        openPDFHandler={openSingleFile}
        focusMode={isFocusModeEnabled}
        toggleFocusMode={onFocusChange}
        autoScroll={isAutoScrollEnabled}
        toggleAutoScroll={onAutoscrollChange}
        showButtons={showButtons}
        toggleShowButtons={onToggleShowButtonsHandler}
        lockTouch={lockTouch}
        toggleLockTouch={onToggleLocktouch}
      />
    );
  };
  return (
    <Provider>
      <GeoDebugContext.Provider value={{isGeoDebug, setIsGeoDebug}}>
        <NavigationContainer>
          <Drawer.Navigator
            initialRouteName="Navigation"
            drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen
              name="Navigation"
              options={{
                headerShown: false,
              }}>
              {props => (
                <NavigationScreen
                  {...props}
                  pdf_uri={selectedPDFuri}
                  openPDFHandler={openSingleFile}
                  isGeoDebug={isGeoDebug}
                  isFocusMode={isFocusModeEnabled}
                  isAutoScroll={isAutoScrollEnabled}
                  autoScrollHandler={onAutoscrollChange}
                  showButtons={showButtons}
                  lockTouch={lockTouch}
                  toggleLockTouch={onToggleLocktouch}
                />
              )}
            </Drawer.Screen>
            <Drawer.Screen
              name="Settings"
              component={SettingsScreen}
              options={{
                headerShown: false,
              }}
            />
            {/* <Drawer.Screen
          name="Geo"
          component={GeoHandler}
          options={{
            headerShown: false,
          }}
        /> */}
          </Drawer.Navigator>
        </NavigationContainer>
      </GeoDebugContext.Provider>
    </Provider>
  );
};

export default App;
