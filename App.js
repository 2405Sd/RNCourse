import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.appcontainer}>
      <View style={styles.inputcontainer}>
        <TextInput placeholder='Your course goals' />
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
  texyinput: {
    borderWidth: 1,
    borderColor: 'black',
  },
}); 