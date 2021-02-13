import React from 'react';
import {
  StyleSheet,
  TextInput,
} from 'react-native';

const Input = ({ style }) => (
  <TextInput style={{ ...styles.input, ...style }} placeholder="0" />
);

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  headerTitle: {
    color: 'black',
    fontSize: 18,
  },
});

export default Input;
