import React, {useState} from 'react';
import {StyleSheet, View, useWindowDimensions} from 'react-native';
import {Modal, Portal, Button, Provider, Text} from 'react-native-paper';
import {Slider} from '@miblanchard/react-native-slider';

const ZoomModal = ({
  isVisible,
  hideModalHandler,
  currentZoom,
  setCurrentZoom,
}) => {
  const MAX_VALUE = 2;
  const MIN_VALUE = 1;

  const [zoomValue, setZoomValue] = useState<number | number[]>(1);
  const {width} = useWindowDimensions();

  //   const onChangeZoomValueHandler = value => {
  //     console.log('slider value:', value);
  //     setZoomValue(value);
  //   };

  React.useEffect(() => {
    setCurrentZoom(width * (zoomValue as number));
    console.log(
      'current zoom value:',
      zoomValue,
      width * (zoomValue as number),
      width,
    );
  }, [zoomValue]);

  return (
    <View>
      <Portal>
        <Modal
          style={styles.modalStyle}
          visible={isVisible}
          onDismiss={hideModalHandler}
          contentContainerStyle={styles.modalWrapper}>
          <Text variant="titleMedium" style={styles.textWrapper}>
            Set the zoom for your PDF file
          </Text>
          <View style={styles.container}>
            <Slider
              value={zoomValue}
              onValueChange={value => setZoomValue(value)}
              maximumValue={MAX_VALUE}
              minimumValue={MIN_VALUE}
            />
            <Text>Value: {zoomValue}</Text>
          </View>
        </Modal>
      </Portal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalStyle: {justifyContent: 'flex-start'},
  modalWrapper: {
    backgroundColor: 'white',
    padding: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textWrapper: {
    margin: 16,
  },
  container: {
    width: '100%',
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});

export default ZoomModal;
