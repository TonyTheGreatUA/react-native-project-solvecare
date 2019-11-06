import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class TestComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.cardView}>
        <View style={styles.backArrowBar}>
          <TouchableOpacity>
            <Image source={require('../../assets/back.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <Text style={styles.resultText}>Your Result</Text>
          <View style={styles.cardItem}>
            <View style={styles.itemDescr}>
              <View>
                <Text style={styles.totalText}>Money Tree</Text>
              </View>
              <View>
                <Text style={styles.totalPrice}>250$</Text>
              </View>
              <View>
                <Text style={styles.itemTextDescr}>Amount: 4</Text>
              </View>
            </View>
            <View style={styles.itemImage}>
              <Text>Image</Text>
            </View>
          </View>
          <View style={styles.cardItem}>
            <View style={styles.itemDescr}>
              <View>
                <Text style={styles.totalText}>Rubber Tree</Text>
              </View>
              <View>
                <Text style={styles.totalPrice}>130$</Text>
              </View>
              <View>
                <Text style={styles.itemTextDescr}>Amount: 5</Text>
              </View>
            </View>
            <View style={styles.itemImage}>
              <Text>Image</Text>
            </View>
          </View>
          <View style={styles.cardItem}>
            <View style={styles.itemDescr}>
              <View>
                <Text style={styles.totalText}>Alocasia Polly</Text>
              </View>
              <View>
                <Text style={styles.totalPrice}>98$</Text>
              </View>
              <View>
                <Text style={styles.itemTextDescr}>Amount: 4</Text>
              </View>
            </View>
            <View style={styles.itemImage}>
              <Text>Image</Text>
            </View>
          </View>
        </View>
        <View style={styles.totalBar}>
          <View style={styles.totalAmount}>
            <View>
              <Text style={styles.totalText}>TOTAL:</Text>
            </View>
            <View>
              <Text style={styles.totalPrice}>550$</Text>
            </View>
          </View>
          <View style={styles.totalButtons}>
            <View style={styles.totalButtonDecline}>
              <TouchableOpacity>
                <Image source={require('../../assets/decline.png')} />
              </TouchableOpacity>
            </View>
            <View style={styles.totalButtonAccept}>
              <TouchableOpacity>
                <Image source={require('../../assets/done.png')} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#f5f7fb',
  },
  card: {
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f5f7fb',
    width: '98%',
    height: '70%',
  },
  cardItem: {
    backgroundColor: 'white',
    width: '95%',
    height: '30%',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonView: {
    paddingTop: 30,
    height: '10%',
    width: '100%',
    backgroundColor: 'blue',
  },
  backArrowBar: {
    paddingTop: '5%',
    height: '10%',
    width: '100%',
    paddingLeft: 10,
  },
  totalBar: {
    backgroundColor: '#FFFFFF',
    height: '15%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totalAmount: {
    width: '49%',
    alignItems: 'flex-start',
    paddingLeft: 20,
    justifyContent: 'center',
  },
  totalButtons: {
    flexDirection: 'row',
    width: '49%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  totalButtonAccept: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3ac3c9',
    borderRadius: 50,
    width: '37%',
    height: '70%',
  },
  totalButtonDecline: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fb4354',
    borderRadius: 50,
    width: '37%',
    height: '70%',
  },
  totalText: {
    color: '#6c6c6c',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'arial',
  },
  totalPrice: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#3ac3c9',
  },
  itemTextDescr: {
    color: '#929292',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'arial',
  },
  itemDescr: {
    width: '50%',
    paddingLeft: 20,
  },
  itemImage: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultText: {
    color: '#000000',
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'arial',
    paddingRight: 180,
  },
});

export default TestComponent;
