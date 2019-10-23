/* eslint-disable */
//@flow

import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import getDataFromServer from '../../services/serverService';
import styles from './Component1.style';

type Props = {
  isError: boolean,
  creditCardNumber: string,
  expirationDate: string,
  cvv: string,
  firstName: string,
  lastName: string,
  secretQuestion: string,
  secretAnswer: string,
  showDetails: () => void,
  onSubmit: (value: boolean) => void,
  setCreditCardNumber: (value: string) => void,
  setExpirationDate: (value: string) => void,
  setCVV: (value: string) => void,
  setFirstName: (value: string) => void,
  setLastName: (value: string) => void,
  setSecretQuestion: (value: string) => void,
  setSecretAnswer: (value: string) => void,
};

type State = {};

class Component1 extends React.Component<Props, State> {
  constructor() {
    super();
  }

  onValidate() {
    this.props.showDetails();
  }
  handleSubmit = () => {
    this.onValidate();
    this.props.onSubmit(true);
    return true;
  };

  render() {
    const { isError } = this.props;
    return (
      <ScrollView>
        <View style={styles.mainView}>
          <View>
            <TextInput
              style={[
                styles.inputText,
                {
                  borderBottomColor: isError === true ? styles.inputError : styles.inputDefault,
                },
              ]}
              type="text"
              placeholder="0000 0000 0000 0000"
              value={this.props.creditCardNumber}
              onChangeText={this.props.setCreditCardNumber}
            />
            <View style={styles.cardLine}>
              <TextInput
                style={[
                  styles.inputText,
                  {
                    borderBottomColor: isError ? styles.inputError : styles.inputDefault,
                  },
                ]}
                type="text"
                placeholder="MM/YY"
                value={this.props.expirationDate}
                onChangeText={this.props.setExpirationDate}
              />
              <TextInput
                style={[
                  styles.inputText,
                  {
                    borderBottomColor: isError ? styles.inputError : styles.inputDefault,
                  },
                ]}
                type="text"
                placeholder="CVV/CVC"
                value={this.props.cvv}
                onChangeText={this.props.setCVV}
              />
            </View>
            <View style={styles.cardLine}>
              <TextInput
                style={[
                  styles.inputText,
                  {
                    borderBottomColor: isError ? styles.inputError : styles.inputDefault,
                  },
                ]}
                type="text"
                placeholder="Your Name"
                value={this.props.firstName}
                onChangeText={this.props.setFirstName}
              />
              <TextInput
                style={[
                  styles.inputText,
                  {
                    borderBottomColor: isError ? styles.inputError : styles.inputDefault,
                  },
                ]}
                type="text"
                placeholder="Your Surname"
                value={this.props.lastName}
                onChangeText={this.props.setLastName}
              />
            </View>
            <TextInput
              style={[
                styles.inputText,
                {
                  borderBottomColor: isError ? styles.inputError : styles.inputDefault,
                },
              ]}
              type="text"
              placeholder="Your Secret Question"
              value={this.props.secretQuestion}
              onChangeText={this.props.setSecretQuestion}
            />

            <TextInput
              style={[
                styles.inputText,
                {
                  borderBottomColor: isError ? styles.inputError : styles.inputDefault,
                },
              ]}
              type="text"
              placeholder="Your Secret Answer"
              value={this.props.secretAnswer}
              onChangeText={this.props.setSecretAnswer}
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

export default Component1;
