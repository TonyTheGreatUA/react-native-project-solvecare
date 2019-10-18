/* eslint-disable */
//@flow

import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import Component3 from '../Component3';

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
type Event = {
  nativeEvent: Object,
};
type State = {
  formErrors: {
    firstName: boolean,
    lastName: boolean,
    cvv: boolean,
    expirationDate: boolean,
    secretQuestion: boolean,
    secretAnswer: boolean,
    creditCardNumber: boolean,
  },
  onFormValid: boolean,
  isSubmitted: boolean,
};

class Component1 extends React.Component<Props, State> {
  constructor() {
    super();
    this.state = {
      onFormValid: false,
      isSubmitted: false,
      formErrors: {
        creditCardNumber: false,
        expirationDate: false,
        cvv: false,
        firstName: false,
        lastName: false,
        secretQuestion: false,
        secretAnswer: false,
      },
    };
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
  handleSubmit = (e: SyntheticEvent<HTMLInputElement>) => {
    const {name, value} = e.currentTarget;
    let formErrors = {...this.state.formErrors};
    let onFormValid = this.state.onFormValid;

    for (let i in formErrors) {
      if (formErrors[i] !== true) {
        onFormValid = false;
        this.setState({onFormValid: onFormValid});
      }
    }

    this.setState({onFormValid, isSubmitted: true}, () => {});
  };

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
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#fff',
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
    color: '#000000',
    borderBottomColor: '#F3C678',
    borderBottomWidth: 1,
    textAlign: 'center',
  },
  button: {
    width: '100%',
    backgroundColor: '#F3C678',
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
});
export default Component1;
