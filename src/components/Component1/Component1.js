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
import getDataFromServer from '../../services/serverService';

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
        creditCardNumber: true,
        expirationDate: true,
        cvv: true,
        firstName: true,
        lastName: true,
        secretQuestion: true,
        secretAnswer: true,
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

  getData = (item: any) => {
    getDataFromServer(item).then(response => {
      this.setState({formErrors: response});
    });
  };

  handleSubmit = () => {
    let onFormValid = this.state.onFormValid;

    this.setState({onFormValid, isSubmitted: true});
    this.getData(this.state);
    return true;
  };

  render() {
    let {formErrors} = this.state;

    return (
      <ScrollView>
        <View style={styles.mainView}>
          <View>
            <TextInput
              style={[
                styles.inputText,
                {
                  borderBottomColor:
                    formErrors.creditCardNumber === false
                      ? styles.inputError
                      : styles.inputDefault,
                },
              ]}
              type="text"
              placeholder="0000 0000 0000 0000"
              value={this.props.creditCardNumber}
              onChangeText={this.onCreditCardNumberChange}
            />
            <View style={styles.cardLine}>
              <TextInput
                style={[
                  styles.inputText,
                  {
                    borderBottomColor:
                      formErrors.expirationDate === false
                        ? styles.inputError
                        : styles.inputDefault,
                  },
                ]}
                type="text"
                placeholder="MM/YY"
                value={this.props.expirationDate}
                onChangeText={this.onExpirationDateChange}
              />
              <TextInput
                style={[
                  styles.inputText,
                  {
                    borderBottomColor:
                      formErrors.cvv === false
                        ? styles.inputError
                        : styles.inputDefault,
                  },
                ]}
                type="text"
                placeholder="CVV/CVC"
                value={this.props.cvv}
                onChangeText={this.onCvvChange}
              />
            </View>
            <View style={styles.cardLine}>
              <TextInput
                style={[
                  styles.inputText,
                  {
                    borderBottomColor:
                      formErrors.firstName === false
                        ? styles.inputError
                        : styles.inputDefault,
                  },
                ]}
                type="text"
                placeholder="Your Name"
                value={this.props.firstName}
                onChangeText={this.onFirstNameChange}
              />
              <TextInput
                style={[
                  styles.inputText,
                  {
                    borderBottomColor:
                      formErrors.lastName === false
                        ? styles.inputError
                        : styles.inputDefault,
                  },
                ]}
                type="text"
                placeholder="Your Surname"
                value={this.props.lastName}
                onChangeText={this.onLastNameChange}
              />
            </View>
            <TextInput
              style={[
                styles.inputText,
                {
                  borderBottomColor:
                    formErrors.secretQuestion === false
                      ? styles.inputError
                      : styles.inputDefault,
                },
              ]}
              type="text"
              placeholder="Your Secret Question"
              value={this.props.secretQuestion}
              onChangeText={this.onSecretQuestionChange}
            />

            <TextInput
              style={[
                styles.inputText,
                {
                  borderBottomColor:
                    formErrors.secretAnswer === false
                      ? styles.inputError
                      : styles.inputDefault,
                },
              ]}
              type="text"
              placeholder="Your Secret Answer"
              value={this.props.secretAnswer}
              onChangeText={this.onSecretAnswerChange}
            />
            <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
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
  inputError: {
    borderBottomColor: '#FF0000',
  },
  inputDefault: {
    borderBottomColor: '#F3C678',
  },
});
export default Component1;