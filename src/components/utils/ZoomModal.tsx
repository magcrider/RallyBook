import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {Modal, Portal, Text, Button, Provider} from 'react-native-paper';
const ZoomModal = ({isVisible, hideModalHandler, currentZoom}) => {
  return (
    <View>
      <Portal>
        <Modal
          visible={isVisible}
          onDismiss={hideModalHandler}
          contentContainerStyle={styles.modalWrapper}>
          <Text>Example Modal. Click outside this area to dismiss.</Text>
        </Modal>
      </Portal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalWrapper: {
    backgroundColor: 'white',
    padding: 20,
  },
});

export default ZoomModal;
