import React, {Component} from 'react';
import {Text, View, Image, ScrollView, FlatList} from 'react-native';
import {ListItem} from 'react-native-elements';
export class Component4 extends React.Component {
  constructor() {
    super();

    this.state = {};
    this.getRemoteData();
  }

  getRemoteData = () => {
    const url = 'https://randomuser.me/api/?seed=1&page=1&results=10';
    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res.results,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  capFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  renderNativeItem = item => {
    const name =
      this.capFirstLetter(item.name.first) +
      ' ' +
      this.capFirstLetter(item.name.last);
    return (
      <ListItem
        roundAvatar
        title={name}
        avatar={{uri: item.picture.thumbnail}}
      />
    );
  };

  render() {
    return (
      <View>
        <FlatList
          data={this.state.data}
          renderItem={({item}) => this.renderNativeItem(item)}
        />
      </View>
    );
  }
}

export default Component4;
