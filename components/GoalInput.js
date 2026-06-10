import { StyleSheet, View, Button, TextInput, Modal, Image } from 'react-native';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }

  return (
    <>
    <StatusBar style='light' />
   <Modal visible={props.visible} animationType='slide'>
     <View style={styles.inputcontainer}>
      <Image style={styles.image} source={require ('../assets/Images/goal.png' )} 
      style={{
        width: 100,
        height: 100,
        tintColor: 'white',
        marginBottom: 20,
  }}

  
 />
      <TextInput
        style={styles.textinput}
        placeholder='Your course goals'
        value={enteredGoalText}
        onChangeText={goalInputHandler}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title='Add Goal' onPress={addGoalHandler} color={"#5e0acc"} />
          </View>
          <View style={styles.button}> 
            <Button title='Cancel' onPress={props.onCancel} color={"#f31282"} />

          </View>
        
        
        
      </View>
    
    </View>
   </Modal>
    </>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    padding: 16,
   
    backgroundColor: '#311b6b',
  },
  image:{
    width: 100,
    height: 100,
    margin: 20,
  },
  textinput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 6,
    width: '100%',

    padding: 10,
  },
  buttonContainer:{
    marginTop: 16,
    flexDirection: 'row',
  
  },
button: {
  width: 100,
  marginHorizontal: 8,
},
});