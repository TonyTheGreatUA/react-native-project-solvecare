import styles from './Component5.style';
import React, { useState } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { Text, View, Button, TextInput, Picker, StyleSheet, TouchableOpacity } from 'react-native';
import WithEditItem from './withEditItem';
import WithCreateItem from './withCreateItem';
import { updateItem } from '../../store/itemCardInfo/actions';

type Props = {};

const Component5 = ({ itemInfo, updateItem, isCreated }: Props) => {
  const createStyle = !isItemCreated ? [styles.buttonIsDisabled, styles.buttons] : styles.buttons;
  const updateStyle =
    isItemCreated || isCreated === false
      ? [styles.buttonIsDisabled, styles.buttons]
      : styles.buttons;

  const [isItemCreated, setIsItemCreated] = useState(false);

  return (
    <View>
      <View>
        {isItemCreated ? (
          <WithEditItem isCreated={isCreated} itemInfo={itemInfo} updateItem={updateItem} />
        ) : (
          <WithCreateItem isCreated={isCreated} itemInfo={itemInfo} updateItem={updateItem} />
        )}
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity
          disabled={!isItemCreated}
          style={createStyle || isCreated === true}
          onPress={() => {
            updateItem('', '', '', 'UA', false);
            setIsItemCreated(false);
          }}
        >
          <Text>Create Item</Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={isItemCreated || isCreated === false}
          style={updateStyle}
          onPress={() => {
            setIsItemCreated(true);
          }}
        >
          <Text>Edit Item</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    itemInfo: state.itemInfo,
    isCreated: state.itemInfo.isCreated,
  };
};
const mapDispatchToProps = {
  updateItem,
};
const Component5Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component5);

export default Component5Container;
