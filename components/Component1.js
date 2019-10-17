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
import Component3 from './Component3';

const cardRegex = RegExp(/^[0-9]{16}$/);
const cvvRegex = RegExp(/^[0-9]{3,4}$/);
const expRegex = RegExp(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/);
type Props = {
  updateData: (
    firstName: string,
    lastName: string,
    creditCardNumber: string,
    cardType: string,
    onFormValid: boolean,
  ) => void,
};
type Event = {
  nativeEvent: Object,
};
type State = {
  cardType: string,
  creditCardNumber: string,
  formErrors: {
    firstName: boolean,
    lastName: boolean,
    cvv: boolean,
    expirationDate: boolean,
    secretQuestion: boolean,
    secretAnswer: boolean,
    creditCardNumber: boolean,
  },
  firstName: string,
  lastName: string,
  cvv: string,
  expirationDate: string,
  secretQuestion: string,
  secretAnswer: string,
  onFormValid: boolean,
  isSubmitted: boolean,
};

class Component1 extends React.Component<Props, State> {
  state = {
    creditCardNumber: '',
    cvv: '',
    expirationDate: '',
    firstName: '',
    lastName: '',
    secretQuestion: '',
    secretAnswer: '',
    enteredWithError: '',
    cardType: '',
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

  updateCardType = (cardType: string) => {
    this.setState({
      cardType: cardType,
    });
  };

  handleSubmit = (e: SyntheticEvent<>) => {
    e.preventDefault();
    let formErrors = {...this.state.formErrors};
    let onFormValid = this.state.onFormValid;

    for (let i in formErrors) {
      if (formErrors[i] !== true) {
        onFormValid = false;
        this.setState({onFormValid: onFormValid});
      }
    }
    this.setState({onFormValid, isSubmitted: true}, () => {
      this.props.updateData(
        this.state.firstName,
        this.state.lastName,
        this.state.creditCardNumber,
        this.state.cardType,
        this.state.onFormValid,
      );
    });
    return true;
  };
  onValidation = (name: string, value: string) => {
    let formErrors = {...this.state.formErrors};

    switch (name) {
      case 'firstName':
        formErrors.firstName = value.length < 3 ? false : true;
        break;
      case 'lastName':
        formErrors.lastName = value.length < 3 ? false : true;
        break;
      case 'secretQuestion':
        formErrors.secretQuestion = value.length < 10 ? false : true;
        break;
      case 'secretAnswer':
        formErrors.secretAnswer = value.length < 10 ? false : true;
        break;
      case 'creditCardNumber':
        formErrors.creditCardNumber = cardRegex.test(value) ? true : false;
        break;
      case 'cvv':
        formErrors.cvv = cvvRegex.test(value) ? true : false;
        break;
      case 'expirationDate':
        formErrors.expirationDate = expRegex.test(value) ? true : false;
        break;
      default:
        break;
    }
    this.setState({formErrors, [name]: value});
  };
  handleChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const {name, value} = e.currentTarget;
    this.setState({[name]: value}, () => {
      this.onValidation(name, value);
    });
  };

  render() {
    const {formErrors, isSubmitted} = this.state;
    console.log(this.state.creditCardNumber);
    return (
      <ScrollView>
        <View style={styles.mainView}>
          <View>
            <TextInput
              style={[
                styles.inputText,
                {
                  borderBottomColor:
                    !formErrors.creditCardNumber && isSubmitted
                      ? 'red'
                      : formErrors.creditCardNumber && !isSubmitted
                      ? ''
                      : '',
                },
              ]}
              type="text"
              placeholder="0000 0000 0000 0000"
              onChangeText={creditCardNumber =>
                this.setState({creditCardNumber})
              }
            />
            <View style={styles.cardLine}>
              <TextInput
                style={[
                  styles.inputText,
                  {
                    borderBottomColor:
                      !formErrors.expirationDate && isSubmitted
                        ? 'red'
                        : formErrors.expirationDate && !isSubmitted
                        ? ''
                        : '',
                  },
                ]}
                type="text"
                placeholder="MM/YY"
                onChangeText={expirationDate => this.setState({expirationDate})}
              />
              <TextInput
                style={[
                  styles.inputText,
                  {
                    borderBottomColor:
                      !formErrors.cvv && isSubmitted
                        ? 'red'
                        : formErrors.cvv && !isSubmitted
                        ? ''
                        : '',
                  },
                ]}
                type="text"
                placeholder="CVV/CVC"
                onChangeText={cvv => this.setState({cvv})}
              />
            </View>
            <View style={styles.cardLine}>
              <TextInput
                style={[
                  styles.inputText,
                  {
                    borderBottomColor:
                      !formErrors.firstName && isSubmitted
                        ? 'red'
                        : formErrors.firstName && !isSubmitted
                        ? ''
                        : '',
                  },
                ]}
                type="text"
                placeholder="Your Name"
                onChangeText={firstName => this.setState({firstName})}
              />
              <TextInput
                style={[
                  styles.inputText,
                  {
                    borderBottomColor:
                      !formErrors.lastName && isSubmitted
                        ? 'red'
                        : formErrors.lastName && !isSubmitted
                        ? ''
                        : '',
                  },
                ]}
                type="text"
                placeholder="Your Surname"
                onChangeText={lastName => this.setState({lastName})}
              />
            </View>
            <TextInput
              style={[
                styles.inputText,
                {
                  borderBottomColor:
                    !formErrors.secretQuestion && isSubmitted
                      ? 'red'
                      : formErrors.secretQuestion && !isSubmitted
                      ? ''
                      : '',
                },
              ]}
              type="text"
              placeholder="Your Secret Question"
              onChangeText={secretQuestion => this.setState({secretQuestion})}
            />

            <TextInput
              style={[
                styles.inputText,
                {
                  borderBottomColor:
                    !formErrors.secretAnswer && isSubmitted
                      ? 'red'
                      : formErrors.secretAnswer && !isSubmitted
                      ? ''
                      : '',
                },
              ]}
              type="text"
              placeholder="Your Secret Answer"
              onChangeText={secretAnswer => this.setState({secretAnswer})}
            />
            <Button onPress={this.handleSubmit} type="submit" title="Submit" />
            <Component3
              creditCardNumber={this.state.creditCardNumber}
              onCardChange={this.updateCardType}
            />
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
