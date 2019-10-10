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
    onFormValid: true,
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

  updateCardType = (cardType: string) => {
    this.setState({
      cardType: cardType,
    });
  };

  handleSubmit = (e: SyntheticEvent<HTMLInputElement>) => {
    e.preventDefault();
    let formErrors = {...this.state.formErrors};
    let onFormValid = this.state.onFormValid;

    for (let i in formErrors) {
      if (formErrors[i] !== true) {
        onFormValid = false;
        this.setState({onFormValid: onFormValid});
      }
    }
    this.setState({onFormValid}, () => {
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
    const {formErrors} = this.state;
    console.log(this.state.creditCardNumber);
    return (
      <ScrollView>
        <View style={styles.mainView}>
          <View>
            <TextInput
              style={styles.inputText}
              type="text"
              placeholder="0000 0000 0000 0000"
              onChangeText={creditCardNumber =>
                this.setState({creditCardNumber})
              }
            />
            <View style={styles.cardLine}>
              <TextInput
                style={styles.inputText}
                type="text"
                placeholder="MM/YY"
                onChangeText={expirationDate => this.setState({expirationDate})}
              />
              <TextInput
                style={styles.inputText}
                type="text"
                //className={formErrors.cvv === true ? '' : 'error'}
                placeholder="CVV/CVC"
                onChangeText={cvv => this.setState({cvv})}
              />
            </View>
            <View style={styles.cardLine}>
              <TextInput
                style={styles.inputText}
                type="text"
                //className={formErrors.firstName === true ? '' : 'error'}
                placeholder="Your Name"
                onChangeText={firstName => this.setState({firstName})}
              />
              <TextInput
                style={styles.inputText}
                type="text"
                //className={formErrors.lastName === true ? '' : 'error'}
                placeholder="Your Surname"
                onChangeText={lastName => this.setState({lastName})}
              />
            </View>
            <TextInput
              style={styles.inputText}
              type="text"
              //className={formErrors.secretQuestion === true ? '' : 'error'}
              placeholder="Your Secret Question"
              onChangeText={secretQuestion => this.setState({secretQuestion})}
            />

            <TextInput
              style={styles.inputText}
              type="text"
              //className={formErrors.secretAnswer === true ? '' : 'error'}
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
