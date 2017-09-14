import React, {Component} from 'react';
import { Text, View, TextInput} from 'react-native';
import MyButton from './myButton';


class Form extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      textInput: '',
      textArea: '',
      date: ''
    };
  }

  render() {

    return (
      <View>
        <Text>Заполните поля</Text>
        <TextInput
          style={{height: 40, width:200, borderColor: 'gray', borderWidth: 1, marginBottom: 25}}
          onChangeText={(textInput) => this.setState({textInput})}
          value={this.state.textInput}
        />
        <TextInput
          style={{height: 80, width:200, borderColor: 'gray', borderWidth: 1}}
          multiline = {true}
          numberOfLines = {4}
          onChangeText={(textArea) => this.setState({textArea})}
          value={this.state.textArea}
        />
        <MyButton />
      </View>
    );

  }
}


export default Form