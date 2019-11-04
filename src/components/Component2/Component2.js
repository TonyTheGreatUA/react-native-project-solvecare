//@flow

import React from 'react';
import { View, Text, StyleSheet, TextInput, ActivityIndicator } from 'react-native';
import styles from './Component2.style';
import useComponent2 from './useComponent2';

const Component2 = () => {
  const {
    isSubmitClicked,
    isLoading,
    isError,
    creditCardNumber,
    firstName,
    lastName,
    cardType,
  } = useComponent2();

  {
    if (isLoading) {
      return (
        <View style={styles.card}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
    if (isError) {
      return (
        <View style={styles.card}>
          <Text style={styles.h1}>There is an error!</Text>
        </View>
      );
    }
    if (isSubmitClicked && !isError) {
      return (
        <View style={styles.card}>
          <Text style={styles.h1}>Card Info</Text>
          <Text>First Name : {firstName}</Text>
          <Text>Last Name : {lastName}</Text>
          <Text>Credit Card : {creditCardNumber.slice(-4)}</Text>
          <Text>Card Type : {cardType}</Text>
        </View>
      );
    }
    return <View />;
  }
};

export default Component2;
