//@flow
import styles from './Component4.style';
import React, { Component } from 'react';
import { Text, View, FlatList, Image, StyleSheet } from 'react-native';

type User = {
  picture: { thumbnail: string },
  name: { first: string, last: string },
};

type Props = {
  data: User[],
  defaultLoadAmount: number,
};

const Component4 = ({ data, defaultLoadAmount }: Props) => {
  return (
    <View style={styles.view}>
      <FlatList
        data={data}
        initialNumToRender={defaultLoadAmount}
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
};

export default Component4;
