//@flow
/*eslint-disable*/
import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
type Props = {
  firstName: string,
  lastName: string,
  creditCardNumber: string,
  cardType: string,
  onFormValid: boolean,
};

type State = {
  isFormInfoVisibile: boolean,
  timer: boolean,
  cardType: string,
};
class Component2 extends React.PureComponent<Props, State> {
  state = {
    isFormInfoVisibile: false,
    timer: false,
    cardType: '',
  };

  startFormTimer = () => {
    const timer = setTimeout(() => {
      this.setState({
        isFormInfoVisibile: false,
        timer: false,
      });
    }, 5000);

    this.setState({
      isFormInfoVisibile: true,
    });
  };
  componentDidUpdate = (prevProps: Props) => {
    if (prevProps.creditCardNumber !== this.props.creditCardNumber) {
      this.getCardType();
    }
    if (!this.state.isFormInfoVisibile) {
      this.startFormTimer();
    }
  };
  getCardType = () => {
    const {creditCardNumber} = this.props;
    let cardType;

    creditCardNumber.length === 16 && Number(creditCardNumber.slice(-4)) > 2000
      ? (cardType = 'MasterCard')
      : creditCardNumber.length === 16 &&
        Number(creditCardNumber.slice(-4)) < 2000
      ? (cardType = 'Visa')
      : (cardType = '');

    this.setState({
      cardType,
    });
  };

  render() {
    const {cardType} = this.state;
    const {firstName, lastName, creditCardNumber} = this.props;
    if (!this.state.isFormInfoVisibile) {
      return null;
    }
    console.log(this.state.isFormInfoVisibile);
    return (
      <View style={styles.card}>
        <Text style={styles.h1}>Card Info</Text>
        <Text>First Name : {firstName}</Text>
        <Text>Last Name : {lastName}</Text>
        <Text>Credit Card :{creditCardNumber.slice(-4)}</Text>
        <Text>Card Type : {cardType}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  card: {
    paddingBottom: 90,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  h1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F3C678',
  },
});
export default Component2;
