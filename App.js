import React, {Component} from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import Form from './form';



export default class App extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <Text>My first SPA :)</Text>
        <Image source={require('./img/icon.jpg')} style={styles.img} />
        <Form />
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#fff9d4',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  img: {
    width: 40,
    height: 40
  },
});

