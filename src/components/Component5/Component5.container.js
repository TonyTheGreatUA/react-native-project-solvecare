//@flow
import React, { Component } from 'react';
import Component5 from './Component5';

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
export class Component5Container extends Component<Props, State> {
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
  handleTextInput = (name: string) => {
    return (val: string) => this.setState({ [name]: val });
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
        formErrors.title = value.length < 3 ? true : false;
        break;
      case 'weight':
        formErrors.weight = value.length < 1 ? true : false;
        break;
      case 'size':
        formErrors.size = value.length < 1 ? true : false;
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
    return (
      <Component5
        handleTextInput={this.handleTextInput}
        onCreate={this.onCreate}
        onEdit={this.onEdit}
        createStatus={this.state.createStatus}
        editStatus={this.state.editStatus}
        editable={this.state.editable}
        isSubmitted={this.state.isSubmitted}
        isFocused={this.state.isFocused}
        formErrors={this.state.formErrors}
        onFocusChange={this.onFocusChange}
        country={this.state.country}
        size={this.state.size}
        title={this.state.title}
        weight={this.state.weight}
      />
    );
  }
}

export default Component5Container;
