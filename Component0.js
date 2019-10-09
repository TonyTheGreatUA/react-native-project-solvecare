import React, {Component} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import Component1 from './components/Component1';
import Component2 from './components/Component2';

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
        <Component1 updateData={this.updateData} />
        <Component2
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          creditCardNumber={this.state.creditCardNumber}
          cardType={this.state.cardType}
          isFormInfoVisibile={this.state.isFormInfoVisibile}
          onFormValid={this.state.onFormValid}
        />
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
