import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, FAB} from 'react-native-paper';
import Pdf, {Source} from 'react-native-pdf';
import LinearGradient from 'react-native-linear-gradient';

type PDFBrowserProps = {
  pdf_uri?: string;
  openFileHandler?: Function;
  lockTouch?: boolean;
  isFocusModeEnabled?: boolean;
  increaseODO: Function;
  decreaseODO: Function;
  showButtons: boolean;
};

const PDFBrowser = ({
  pdf_uri,
  openFileHandler,
  lockTouch,
  isFocusModeEnabled,
  increaseODO,
  decreaseODO,
  showButtons,
}: PDFBrowserProps) => {
  const [source, setSource] = useState<Source>({
    uri: pdf_uri,
  });

  useEffect(() => {
    setSource({
      uri: pdf_uri,
      cache: true,
    });
  }, [pdf_uri]);

  return (
    <View style={styles.pdfWrapper}>
      {pdf_uri !== '' ? (
        <>
          <View
            style={styles.pdfWrapper}
            // pointerEvents={lockTouch ? 'auto' : 'none'}
          >
            <Pdf
              trustAllCerts={false}
              source={source}
              onLoadComplete={(
                numberOfPages,
                //  filePath
              ) => {
                console.log(`Number of pages: ${numberOfPages}`);
                // lastPage = numberOfPages;
              }}
              onPageChanged={(
                page,
                // numberOfPages
              ) => {
                console.log(`Current page: ${page}`);
                // pageNumber = page;
              }}
              onError={error => {
                console.log(error);
              }}
              onPressLink={uri => {
                console.log(`Link pressed: ${uri}`);
              }}
              style={styles.pdf}
              spacing={0}
              // maxScale={1}
            />
          </View>
          <LinearGradient
            // colors={['rgba(255, 255, 255, 0.5)', 'rgba(255, 255, 255, 1)']}
            colors={[
              '#000000ff',
              '#000000bd',
              '#0000003f',
              '#00000000',
              '#0000003f',
              '#000000bd',
              '#000000ff',
            ]}
            locations={[0, 0.2, 0.3, 0.5, 0.7, 0.8, 1]}
            // colors={['red', 'black']}
            style={[
              styles.pdfFocus,
              isFocusModeEnabled ? styles.show : styles.hide,
            ]}
            pointerEvents="none"
          />
          <View
            style={[
              styles.pdfShield,
              lockTouch ? styles.showShield : styles.hideShield,
            ]}
          />
          <FAB
            icon="arrow-up-bold"
            style={[
              styles.fabScrollUp,
              showButtons ? styles.show : styles.hide,
            ]}
            onPress={() => console.log('Pressed')}
          />
          <FAB
            icon="arrow-down-bold"
            style={[
              styles.fabScrollDown,
              showButtons ? styles.show : styles.hide,
            ]}
            onPress={() => console.log('Pressed')}
          />
          <FAB
            icon="plus-thick"
            style={[styles.fabPlus, showButtons ? styles.show : styles.hide]}
            onPress={() => increaseODO()}
          />
          <FAB
            icon="minus-thick"
            style={[styles.fabMinus, showButtons ? styles.show : styles.hide]}
            onPress={() => decreaseODO()}
          />
        </>
      ) : (
        <View style={styles.emptyWrapper}>
          <Button
            icon="file-plus"
            mode="contained"
            onPress={() => openFileHandler && openFileHandler()}>
            Selec PDF ...
          </Button>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    // alignItems: "center",
    justifyContent: 'space-around',
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
  container: {
    flex: 1,
  },
  blocker: {
    backgroundColor: 'red',
  },
  pdf: {
    flex: 1,
    // width: Dimensions.get('window').width,
    // height: Dimensions.get('window').height,
  },
  pdfWrapper: {
    flex: 1,
  },
  emptyWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pdfShield: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'yellow',
    opacity: 0.1,
  },
  hideShield: {
    display: 'none',
  },
  showShield: {
    display: 'flex',
  },
  pdfFocus: {
    // flex: 1,
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    // backgroundColor: 'blue',
    // opacity: 0.3,
  },
  hide: {
    display: 'none',
  },
  show: {
    display: 'flex',
  },
  fabPlus: {
    position: 'absolute',
    margin: 16,
    alignSelf: 'center',
    bottom: 0,
  },
  fabMinus: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  fabScrollUp: {
    position: 'absolute',
    margin: 16,
    left: 0,
    top: 0,
  },
  fabScrollDown: {
    position: 'absolute',
    margin: 16,
    left: 0,
    bottom: 0,
  },
});

export default PDFBrowser;
