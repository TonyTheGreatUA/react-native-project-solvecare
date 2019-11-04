import styles from './Component5.style';
import React from 'react';
import { Text, View, Button, TextInput, Picker, StyleSheet } from 'react-native';

type Props = {
  handleTextInput: (name: string) => any,
  country: string | number,
  title: string,
  weight: string,
  size: string,
};
const Component5 = ({ country, title, weight, size, handleTextInput }: Props) => {
  return (
    <View style={styles.view}>
      <View style={styles.inputSection}>
        <TextInput placeholder="Title" onChangeText={handleTextInput('title')} />
        <TextInput placeholder="Weight" onChangeText={handleTextInput('weight')} />
        <TextInput placeholder="Size" onChangeText={handleTextInput('size')} />
      </View>
    </View>
  );
};

export default Component5;
