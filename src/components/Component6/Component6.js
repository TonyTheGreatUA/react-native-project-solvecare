//@flow
import React from 'react';
import {
  Text,
  View,
  FlatList,
  Button,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import styles from './Component6.style';
import useComponent6 from '../../hooks/useComponent6';

const Component6 = () => {
  const {
    dataSource,
    isLoading,
    FlatListItemSeparator,
    renderItem,
    handleTextInput,
    onFocusTextInput,
    textInput,
    isAddedDisabled,
    isRemoveDisabled,
    onCreateItem,
    onRemoveItem,
  } = useComponent6();

  if (isLoading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add / Remove Cryptocurrencies</Text>
      <FlatList
        data={dataSource}
        ItemSeparatorComponent={FlatListItemSeparator}
        renderItem={item => renderItem(item)}
        keyExtractor={(item, id) => `${id}`}
      />
      <View>
        <TextInput
          onFocus={onFocusTextInput}
          onChangeText={handleTextInput('textInput')}
          clearTextOnFocus={true}
          clearButtonMode="always"
          value={textInput}
          style={styles.inputText}
          placeholder="Input your value here"
        />
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} disabled={isAddedDisabled} onPress={onCreateItem}>
          <Text>Add Item</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} disabled={isRemoveDisabled} onPress={onRemoveItem}>
          <Text>Remove Item</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Component6;
