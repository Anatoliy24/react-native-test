import React, {Component} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

class MyButton extends Component {
  _onPressButton() {
    console.log("You tapped the button!");
  }

  render() {
    return (
      <TouchableOpacity onPress={this._onPressButton} >
        <Text style={styles.button}>Button</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    color: 'white',
    height: 30,
    lineHeight: 30,
    marginTop: 10,
    textAlign: 'center',
    width: 250
  },
});


export default MyButton