import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.appcontainer}>
      <View style={styles.inputcontainer}>
        <TextInput style={styles.textinput} placeholder='Your course goals' />
        <Button title='Add Goal' />
      </View>
      <View>
        <Text>List of goals</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appcontainer: {
    padding: 50,
  },
  inputcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  textinput: {
    borderWidth: 1,
    borderColor: 'black',
    width: '80%',
    marginRight: 10,
    padding: 10,
  },
}); 