/**
 * MAGC Rally Book
 * https://github.com/magcrider/RallyBook
 *
 * Created by Magicbit SAS
 *
 */
import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';

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

const Drawer = createDrawerNavigator();

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

  const DrawerContent = (props: any) => {
    return <DrawerItems {...props} myhandler={openSingleFile} />;
  };

  return (
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
              myhandler={openSingleFile}
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
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
