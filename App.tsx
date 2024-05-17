/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  const [goals, setGoals] = useState<string[]>([]);
  const [goalsText, setGoalsText] = useState('');
  console.log(goals)

  const goalInputHandler = (text: any) => setGoalsText(text);

  const addGoalhandler = () => {
    setGoals(currGoals => [...currGoals, goalsText]);

  }

  const onDeleteHandler = (itemIndex: number) => {
    setGoals(currGoals => currGoals.filter((goal, index) => index !== itemIndex))
  }

  return (
    <SafeAreaView>
      <View style={styles.appContainer}>
        <Text>Test project</Text>
        <View style={styles.buttonContainer}>
          <TextInput
            placeholder="Add your goal"
            style={styles.textInput}
            onChangeText={goalInputHandler}
          />
          <Button title="Add" onPress={addGoalhandler} />
        </View>
        <View>
          {goals.map((goal, index) => <View key={index} style={styles.goalItem}>
            <Text>{goal}</Text>
            <Button title='Delete' onPress={() => onDeleteHandler(index)} />
          </View>)}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#4f4f4f',
    borderRadius: 14,
    width: '80%',
    padding: 10
  },
  goalItem: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#4F4F4F'
  }
});

export default App;
