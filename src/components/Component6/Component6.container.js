//@flow
import React, { Component } from 'react';
import Component6 from './Component6';
import styles from './Component6.style';
import { Text, TouchableOpacity, View } from 'react-native';

type Props = {};

type State = {
  isLoading: boolean,
  dataSource: any,
  textInput: string,
  isAddedDisabled: boolean,
  isRemoveDisabled: boolean,
};

export class Component6Container extends Component<Props, State> {
  state = {
    isLoading: false,
    dataSource: [],
    textInput: '',
    isAddedDisabled: true,
    isRemoveDisabled: true,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    this.setState({ isLoading: true });

    fetch('https://api.coinmarketcap.com/v1/ticker/?limit=10')
      .then(response => response.json())
      .then(responseJson => {
        responseJson = responseJson.map(item => {
          item.isSelect = false;
          item.selectedClass = styles.list;

          return item;
        });

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        });
      })
      .catch(error => {
        this.setState({ isLoading: false });
      });
  };

  FlatListItemSeparator = () => <View style={styles.line} />;

  selectItem = (data: any) => {
    data.item.isSelect = !data.item.isSelect;
    data.item.selectedClass = data.item.isSelect ? styles.selected : styles.list;

    const index = this.state.dataSource.findIndex(item => data.item.id === item.id);

    this.state.dataSource[index] = data.item;

    this.setState({
      dataSource: this.state.dataSource,
      isRemoveDisabled: false,
    });
  };

  onCreateItem = () => {
    let { dataSource, textInput } = this.state;

    this.setState({
      dataSource: [...dataSource, { title: textInput }],
    });
  };

  onRemoveItem = () => {
    let { dataSource } = this.state;
    const newData = dataSource.filter(item => !item.isSelect);

    this.setState({
      dataSource: newData,
    });
  };

  onFocusTextInput = () => {
    this.setState({ isAddedDisabled: false });
  };

  renderItem = (data: any) => (
    <TouchableOpacity
      style={[styles.list, data.item.selectedClass]}
      onPress={() => this.selectItem(data)}
    >
      <Text style={styles.lightText}>
        {data.item.name}
        {data.item.title}
      </Text>
    </TouchableOpacity>
  );

  handleTextInput = (key: string) => {
    return (val: string) => this.setState({ [key]: val });
  };

  render() {
    return (
      <Component6
        dataSource={this.state.dataSource}
        isLoading={this.state.isLoading}
        onFocusTextInput={this.onFocusTextInput}
        handleTextInput={this.handleTextInput}
        isAddedDisabled={this.state.isAddedDisabled}
        isRemoveDisabled={this.state.isRemoveDisabled}
        onCreateItem={this.onCreateItem}
        onRemoveItem={this.onRemoveItem}
        textInput={this.state.textInput}
        selectItem={this.selectItem}
        FlatListItemSeparator={this.FlatListItemSeparator}
        renderItem={this.renderItem}
      />
    );
  }
}

export default Component6Container;
