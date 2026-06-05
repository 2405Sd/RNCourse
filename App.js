import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.appcontainer}>
      <View style={styles.inputcontainer}>
        <TextInput style={styles.textinput} placeholder='Your course goals' />
        <Button title='Add Goal' />
      </View>
      <View style={styles.goalscontainer}>
        <Text>List of goals</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appcontainer: {
    flex:1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
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
  goalscontainer:{
    flex:10,
  },
}); 