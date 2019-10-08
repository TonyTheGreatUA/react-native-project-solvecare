import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  View,
  Button,
  TextInput,
} from 'react-native';

const cardRegex = RegExp(/^[0-9]{16}$/);
const cvvRegex = RegExp(/^[0-9]{3,4}$/);
const expRegex = RegExp(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/);

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
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <SafeAreaView style={styles.card}>
        <Text>Credit Card Home Task</Text>
        <View onSubmit={e => e.preventDefault()}>
          <TextInput
            style={styles.input}
            type="text"
            //className={formErrors.creditCardNumber.length > 0 ? 'error' : null}
            placeholder="0000 0000 0000 0000"
            placeholderTextColor="rgba(255,255,255,0.7)"
            autoCorrect={false}
            name="creditCardNumber"
            onChange={this.handleChange}
          />
          <View style={styles.cardLine}>
            <TextInput
              style={styles.input}
              type="text"
              //className={formErrors.expirationDate.length > 0 ? 'error' : null}
              placeholder="MM/YY"
              placeholderTextColor="rgba(255,255,255,0.7)"
              autoCorrect={false}
              name="expirationDate"
              onChange={this.handleChange}
            />
            <TextInput
              style={styles.input}
              type="text"
              //className={formErrors.cvv.length > 0 ? 'error' : null}
              placeholder="CVV/CVC"
              placeholderTextColor="rgba(255,255,255,0.7)"
              autoCorrect={false}
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
              placeholderTextColor="rgba(255,255,255,0.7)"
              autoCorrect={false}
              name="firstName"
              onChange={this.handleChange}
            />
            <TextInput
              style={styles.input}
              type="text"
              //className={formErrors.lastName.length > 0 ? 'error' : null}
              placeholder="Surname"
              placeholderTextColor="rgba(255,255,255,0.7)"
              autoCorrect={false}
              name="lastName"
              onChange={this.handleChange}
            />
          </View>
          <TextInput
            type="text"
            style={styles.input}
            //className={formErrors.secretQuestion.length > 0 ? 'error' : null}
            placeholder="Secret Question"
            placeholderTextColor="rgba(255,255,255,0.7)"
            autoCorrect={false}
            name="secretQuestion"
            onChange={this.handleChange}
          />
          <TextInput
            style={styles.input}
            type="text"
            //className={formErrors.secretAnswer.length > 0 ? 'error' : null}
            placeholder="Secret Answer"
            placeholderTextColor="rgba(255,255,255,0.7)"
            autoCorrect={false}
            name="secretAnswer"
            onChange={this.handleChange}
          />
          <Button type="Submit" onPress={this.handleSubmit} title="Submit" />
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  card: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#3498db',
    padding: 10,
  },
  cardLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    marginBottom: 20,
    color: 'white',
    paddingHorizontal: 10,
  },
});
export default Component1;
