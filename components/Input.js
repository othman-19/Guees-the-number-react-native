/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  StyleSheet,
  TextInput,
} from 'react-native';

const Input = props => {
  const { style } = props;
  return (
    <TextInput
      {...props}
      style={{ ...styles.input, ...style }}
      placeholder="0"
    />
  );
};

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
