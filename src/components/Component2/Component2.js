//@flow

import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, ActivityIndicator } from 'react-native';
import styles from './Component2.style';

type Props = {
  firstName: string,
  lastName: string,
  creditCardNumber: string,
  cardType: string,
  isFormShown: boolean,
  isLoading: boolean,
  isError: boolean,
};

class Component2 extends React.PureComponent<Props> {
  render() {
    const {
      cardType,
      firstName,
      lastName,
      creditCardNumber,
      isFormShown,
      isError,
      isLoading,
    } = this.props;

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
    if (isFormShown && !isError) {
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
}

export default Component2;
