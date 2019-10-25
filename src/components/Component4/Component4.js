//@flow
import styles from './Component4.style';
import React, { Component } from 'react';
import { Text, View, FlatList, Image, StyleSheet } from 'react-native';

type User = {
  picture: { thumbnail: string },
  name: { first: string, last: string },
};
type Props = {};
type State = {
  data: User[],
  defaultLoadAmount: number,
};

export class Component4 extends React.Component<Props, State> {
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

  makeRemoteRequest = () => {
    const response = fetch(`https://randomuser.me/api/?results=50`);
    const result = response.json();
    this.setState({ data: result.results });
  };

  render() {
    console.log(this.state.data);
    return (
      <View style={styles.view}>
        <FlatList
          data={this.state.data}
          initialNumToRender={this.state.defaultLoadAmount}
          keyExtractor={(item, email: any) => email}
          windowSize={20}
          renderItem={({ item, index }) => (
            <View style={styles.item}>
              <View style={styles.itemRow}>
                <Image style={styles.avatar} source={{ uri: item.picture.thumbnail }} />
                <Text style={styles.index}>{index++}</Text>
                <Text style={styles.firstName}>{item.name.first}</Text>
                <Text style={styles.lastName}>{item.name.last}</Text>
              </View>
            </View>
          )}
        />
      </View>
    );
  }
}

export default Component4;
