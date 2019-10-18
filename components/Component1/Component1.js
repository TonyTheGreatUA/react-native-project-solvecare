/* eslint-disable */
//@flow

import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  View,
  Button,
  TextInput,
  ScrollView,
} from 'react-native';
import Component3 from '../Component3';

const cardRegex = RegExp(/^[0-9]{16}$/);
const cvvRegex = RegExp(/^[0-9]{3,4}$/);
const expRegex = RegExp(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/);

type Props = {
  creditCardNumber: string,
  expirationDate: string,
  cvv: string,
  firstName: string,
  lastName: string,
  secretQuestion: string,
  secretAnswer: string,
  setCreditCardNumber: (value: string) => void,
  setExpirationDate: (value: string) => void,
  setCVV: (value: string) => void,
  setFirstName: (value: string) => void,
  setLastName: (value: string) => void,
  setSecretQuestion: (value: string) => void,
  setSecretAnswer: (value: string) => void,
  onCreditCardNumberChange: (value: string) => void,
  onCvvChange: (value: string) => void,
  onExpirationDateChange: (value: string) => void,
  onFirstNameChange: (value: string) => void,
  onLastNameChange: (value: string) => void,
  onSecretQuestionChange: (value: string) => void,
  onSecretAnswerChange: (value: string) => void,
};

type State = {};

class Component1 extends React.Component<Props, State> {
  constructor() {
    super();

    this.onCreditCardNumberChange = this.onCreditCardNumberChange.bind(this);
    this.onCvvChange = this.onCvvChange.bind(this);
    this.onExpirationDateChange = this.onExpirationDateChange.bind(this);
    this.onFirstNameChange = this.onFirstNameChange.bind(this);
    this.onLastNameChange = this.onLastNameChange.bind(this);
    this.onSecretQuestionChange = this.onSecretQuestionChange.bind(this);
    this.onSecretAnswerChange = this.onSecretAnswerChange.bind(this);
  }

  onCreditCardNumberChange: () => void;
  onCreditCardNumberChange(value: string) {
    this.props.setCreditCardNumber(value);
  }
  onExpirationDateChange: () => void;
  onExpirationDateChange(value: string) {
    this.props.setExpirationDate(value);
  }
  onCvvChange: () => void;
  onCvvChange(value: string) {
    this.props.setCVV(value);
  }
  onFirstNameChange: () => void;
  onFirstNameChange(value: string) {
    this.props.setFirstName(value);
  }
  onLastNameChange: () => void;
  onLastNameChange(value: string) {
    this.props.setLastName(value);
  }
  onSecretQuestionChange: () => void;
  onSecretQuestionChange(value: string) {
    this.props.setSecretQuestion(value);
  }
  onSecretAnswerChange: () => void;
  onSecretAnswerChange(value: string) {
    this.props.setSecretAnswer(value);
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.mainView}>
          <View>
            <TextInput
              style={styles.inputText}
              type="text"
              placeholder="0000 0000 0000 0000"
              value={this.props.creditCardNumber}
              onChangeText={this.onCreditCardNumberChange}
            />
            <View style={styles.cardLine}>
              <TextInput
                style={styles.inputText}
                type="text"
                placeholder="MM/YY"
                value={this.props.expirationDate}
                onChangeText={this.onExpirationDateChange}
              />
              <TextInput
                style={styles.inputText}
                type="text"
                placeholder="CVV/CVC"
                value={this.props.cvv}
                onChangeText={this.onCvvChange}
              />
            </View>
            <View style={styles.cardLine}>
              <TextInput
                style={styles.inputText}
                type="text"
                placeholder="Your Name"
                value={this.props.firstName}
                onChangeText={this.onFirstNameChange}
              />
              <TextInput
                style={styles.inputText}
                type="text"
                placeholder="Your Surname"
                value={this.props.lastName}
                onChangeText={this.onLastNameChange}
              />
            </View>
            <TextInput
              style={styles.inputText}
              type="text"
              placeholder="Your Secret Question"
              value={this.props.secretQuestion}
              onChangeText={this.onSecretQuestionChange}
            />

            <TextInput
              style={styles.inputText}
              type="text"
              placeholder="Your Secret Answer"
              value={this.props.secretAnswer}
              onChangeText={this.onSecretAnswerChange}
            />
            <Button type="submit" title="Submit" />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#3498db',
    paddingTop: 100,
  },
  cardLine: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  inputText: {
    alignSelf: 'stretch',
    fontSize: 18,
    height: 40,
    marginBottom: 30,
    color: '#fff',
    borderBottomColor: '#f8f8f8',
    borderBottomWidth: 1,
    textAlign: 'center',
  },
});
export default Component1;
