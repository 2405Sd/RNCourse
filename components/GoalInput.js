import { StyleSheet, View, Button, TextInput } from 'react-native';
import { useState } from 'react';

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    if (enteredGoalText.trim().length === 0) {
      return;
    }

    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }

  return (
    <View style={styles.inputcontainer}>
      <TextInput
        style={styles.textinput}
        placeholder='Your course goals'
        value={enteredGoalText}
        onChangeText={goalInputHandler}
      />
      <Button
        title='Add Goal'
        onPress={addGoalHandler}
      />
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputcontainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  textinput: {
    borderWidth: 1,
    borderColor: 'black',
    width: '70%',
    marginRight: 10,
    padding: 10,
  },
});