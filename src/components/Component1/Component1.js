//@flow
import React from 'react';
import { Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import styles from './Component1.style';
import useComponent1 from './useComponent1';

const Component1 = () => {
  const { isSubmitClicked, isEditable, isError, handleSubmit, handleTextInput } = useComponent1();
  const hasError = isError ? styles.inputError : styles.inputDefault;
  return (
    <ScrollView>
      <View style={styles.mainView}>
        <View>
          <TextInput
            editable={isEditable}
            style={[styles.inputText, hasError]}
            placeholder="0000 0000 0000 0000"
            onChangeText={handleTextInput('creditCardNumber')}
          />
          <View style={styles.cardLine}>
            <TextInput
              editable={isEditable}
              style={[styles.inputText, hasError]}
              placeholder="MM/YY"
              onChangeText={handleTextInput('expirationDate')}
            />
            <TextInput
              editable={isEditable}
              style={[styles.inputText, hasError]}
              placeholder="CVV/CVC"
              onChangeText={handleTextInput('cvv')}
            />
          </View>
          <View style={styles.cardLine}>
            <TextInput
              editable={isEditable}
              style={[styles.inputText, hasError]}
              placeholder="Your Name"
              onChangeText={handleTextInput('firstName')}
            />
            <TextInput
              editable={isEditable}
              style={[styles.inputText, hasError]}
              placeholder="Your Surname"
              onChangeText={handleTextInput('lastName')}
            />
          </View>
          <TextInput
            editable={isEditable}
            style={[styles.inputText, hasError]}
            placeholder="Your Secret Question"
            onChangeText={handleTextInput('secretQuestion')}
          />
          <TextInput
            editable={isEditable}
            style={[styles.inputText, hasError]}
            placeholder="Your Secret Answer"
            onChangeText={handleTextInput('secretAnswer')}
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
