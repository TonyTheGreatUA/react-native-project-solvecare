import React, {Component} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import Component4 from './components/Component4';
import Component5 from './components/Component5';

type Props = {
  updateData: (
    firstName: string,
    lastName: string,
    creditCardNumber: string,
    cardType: string,
    onFormValid: boolean,
  ) => void,
};

type State = {
  firstName: string,
  lastName: string,
  creditCardNumber: string,
  cardType: string,
  isFormInfoVisibile: boolean,
  onFormValid: boolean,
};
class Component0 extends React.Component<Props, State> {
  state = {
    firstName: '',
    lastName: '',
    creditCardNumber: '',
    isFormInfoVisibile: true,
    enteredWithError: '',
    cardType: '',
    onFormValid: true,
  };

  updateData = (
    firstName: string,
    lastName: string,
    creditCardNumber: string,
    cardType: string,
    onFormValid: boolean,
  ) => {
    this.setState({
      firstName: firstName,
      lastName: lastName,
      creditCardNumber: creditCardNumber,
      cardType: cardType,
      onFormValid: onFormValid,
    });
  };

  render() {
    console.log('(render) App');
    return (
      <View style={styles.homeScreen}>
        <Component4 />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    backgroundColor: '#3498db',
  },
});
export default Component0;
