//@flow

import React, { Component } from 'react';
import { Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import styles from './Component1.style';

type Props = {
  handleCardInput: (name: string) => any,
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
            onChangeText={handleCardInput('creditCardNumber')}
          />
          <View style={styles.cardLine}>
            <TextInput
              editable={isEditable}
              style={[styles.inputText, isError ? styles.inputError : styles.inputDefault]}
              placeholder="MM/YY"
              onChangeText={handleCardInput('expirationDate')}
            />
            <TextInput
              editable={isEditable}
              style={[styles.inputText, isError ? styles.inputError : styles.inputDefault]}
              placeholder="CVV/CVC"
              onChangeText={handleCardInput('cvv')}
            />
          </View>
          <View style={styles.cardLine}>
            <TextInput
              editable={isEditable}
              style={[styles.inputText, isError ? styles.inputError : styles.inputDefault]}
              placeholder="Your Name"
              onChangeText={handleCardInput('firstName')}
            />
            <TextInput
              editable={isEditable}
              style={[styles.inputText, isError ? styles.inputError : styles.inputDefault]}
              placeholder="Your Surname"
              onChangeText={handleCardInput('lastName')}
            />
          </View>
          <TextInput
            editable={isEditable}
            style={[styles.inputText, isError ? styles.inputError : styles.inputDefault]}
            placeholder="Your Secret Question"
            onChangeText={handleCardInput('secretQuestion')}
          />
          <TextInput
            editable={isEditable}
            style={[styles.inputText, isError ? styles.inputError : styles.inputDefault]}
            placeholder="Your Secret Answer"
            onChangeText={handleCardInput('secretAnswer')}
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
