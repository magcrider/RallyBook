import {View, StyleSheet} from 'react-native';
import {IconButton, MD3Colors} from 'react-native-paper';

type QuickAccessProps = {
  lockTouchHandler: () => void;
  autoScrollHandler: () => void;
  toggleMenuHandler: () => void;
};

const QuickAccess = ({
  lockTouchHandler,
  autoScrollHandler,
  toggleMenuHandler,
}: QuickAccessProps) => {
  return (
    <View style={styles.quickAccessWrapper}>
      <IconButton
        icon="cellphone-lock"
        mode="contained-tonal"
        iconColor={MD3Colors.primary0}
        size={20}
        onPress={() => lockTouchHandler()}></IconButton>
      <IconButton
        icon="arrow-vertical-lock"
        mode="contained-tonal"
        iconColor={MD3Colors.primary0}
        size={20}
        onPress={() => autoScrollHandler()}></IconButton>
      <IconButton
        icon="cog"
        mode="contained-tonal"
        iconColor={MD3Colors.primary0}
        size={20}
        onPress={() => toggleMenuHandler()}></IconButton>
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
