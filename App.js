import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import User from './components/Users/User';
import { Provider } from 'react-redux';
import store from './state/store'

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>      
        <StatusBar style="auto" />
        <User />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
