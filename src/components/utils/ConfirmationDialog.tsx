import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Dialog, Portal, Text} from 'react-native-paper';

const ConfirmationDialog = ({
  isVisible,
  hideDialogHandler,
  confirmHandler,
}: any) => {
  return (
    <View>
      <Portal>
        <Dialog visible={isVisible} onDismiss={hideDialogHandler}>
          <Dialog.Title>Reset Odometer</Dialog.Title>
          <Dialog.Content>
            <Text variant="bodyMedium">
              Are you sure you want to set the Odometer value to 0?
            </Text>
          </Dialog.Content>
          <Dialog.Actions style={styles.dialogWrapper}>
            <Button
              icon="close-thick"
              mode="outlined"
              onPress={hideDialogHandler}>
              No, go back
            </Button>
            <Button icon="check-bold" mode="contained" onPress={confirmHandler}>
              Yes
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

const styles = StyleSheet.create({
  dialogWrapper: {
    justifyContent: 'space-between',
  },
});

export default ConfirmationDialog;
