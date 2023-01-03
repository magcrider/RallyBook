import React, {useEffect, useState} from 'react';
import {StyleSheet, Dimensions, View} from 'react-native';
import {Button} from 'react-native-paper';
import Pdf from 'react-native-pdf';
const PDFBrowser = () => {
  type iSource = {
    uri?: string;
    cache?: boolean;
  };

  const [source, setSource] = useState<iSource>({});
  //   const source = {
  //     uri: 'https://rallyvultur.magc.co/PrimerVulturTourNoted.pdf',
  //     cache: true,
  //   };

  //   useEffect(() => {
  //     setSource({
  //       uri: 'https://rallyvultur.magc.co/PrimerVulturTourNoted.pdf',
  //       cache: true,
  //     });
  //   }, []);

  return (
    <View style={styles.pdfWrapper}>
      {Object.keys(source).length > 0 ? (
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
      ) : (
        <View style={styles.emptyWrapper}>
          <Button
            icon="file-plus"
            mode="contained"
            onPress={() => console.log('Pressed')}>
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
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  pdfWrapper: {
    flex: 1,
  },
  emptyWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PDFBrowser;
