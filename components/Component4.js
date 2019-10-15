import React, {Component} from 'react';
import {Text, View, FlatList, Image, StyleSheet} from 'react-native';

export class Component4 extends React.Component {
  constructor() {
    super();

    this.state = {
      data: [],
      defaultLoadAmount: 10,
    };
  }
  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = count => {
    fetch(`https://randomuser.me/api/?results=50`)
      .then(response => response.json())
      .then(response => {
        let data = [];
        response.results.forEach((item, index) => {
          data.push({
            index: ++index,
            firstName: item.name.first,
            lastName: item.name.last,
            avatar: item.picture.thumbnail,
          });
        });
        this.setState({data: data.slice()});
      })
      .catch(err => console.log(err));
  };

  render() {
    console.log(this.state.data);
    return (
      <View style={styles.view}>
        <FlatList
          data={this.state.data}
          initialNumToRender={this.state.defaultAmount}
          keyExtractor={(item, index) => index}
          windowSize={20}
          renderItem={({item}) => (
            <View style={styles.item}>
              <View style={styles.itemRow}>
                <Image style={styles.avatar} source={{uri: item.avatar}} />
                <Text style={styles.index}>{item.index}</Text>
                <Text style={styles.firstName}>{item.firstName}</Text>
                <Text style={styles.lastName}>{item.lastName}</Text>
              </View>
            </View>
          )}
          keyExtractor={item => item.index}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  view: {
    flex: 1,
    textAlign: 'center',
    paddingTop: 50,
  },
  item: {
    flex: 1,
    width: '100%',
    height: 100,
  },
  itemRow: {
    flexDirection: 'row',
    margin: 5,
  },
  index: {
    paddingLeft: 30,
    fontSize: 22,
    paddingRight: 15,
    color: 'white',
  },
  firstName: {
    fontSize: 22,
    color: 'white',
  },
  lastName: {
    paddingLeft: 3,
    fontSize: 22,
    color: 'white',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'white',
  },
});
export default Component4;
