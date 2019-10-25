//@flow

import React, { Component } from 'react';
import { Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import styles from './Component1.style';

type Props = {
  isSubmitted: boolean,
  isClickDisabled: boolean,
  isError: boolean,
  onSubmitEdit: () => void,
  validateCreditCard: () => void,
};

type State = {};

class Component1 extends React.Component<Props, State> {
  handleText = () => {};
  handleSubmit = () => {
    this.props.validateCreditCard();
    this.props.onSubmitEdit();
  };

  render() {
    const { isError } = this.props;
    return (
      <ScrollView>
        <View style={styles.mainView}>
          <View>
            <TextInput
              editable={this.props.isSubmitted}
              style={[styles.inputText, isError == true ? styles.inputError : styles.inputDefault]}
              placeholder="0000 0000 0000 0000"
            />
            <View style={styles.cardLine}>
              <TextInput
                editable={this.props.isSubmitted}
                style={[styles.inputText, isError ? styles.inputError : styles.inputDefault]}
                placeholder="MM/YY"
              />
              <TextInput
                editable={this.props.isSubmitted}
                style={[styles.inputText, isError ? styles.inputError : styles.inputDefault]}
                placeholder="CVV/CVC"
              />
            </View>
            <View style={styles.cardLine}>
              <TextInput
                editable={this.props.isSubmitted}
                style={[styles.inputText, isError ? styles.inputError : styles.inputDefault]}
                placeholder="Your Name"
              />
              <TextInput
                editable={this.props.isSubmitted}
                style={[styles.inputText, isError ? styles.inputError : styles.inputDefault]}
                placeholder="Your Surname"
              />
            </View>
            <TextInput
              editable={this.props.isSubmitted}
              style={[styles.inputText, isError ? styles.inputError : styles.inputDefault]}
              placeholder="Your Secret Question"
            />

            <TextInput
              editable={this.props.isSubmitted}
              style={[styles.inputText, isError ? styles.inputError : styles.inputDefault]}
              placeholder="Your Secret Answer"
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
