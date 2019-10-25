//@flow
import styles from './Component5.style';
import React, { Component } from 'react';
import { Text, View, Button, TextInput, Picker, StyleSheet } from 'react-native';
import { number } from 'prop-types';
type Props = {};
type State = {
  isFocused: boolean,
  isSubmitted: boolean,
  createStatus: boolean,
  editable: boolean,
  editStatus: boolean,
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
export class Component5 extends Component<Props, State> {
  state = {
    country: '',
    editStatus: true,
    createStatus: false,
    editable: true,
    isSubmitted: false,
    isFocused: false,
    title: '',
    weight: '',
    size: '',
    formErrors: {
      title: false,
      weight: false,
      size: false,
    },
  };

  onFocusChange = () => {
    this.setState({ isFocused: true });
  };
  onCreate = () => {
    this.setState({
      isSubmitted: true,
      editStatus: false,
      createStatus: true,
      editable: false,
    });
  };
  onEdit = () => {
    this.setState({
      editStatus: true,
      editable: true,
      createStatus: false,
    });
  };

  onValidation = (name: string, value: string) => {
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case 'title':
        formErrors.title = value.length < 1 ? false : true;
        break;
      case 'weight':
        formErrors.weight = value.length < 1 ? false : true;
        break;
      case 'size':
        formErrors.size = value.length < 1 ? false : true;
        break;

      default:
        break;
    }
    this.setState({ formErrors, [name]: value });
  };

  handleChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value }, () => {
      this.onValidation(name, value);
    });
  };

  render() {
    const { formErrors, isSubmitted, isFocused } = this.state;
    return (
      <View style={styles.view}>
        <View style={styles.buttons}>
          <Button onPress={this.onCreate} disabled={this.state.createStatus} title="Create Item" />
          <Button onPress={this.onEdit} disabled={this.state.editStatus} title="Edit Item" />
        </View>
        <View style={styles.inputSection}>
          <TextInput
            editable={this.state.editable}
            onFocus={this.onFocusChange}
            style={[
              styles.inputText,
              {
                borderBottomColor:
                  !formErrors.title && isSubmitted
                    ? styles.inputError
                    : formErrors.title && !isSubmitted
                    ? ''
                    : formErrors.title && isSubmitted && isFocused
                    ? styles.inputDefault
                    : '',
              },
            ]}
            placeholder="Title"
            onChangeText={title => this.setState({ title })}
          />
          <TextInput
            editable={this.state.editable}
            onFocus={this.onFocusChange}
            style={[
              styles.inputText,
              {
                borderBottomColor:
                  !formErrors.weight && isSubmitted
                    ? styles.inputError
                    : formErrors.weight && !isSubmitted
                    ? ''
                    : formErrors.weight && isSubmitted && isFocused
                    ? styles.inputDefault
                    : '',
              },
            ]}
            placeholder="Weight"
            onChangeText={weight => this.setState({ weight })}
          />
          <TextInput
            editable={this.state.editable}
            onFocus={this.onFocusChange}
            style={[
              styles.inputText,
              {
                borderBottomColor:
                  !formErrors.size && isSubmitted
                    ? styles.inputError
                    : formErrors.size && !isSubmitted
                    ? ''
                    : formErrors.size && isSubmitted && isFocused
                    ? styles.inputDefault
                    : '',
              },
            ]}
            placeholder="Size"
            onChangeText={size => this.setState({ size })}
          />
          <Text style={styles.text}>Country Of A Production</Text>
          <Picker
            style={styles.picker}
            selectedValue={this.state.country}
            enabled={this.state.editable}
            onValueChange={(itemValue, itemIndex) => this.setState({ country: itemValue })}
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
              `Title : ${this.state.title} Weight : ${this.state.weight} Size : ${
                this.state.size
              } Country : ${this.state.country}`,
            )}
          </Text>
        </View>
      </View>
    );
  }
}

export default Component5;
