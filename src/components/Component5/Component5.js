//@flow
import styles from './Component5.style';
import React from 'react';
import { Text, View, Button, TextInput, Picker, StyleSheet } from 'react-native';

type Props = {
  onCreate: () => void,
  onEdit: () => void,
  onFocusChange: () => void,
  handleTextInput: (name: string) => any,
  createStatus: boolean,
  editStatus: boolean,
  editable: boolean,
  isSubmitted: boolean,
  isFocused: boolean,
  country: string | number,
  title: string,
  weight: string,
  size: string,
  formErrors: {
    title: boolean,
    weight: boolean,
    size: boolean,
  },
};
const Component5 = ({
  handleTextInput,
  onFocusChange,
  onCreate,
  onEdit,
  createStatus,
  editStatus,
  editable,
  formErrors,
  isSubmitted,
  isFocused,
  country,
  title,
  weight,
  size,
}: Props) => {
  return (
    <View style={styles.view}>
      <View style={styles.buttons}>
        <Button onPress={onCreate} disabled={createStatus} title="Create Item" />
        <Button onPress={onEdit} disabled={editStatus} title="Edit Item" />
      </View>
      <View style={styles.inputSection}>
        <TextInput
          editable={editable}
          onFocus={onFocusChange}
          style={[
            styles.inputText,
            !formErrors.title && isSubmitted
              ? styles.inputError
              : formErrors.title && !isSubmitted
              ? ''
              : formErrors.title && isSubmitted && isFocused
              ? styles.inputDefault
              : '',
          ]}
          placeholder="Title"
          onChangeText={handleTextInput('title')}
        />
        <TextInput
          editable={editable}
          onFocus={onFocusChange}
          style={[
            styles.inputText,
            !formErrors.weight && isSubmitted
              ? styles.inputError
              : formErrors.weight && !isSubmitted
              ? ''
              : formErrors.weight && isSubmitted && isFocused
              ? styles.inputDefault
              : '',
          ]}
          placeholder="Weight"
          onChangeText={handleTextInput('weight')}
        />
        <TextInput
          editable={editable}
          onFocus={onFocusChange}
          style={[
            styles.inputText,
            !formErrors.size && isSubmitted
              ? styles.inputError
              : formErrors.size && !isSubmitted
              ? ''
              : formErrors.size && isSubmitted && isFocused
              ? styles.inputDefault
              : '',
          ]}
          placeholder="Size"
          onChangeText={handleTextInput('size')}
        />
        <Text style={styles.text}>Country Of A Production</Text>
        <Picker
          style={styles.picker}
          selectedValue={country}
          enabled={editable}
          onValueChange={(itemValue, itemIndex) => /*this.setState({ country: itemValue })*/ ({})}
        >
          <Picker.Item
            /* Enabled works only in Android enabled={this.state.editable}*/ label="UA"
            value="ua"
          />
          <Picker.Item
            /* Enabled works only in Android enabled={this.state.editable}*/ label="CN"
            value="cn"
          />
        </Picker>
        <Text style={{ textAlign: 'center' }}>
          {JSON.stringify(
            `Title : ${title} Weight : ${weight} Size : ${size} Country : ${country}`,
          )}
        </Text>
      </View>
    </View>
  );
};

export default Component5;
