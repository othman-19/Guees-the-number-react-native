import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';

const GameOverScreen = ({ rounds, userNumber, setNewGameHandler }) => (
  <View style={styles.screen}>
    <Card style={styles.summaryContainer}>
      <Text>
        Game Over!
      </Text>
      <NumberContainer>
        Number was:
        {' '}
        {userNumber}
      </NumberContainer>
      <Text style={styles.title}>
        Rounds:
        {' '}
        {rounds}
      </Text>
    </Card>
    <View style={styles.button}>
      <Button title="NEW GAME" onPress={setNewGameHandler} />
    </View>
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
  summaryContainer: {
    marginTop: 20,
    alignItems: 'center',
    padding: 20,
  },
  button: {
    marginVertical: 90,
    width: '40%',
  },
});

export default GameOverScreen;
