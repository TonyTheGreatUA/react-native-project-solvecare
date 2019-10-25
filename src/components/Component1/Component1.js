//@flow

import React, { Component } from 'react';
import { Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import styles from './Component1.style';

type Props = {
  handleCardInput: (name: string, val: string) => void,
  isSubmitted: boolean,
  isClickDisabled: boolean,
  isError: boolean,
  handleCardSubmit: () => void,
  validateCreditCard: () => void,
};

type State = {};

class Component1 extends React.Component<Props, State> {
  handleSubmit = () => {
    this.props.validateCreditCard();
    this.props.handleCardSubmit();
  };

  render() {
    const { isError, handleCardInput } = this.props;
    return (
      <ScrollView>
        <View style={styles.mainView}>
          <View>
            <TextInput
              editable={this.props.isSubmitted}
              style={[styles.inputText, isError == true ? styles.inputError : styles.inputDefault]}
              placeholder="0000 0000 0000 0000"
              onChangeText={val => handleCardInput('creditCardNumber', val)}
            />
            <View style={styles.cardLine}>
              <TextInput
                editable={this.props.isSubmitted}
                style={[styles.inputText, isError ? styles.inputError : styles.inputDefault]}
                placeholder="MM/YY"
                onChangeText={val => handleCardInput('expirationDate', val)}
              />
              <TextInput
                editable={this.props.isSubmitted}
                style={[styles.inputText, isError ? styles.inputError : styles.inputDefault]}
                placeholder="CVV/CVC"
                onChangeText={val => handleCardInput('cvv', val)}
              />
            </View>
            <View style={styles.cardLine}>
              <TextInput
                editable={this.props.isSubmitted}
                style={[styles.inputText, isError ? styles.inputError : styles.inputDefault]}
                placeholder="Your Name"
                onChangeText={val => handleCardInput('firstName', val)}
              />
              <TextInput
                editable={this.props.isSubmitted}
                style={[styles.inputText, isError ? styles.inputError : styles.inputDefault]}
                placeholder="Your Surname"
                onChangeText={val => handleCardInput('lastName', val)}
              />
            </View>
            <TextInput
              editable={this.props.isSubmitted}
              style={[styles.inputText, isError ? styles.inputError : styles.inputDefault]}
              placeholder="Your Secret Question"
              onChangeText={val => handleCardInput('secretQuestion', val)}
            />

            <TextInput
              editable={this.props.isSubmitted}
              style={[styles.inputText, isError ? styles.inputError : styles.inputDefault]}
              placeholder="Your Secret Answer"
              onChangeText={val => handleCardInput('secretAnswer', val)}
            />
            <TouchableOpacity
              disabled={this.props.isClickDisabled}
              activeOpacity={0.2}
              style={styles.button}
              onPress={this.handleSubmit}
            >
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default Component1;
