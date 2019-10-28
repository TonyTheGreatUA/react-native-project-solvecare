//@flow

import React, { Component } from 'react';
import { Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import styles from './Component1.style';

type Props = {
  handleCardInput: (name: string, val: string) => void,
  handleSubmit: () => void,
  isSubmitClicked: boolean,
  isEditable: boolean,
  isError: boolean,
  validateCreditCard: () => void,
};

type State = {};

const Component1 = ({
  isError,
  handleSubmit,
  handleCardInput,
  isEditable,
  isSubmitClicked,
}: Props) => {
  return (
    <ScrollView>
      <View style={styles.mainView}>
        <View>
          <TextInput
            editable={isEditable}
            style={[styles.inputText, isError == true ? styles.inputError : styles.inputDefault]}
            placeholder="0000 0000 0000 0000"
            onChangeText={val => handleCardInput('creditCardNumber', val)}
          />
          <View style={styles.cardLine}>
            <TextInput
              editable={isEditable}
              style={[styles.inputText, isError ? styles.inputError : styles.inputDefault]}
              placeholder="MM/YY"
              onChangeText={val => handleCardInput('expirationDate', val)}
            />
            <TextInput
              editable={isEditable}
              style={[styles.inputText, isError ? styles.inputError : styles.inputDefault]}
              placeholder="CVV/CVC"
              onChangeText={val => handleCardInput('cvv', val)}
            />
          </View>
          <View style={styles.cardLine}>
            <TextInput
              editable={isEditable}
              style={[styles.inputText, isError ? styles.inputError : styles.inputDefault]}
              placeholder="Your Name"
              onChangeText={val => handleCardInput('firstName', val)}
            />
            <TextInput
              editable={isEditable}
              style={[styles.inputText, isError ? styles.inputError : styles.inputDefault]}
              placeholder="Your Surname"
              onChangeText={val => handleCardInput('lastName', val)}
            />
          </View>
          <TextInput
            editable={isEditable}
            style={[styles.inputText, isError ? styles.inputError : styles.inputDefault]}
            placeholder="Your Secret Question"
            onChangeText={val => handleCardInput('secretQuestion', val)}
          />
          <TextInput
            editable={isEditable}
            style={[styles.inputText, isError ? styles.inputError : styles.inputDefault]}
            placeholder="Your Secret Answer"
            onChangeText={val => handleCardInput('secretAnswer', val)}
          />
          <TouchableOpacity
            disabled={isSubmitClicked}
            activeOpacity={0.2}
            style={styles.button}
            onPress={handleSubmit}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Component1;
