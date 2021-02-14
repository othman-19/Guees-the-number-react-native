import React, { useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';
import Colors from '../constants/colors';

const generateRandomNumber = (min, max, exclude) => {
  const Min = Math.ceil(min);
  const Max = Math.floor(max);
  const randomNum = Math.floor(Math.random() * (Max - Min)) + Min;
  if (randomNum === exclude) {
    return generateRandomNumber(min, max, exclude);
  }
  return randomNum;
};

const GameScreen = ({ userChoice }) => {
  const [currentGess, setCurrentGuess] = useState(
    generateRandomNumber(1, 100, userChoice),
  );
  const nextGuessHandler = direction => {

  }
  return (
    <View style={styles.screen}>
      <Text>
        Component Guess.
      </Text>
      <NumberContainer>
        {currentGess}
      </NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button
          title="LOWER"
          onPress={() => { nextGuessHandler('lower'); }}
        />
        <Button
          title="GREATER"
          onPress={() => { nextGuessHandler('greater'); }}
        />
      </Card>
    </View>
  );
};

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
    justifyContent: 'space-around',
    width: 300,
    maxWidth: '80%',
    marginTop: 20,
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
  summaryContainer: {
    marginTop: 20,
    alignItems: 'center',
    padding: 20,
  },
});

export default GameScreen;
