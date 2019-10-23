import React, { Component } from 'react';
import { Text, View, Button, TextInput, Picker, StyleSheet } from 'react-native';

const callFromServer = data => {
  return new Promise(resolve => {
    setTimeout(() => resolve(data), 2000);
  });
};

export class Component5 extends Component {
  constructor() {
    super();
    this.state = {
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
      output: null,
    };
  }
  onFocusChange = () => {
    this.setState({ isFocused: true });
  };
  onCreate = () => {
    const data = this.state.data;
    callFromServer(data).then(response => {
      this.setState({
        isSubmitted: true,
        editStatus: false,
        createStatus: true,
        editable: false,
        output: response,
      });
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
                    ? 'red'
                    : formErrors.title && !isSubmitted
                    ? ''
                    : formErrors.title && isSubmitted && isFocused
                    ? 'grey'
                    : '',
              },
            ]}
            type="text"
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
                    ? 'red'
                    : formErrors.weight && !isSubmitted
                    ? ''
                    : formErrors.weight && isSubmitted && isFocused
                    ? 'grey'
                    : '',
              },
            ]}
            type="text"
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
                    ? 'red'
                    : formErrors.size && !isSubmitted
                    ? ''
                    : formErrors.size && isSubmitted && isFocused
                    ? 'grey'
                    : '',
              },
            ]}
            type="text"
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
            <Picker.Item enabled={this.state.editable} label="UA" value="ua" />
            <Picker.Item enabled={this.state.editable} label="CN" value="cn" />
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
const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: 'white',
  },
  inputSection: {
    flex: 1,
    paddingTop: 5,
  },
  buttons: {
    paddingTop: 20,
    paddingBottom: 5,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text: {
    fontSize: 25,
    textAlign: 'center',
  },
  picker: {
    alignSelf: 'stretch',
  },
  inputText: {
    alignSelf: 'stretch',
    fontSize: 18,
    height: 40,
    marginBottom: 30,
    color: 'black',
    borderBottomColor: '#f8f8f8',
    borderBottomWidth: 1,
    textAlign: 'center',
  },
});
export default Component5;
