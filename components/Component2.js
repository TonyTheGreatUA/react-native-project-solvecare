import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Component2 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <View style={StyleSheet.card}></View>;
  }
}
const styles = StyleSheet.create({
  card: {},
});
export default Component2;
