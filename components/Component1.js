import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  View,
  Button,
  TextInput,
} from 'react-native';

class Component1 extends Component {
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
    formErrors: {
      creditCardNumber: '',
      expirationDate: '',
      cvv: '',
      firstName: '',
      lastName: '',
      secretQuestion: '',
      secretAnswer: '',
    },
  };

  render() {
    return (
      <SafeAreaView style={styles.card}>
        <Text>Credit Card Home Task</Text>
        <View>
          <TextInput
            style={styles.input}
            type="text"
            //className={formErrors.creditCardNumber.length > 0 ? 'error' : null}
            placeholder="0000 0000 0000 0000"
            noValidate
            name="creditCardNumber"
            onChange={this.handleChange}
          />
          <View style={styles.cardLine}>
            <TextInput
              style={styles.input}
              type="text"
              //className={formErrors.expirationDate.length > 0 ? 'error' : null}
              placeholder="MM/YY"
              noValidate
              name="expirationDate"
              onChange={this.handleChange}
            />
            <TextInput
              style={styles.input}
              type="text"
              //className={formErrors.cvv.length > 0 ? 'error' : null}
              placeholder="CVV/CVC"
              noValidate
              name="cvv"
              onChange={this.handleChange}
            />
          </View>
          <View style={styles.cardLine}>
            <TextInput
              style={styles.input}
              type="text"
              //className={formErrors.firstName.length > 0 ? 'error' : null}
              placeholder="Name"
              noValidate
              name="firstName"
              onChange={this.handleChange}
            />
            <TextInput
              style={styles.input}
              type="text"
              //className={formErrors.lastName.length > 0 ? 'error' : null}
              placeholder="Surname"
              noValidate
              name="lastName"
              onChange={this.handleChange}
            />
          </View>
          <TextInput
            type="text"
            style={styles.input}
            //className={formErrors.secretQuestion.length > 0 ? 'error' : null}
            placeholder="Secret Question"
            noValidate
            name="secretQuestion"
            onChange={this.handleChange}
          />
          <TextInput
            style={styles.input}
            type="text"
            //className={formErrors.secretAnswer.length > 0 ? 'error' : null}
            placeholder="Secret Answer"
            noValidate
            name="secretAnswer"
            onChange={this.handleChange}
          />
          <Button title="Submit" />
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'center',
    margin: 10,
  },
  cardLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
});
export default Component1;
