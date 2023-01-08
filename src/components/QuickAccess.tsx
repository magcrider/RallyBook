import React from 'react';
import {View, StyleSheet} from 'react-native';
import {IconButton, MD3Colors} from 'react-native-paper';

type QuickAccessProps = {
  lockTouch: boolean;
  toggleLockTouch: () => void;
  isAutoscrollEnabled: boolean;
  autoScrollHandler: () => void;
  toggleMenuHandler: () => void;
};

const QuickAccess = ({
  toggleLockTouch,
  autoScrollHandler,
  toggleMenuHandler,
  lockTouch,
  isAutoscrollEnabled,
}: QuickAccessProps) => {
  return (
    <View style={styles.quickAccessWrapper}>
      <IconButton
        icon={lockTouch ? 'cellphone' : 'cellphone-lock'}
        mode="contained-tonal"
        iconColor={MD3Colors.primary0}
        containerColor={lockTouch ? 'lightcoral' : 'darkseagreen'}
        size={20}
        onPress={() => toggleLockTouch()}
      />
      <IconButton
        icon={isAutoscrollEnabled ? 'arrow-vertical-lock' : 'arrow-up-down'}
        mode="contained-tonal"
        iconColor={MD3Colors.primary0}
        containerColor={isAutoscrollEnabled ? 'darkseagreen' : 'lightcoral'}
        size={20}
        onPress={() => autoScrollHandler()}
      />
      <IconButton
        icon="cog"
        mode="contained-tonal"
        iconColor={MD3Colors.primary0}
        size={20}
        onPress={() => toggleMenuHandler()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  quickAccessWrapper: {
    paddingHorizontal: 5,
    // width: 60,
    justifyContent: 'space-around',
  },
});

export default QuickAccess;
