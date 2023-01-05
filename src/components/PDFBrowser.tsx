import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, FAB} from 'react-native-paper';
import Pdf, {Source} from 'react-native-pdf';

type PDFBrowserProps = {
  pdf_uri?: string;
  openFileHandler?: Function;
  blockTouch?: boolean;
  increaseODO: Function;
  decreaseODO: Function;
};

const PDFBrowser = ({
  pdf_uri,
  openFileHandler,
  blockTouch,
  increaseODO,
  decreaseODO,
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
        <View
          style={styles.pdfWrapper}
          pointerEvents={!blockTouch ? 'auto' : 'none'}>
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
          <FAB
            icon="arrow-up-bold"
            style={styles.fabScrollUp}
            onPress={() => console.log('Pressed')}
          />
          <FAB
            icon="arrow-down-bold"
            style={styles.fabScrollDown}
            onPress={() => console.log('Pressed')}
          />
          <FAB
            icon="plus-thick"
            style={styles.fabPlus}
            onPress={() => increaseODO()}
          />
          <FAB
            icon="minus-thick"
            style={styles.fabMinus}
            onPress={() => decreaseODO()}
          />
        </View>
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
  fabPlus: {
    position: 'absolute',
    margin: 16,
    // right: '50%',
    // left: '50%',
    // justifyContent: 'center',
    // alignItems: 'center',
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
