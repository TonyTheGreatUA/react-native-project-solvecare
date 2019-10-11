import React, {Component} from 'react';
import {Text, View, FlatList, StyleSheet} from 'react-native';
import {ListItem} from 'react-native-elements';
export class Component4 extends React.Component {
  state = {
    data: [],
  };

  componentWillMount = () => {
    this.fetchData();
  };

  fetchData = async () => {
    const response = await fetch('https://randomuser.me/api?results=50');
    const json = await response.json();
    this.setState({data: json.results});
  };

  render() {
    return (
      <View>
        <FlatList
          data={this.state.data}
          keyExtractor={(x, i) => i}
          renderItem={({item}) => (
            <ListItem
              roundAvatar
              avatar={{uri: item.picture.thumbnail}}
              title={`${item.name.first} ${item.name.last}`}
            />
          )}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({});
export default Component4;
