/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import DrawerSelector from './components/DrawerSelector';

const App = () => {
  var setmodalVisible;
  const setDrawerSelector = (func) => {
    setmodalVisible = func;
  }
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Hello World React Native!</Text>
      <Button
        onPress={() => { setmodalVisible(); }}
        title='Open Drawer'
      />
      <DrawerSelector data={[['1', 'Item 1', () => { console.log('Item 1 Selected') }], ['2', 'Item 2', () => { console.log('Item 2 Selected') }]]} setDrawerSelector={setDrawerSelector} />
    </View>
  );
};


const styles = StyleSheet.create({
  view: {
    backgroundColor: '#c3b3b3',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'white'
  }
});

export default App;
