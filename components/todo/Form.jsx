import React, {useState} from 'react'
import { StyleSheet, View, Text, TextInput, Button } from 'react-native'

const Form = ({submitHandler}) => {
  
  const [text, setText] = useState('');

  const changeHandler = (val) => {
    setText(val);
  };
  
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="New Todo ..."
        onChangeText={changeHandler}
      />
      <Button
        onPress={() => {submitHandler(text)}}
        title='Add Todo'
        color='coral'
      />
    </View>
  )
}

export default Form

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  }
})
