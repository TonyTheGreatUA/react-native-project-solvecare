//@flow
/*eslint-disable*/
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ActivityIndicator,
} from 'react-native';

type Props = {
  firstName: string,
  lastName: string,
  creditCardNumber: string,
  cardType: string,
  onFormValid: boolean,
  isFormShown: boolean,
  isLoading: boolean,
  isError: boolean,
};

type State = {
  cardType: string,
};
class Component2 extends React.PureComponent<Props, State> {
  state = {
    cardType: '',
  };

  componentDidUpdate = (prevProps: Props) => {
    if (prevProps.creditCardNumber !== this.props.creditCardNumber) {
      this.getCardType();
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
    const {
      firstName,
      lastName,
      creditCardNumber,
      isFormShown,
      isError,
      isLoading,
    } = this.props;
    if (isError) {
      <View style={styles.card}>
        <Text style={styles.h1}>There is an error!</Text>
      </View>;
    }
    if (isLoading) {
      return (
        <View style={styles.card}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
    if (isFormShown && !isError) {
      return (
        <View style={styles.card}>
          <Text style={styles.h1}>Card Info</Text>
          <Text>First Name : {firstName}</Text>
          <Text>Last Name : {lastName}</Text>
          <Text>Credit Card : {creditCardNumber.slice(-4)}</Text>
          <Text>Card Type : {cardType}</Text>
        </View>
      );
    }
    return <View></View>;
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
