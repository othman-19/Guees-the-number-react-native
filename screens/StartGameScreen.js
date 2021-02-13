import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Card from '../components/Card';
import Input from '../components/Input';
import Colors from '../constants/colors';

const StartGameScreen = () => (
  <View style={styles.screen}>
    <Text style={styles.title}>
      Start a New Game!
    </Text>
    <Card style={styles.inputContainer}>
      <Text>Select a Number</Text>
      <Input style={styles.input} />
      <View style={styles.buttonContainer}>
        <View style={styles.button}><Button title="Reset" color={Colors.accent} /></View>
        <View style={styles.button}><Button title="Confirm" color={Colors.primary} /></View>
      </View>
    </Card>

  </View>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    padding: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  button: {
    width: '40%',
  },
  input: {
    width: '25%',
    textAlign: 'center',
    fontSize: 25,
    padding: 1.5,
  },
});

export default StartGameScreen;
