//@flow
import React from 'react';
import { Text, StyleSheet, SafeAreaView, View, Button, TextInput, ScrollView } from 'react-native';
type Props = {
  creditCardNumber?: string,
  onCardChange: (cardType: string) => void,
};
type State = {
  cardType: string,
};
class Component3 extends React.PureComponent<Props, State> {
  state = {
    cardType: '',
  };

  componentDidMount = () => {
    const { creditCardNumber } = this.props;
    this.setState({
      cardType: creditCardNumber && +creditCardNumber.slice(12, 16) < 2000 ? 'Visa' : 'Master Card',
    });
  };

  componentDidUpdate = (prevProps: Props) => {
    const { creditCardNumber } = this.props;
    if (prevProps === this.props && !creditCardNumber) {
      return;
    }
    const cardType: string =
      creditCardNumber && +creditCardNumber.slice(12, 16) < 2000 ? 'Visa' : 'MasterCard';

    this.setState({ cardType });
    this.props.onCardChange(this.state.cardType);
  };

  render() {
    return <Text />;
  }
}

export default Component3;
