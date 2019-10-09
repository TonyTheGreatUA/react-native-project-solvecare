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
    this.startFormTimer();
  };
  render() {
    console.log('(render) Component2');
    const {firstName, lastName, creditCardNumber, cardType} = this.props;

    return (
      <View style={styles.card}>
        <Text>Card Info</Text>
        <Text>First Name : {firstName}</Text>
        <Text>Last Name : {lastName}</Text>
        <Text className="cardInfo">
          Credit Card :{' '}
          {creditCardNumber.substr(this.props.creditCardNumber.length - 4)}
        </Text>
        <Text className="cardInfo">Card Type : {cardType}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  card: {
    paddingTop: 40,
    paddingBottom: 90,
    flex: 1,
    backgroundColor: '#3498db',
    alignItems: 'center',
  },
  h1: {
    fontWeight: 'bold',
    color: '#fff',
  },
  text: {
    color: '#fff',
  },
});
export default Component2;
