import React, {Component} from 'react';
import {Text, View, Button, TextInput, Picker, StyleSheet} from 'react-native';

export class Component5 extends Component {
  constructor() {
    super();
    this.state = {
      country: '',
      editStatus: true,
      createStatus: false,
      editable: true,
      isSubmitted: false,
      title: '',
      weight: '',
      size: '',
      formErrors: {
        title: false,
        weight: false,
        size: false,
      },
    };
  }
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

  showItem = () => {
    var item = JSON.stringify(
      `Title : ${this.state.title} Weight : ${this.state.weight} Size : ${this.state.size} Country : ${this.state.country}`,
    );
    isSubmitted ? <Text>{item}</Text> : '';
  };

  onValidation = (name: string, value: string) => {
    let formErrors = {...this.state.formErrors};

    switch (name) {
      case 'title':
        formErrors.firstName = value.length < 1 ? false : true;
        break;
      case 'weight':
        formErrors.lastName = value.length < 1 ? false : true;
        break;
      case 'size':
        formErrors.secretQuestion = value.length < 1 ? false : true;
        break;

      default:
        break;
    }
    this.setState({formErrors, [name]: value});
  };

  handleChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const {name, value} = e.currentTarget;
    this.setState({[name]: value}, () => {
      this.onValidation(name, value);
    });
  };

  render() {
    const {formErrors, isSubmitted} = this.state;
    return (
      <View style={styles.view}>
        <View style={styles.buttons}>
          <Button
            onPress={this.onCreate}
            disabled={this.state.createStatus}
            title="Create Item"></Button>
          <Button
            onPress={this.onEdit}
            disabled={this.state.editStatus}
            title="Edit Item"></Button>
        </View>
        <View style={styles.inputSection}>
          <TextInput
            editable={this.state.editable}
            style={styles.inputText}
            type="text"
            placeholder="Title"
            onChangeText={title => this.setState({title})}
          />
          <TextInput
            editable={this.state.editable}
            style={styles.inputText}
            type="text"
            placeholder="Weight"
            onChangeText={weight => this.setState({weight})}
          />
          <TextInput
            editable={this.state.editable}
            style={styles.inputText}
            type="text"
            placeholder="Size"
            onChangeText={size => this.setState({size})}
          />
          <Text style={styles.text}>Country Of A Production</Text>
          <Picker
            style={styles.picker}
            selectedValue={this.state.country}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({country: itemValue})
            }>
            <Picker.Item label="UA" value="ua" />
            <Picker.Item label="CN" value="cn" />
          </Picker>
          <Text>{this.showItem}</Text>
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
