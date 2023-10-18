import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';

import Routines from './src/Routines';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.safeView}>
      <ImageBackground
        source={require('./src/assets/backgroundImage.png')}
        style={styles.imageStyle}
        resizeMode="cover">
        <StatusBar barStyle={'light-content'} backgroundColor={'#000066'} />
        <Routines />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imageStyle: {flex: 1, width: '100%', height: 300},
  safeView: {flex: 1},
});

export default App;
