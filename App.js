import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
      <View styles={styles.appContainer}>
        <View style = {styles.inputContainer}>
          <Text style={styles.helloInput}> Dzień Dobry, </Text>
          <Text style={styles.describeInput}> Wprowadź numer sali, do której chcesz się dostać </Text>
          <TextInput style={styles.textInput} placeholder='Wprowadź numer sali, do której chcesz się dostać'/>

        </View>
      </View>

  );
}

const styles = StyleSheet.create({
 appContainer: {
  padding: 50,
 },
 inputContainer: {
  flexDirection: 'column',
  justifyContent: 'space-between'
 },
 textInput: {  
  placeholder: '',
  borderWidth: 0,
  corderColor: '#cccccc',
  width: '85%',
  height: '75%',
  marginTop: -15,
  marginLeft: 25,
  marginRight: 25,
  fontSize: 45

 },
 helloInput: {  
  placeholder: '',
  borderWidth: 0,
  corderColor: '#cccccc',
  width: '85%',
  height: '6%',
  marginTop: 65,
  marginLeft: 6,
  fontSize: 28,
 },
 describeInput: {  
  placeholder: '',
  borderWidth: 0,
  corderColor: '#cccccc',
  width: '85%',
  height: '6%',
  marginTop: 2,
  marginLeft: 6,
  marginBottom: 0,
  fontSize: 14,
 }
});
