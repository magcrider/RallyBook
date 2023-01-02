import {useEffect} from 'react';
import {
  View,
  Button,
  useColorScheme,
  SafeAreaView,
  StatusBar,
  Text,
} from 'react-native';

const NavigationScreen = ({navigation}: any) => {
  const isDarkMode = useColorScheme() === 'dark';
  useEffect(() => {
    navigation.setOptions({headerShown: false});
  }, []);
  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Button onPress={() => navigation.toggleDrawer()} title="Menu" />
      <View>
        <Text>App wrapper</Text>
      </View>
    </SafeAreaView>
  );
};

export default NavigationScreen;
