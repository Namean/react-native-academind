import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View name="appContainer" style={styles.appContainer}>
      <View name="inputContainer" style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your couse goal!' />
        <Button name="addGoal" title="Add Goal" />
      </View>
      <View name="list of goals">
        <Text>List of goals...</Text> 
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textInput: {
    // takes up 80% of the available width
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '80%',
    marginRight: 8,
    padding: 8
  }
});
