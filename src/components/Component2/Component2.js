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
};
class Component2 extends React.Component<Props, State> {
  state = {
    isFormInfoVisibile: false,
    timer: false,
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
    if (
      prevProps.firstName === this.props.firstName &&
      prevProps.lastName === this.props.lastName &&
      prevProps.creditCardNumber === this.props.creditCardNumber &&
      prevProps.cardType === this.props.cardType
    ) {
      return;
    }
    if (!this.state.isFormInfoVisibile) {
      this.startFormTimer();
    }
  };

  render() {
    const {firstName, lastName, creditCardNumber, cardType} = this.props;
    if (!this.state.isFormInfoVisibile) {
      return null;
    }

    return (
      <View style={styles.card}>
        <Text style={styles.h1}>Card Info</Text>
        <Text>First Name : {firstName}</Text>
        <Text>Last Name : {lastName}</Text>
        <Text>
          Credit Card :{' '}
          {creditCardNumber.substr(this.props.creditCardNumber.length - 4)}
        </Text>
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
