//@flow
import React, { Component } from 'react';
import Component4 from './Component4';

type User = {
  picture: { thumbnail: string },
  name: { first: string, last: string },
};
type Props = {};
type State = {
  data: User[],
  defaultLoadAmount: number,
};

export class Component4Container extends Component<Props, State> {
  state = {
    data: [],
    defaultLoadAmount: 10,
  };

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const response = fetch(`https://randomuser.me/api/?results=50`);
    const result = response.json();
    this.setState({ data: result.results });
  };

  render() {
    return <Component4 data={this.state.data} defaultLoadAmount={this.state.defaultLoadAmount} />;
  }
}

export default Component4Container;
