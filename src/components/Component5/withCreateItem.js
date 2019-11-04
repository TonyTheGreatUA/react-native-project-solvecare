//@flow
import React, { Component } from 'react';
import Component5 from './Component5';
type Props = {};
type State = {
  title: string,
  weight: string,
  size: string,
  country: string,
  isEditable: boolean,
};
class withCreateItem extends Component<Props, State> {
  constructor() {
    super();
    this.state = {
      title: '',
      weight: '',
      size: '',
      country: '',
      isEditable: true,
    };
  }

  handleButtonClick = () => {
    this.setState({ isEditable: false });
  };

  handleTextInput = (name: string) => {
    return (val: string) => this.setState({ [name]: val });
  };

  render() {
    return (
      <Component5
        title={this.state.title}
        weight={this.state.weight}
        size={this.state.size}
        isEditable={this.state.isEditable}
        onButtonClick={this.handleButtonClick}
        handleTextInput={this.handleTextInput}
      />
    );
  }
}

export default withCreateItem;
