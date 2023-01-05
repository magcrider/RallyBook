import React from 'react';
import {View, StyleSheet} from 'react-native';
import {IconButton, MD3Colors} from 'react-native-paper';

type QuickAccessProps = {
  lockTouchHandler: () => void;
  autoScrollHandler: () => void;
  toggleMenuHandler: () => void;
  isTouchEnabled: boolean;
};

const QuickAccess = ({
  lockTouchHandler,
  autoScrollHandler,
  toggleMenuHandler,
  isTouchEnabled,
}: QuickAccessProps) => {
  return (
    <View style={styles.quickAccessWrapper}>
      <IconButton
        icon={isTouchEnabled ? 'cellphone' : 'cellphone-lock'}
        mode="contained-tonal"
        iconColor={MD3Colors.primary0}
        containerColor={isTouchEnabled ? 'lightcoral' : 'darkseagreen'}
        size={20}
        onPress={() => lockTouchHandler()}
      />
      <IconButton
        icon="arrow-vertical-lock"
        mode="contained-tonal"
        iconColor={MD3Colors.primary0}
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
