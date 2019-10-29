//@flow
import React, { Component } from 'react';
import Component6 from './Component6';

type Props = {};

type State = {
  data: any,
  textInput: string,
  isChecked: boolean,
  isAddedDisabled: boolean,
  isRemoveDisabled: boolean,
  isCheckedItem: boolean,
};
export class Component6Container extends Component<Props, State> {
  state = {
    data: [],
    textInput: '',
    isChecked: false,
    isAddedDisabled: true,
    isRemoveDisabled: true,
    isCheckedItem: false,
  };

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = async () => {
    const response = await fetch(`https://api.coinmarketcap.com/v1/ticker/?limit=10`);
    const result = await response.json();
    this.setState({ data: result });
  };

  handleTextInput = (key: string) => {
    return (val: string) => this.setState({ [key]: val });
  };

  onCheckBoxClick = () => {
    this.setState({
      isCheckedItem: !this.state.isChecked,
    });
  };

  onCreateItem = () => {
    let { data, textInput } = this.state;

    this.setState({
      data: [...data, { title: textInput }],
    });
  };
  onRemoveItem = () => {};

  onFocusTextInput = () => {
    this.setState({ isAddedDisabled: false });
  };
  render() {
    return (
      <Component6
        data={this.state.data}
        isCheckedItem={this.state.isCheckedItem}
        onCheckBoxClick={this.onCheckBoxClick}
        onFocusTextInput={this.onFocusTextInput}
        handleTextInput={this.handleTextInput}
        isAddedDisabled={this.state.isAddedDisabled}
        isRemoveDisabled={this.state.isRemoveDisabled}
        onCreateItem={this.onCreateItem}
        onRemoveItem={this.onRemoveItem}
        textInput={this.state.textInput}
      />
    );
  }
}

export default Component6Container;
