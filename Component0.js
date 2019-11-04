import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './src/store/reducers';
import { Provider } from 'react-redux';
import Component1 from './src/components/Component1';
import Component2 from './src/components/Component2';
import Component6 from './src/components/Component6/Component6';
import Component5 from './src/components/Component5';

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
type Props = {};

type State = {};
class Component0 extends React.Component<Props, State> {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.homeScreen}>
          <Component5 />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
  },
});
export default Component0;
