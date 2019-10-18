import React, {Component} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import Component1 from './components/Component1/Component1';
import Component2 from './components/Component2/Component2';
import Component4 from './components/Component4';
import Component5 from './components/Component5';
import {applyMiddleware, createStore} from 'redux';
import rootReducer from './store/reducers';
import {Provider} from 'react-redux';
import Component1Container from './components/Component1/Component1Container';
import Component2Container from './components/Component2/Component2Container';
const store = createStore(rootReducer);
type Props = {};

type State = {};
class Component0 extends React.Component<Props, State> {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.homeScreen}>
          <Component1Container />
          <Component2Container />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    backgroundColor: '#3498db',
  },
});
export default Component0;
