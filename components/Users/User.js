import React, { useState, useEffect } from 'react'
import { Text, View, FlatList, StyleSheet, Button } from 'react-native'
import { useSelector } from 'react-redux';
import Login from './Login';

export default function User() {
  const [users, setUsers] = useState([])
  const [buttonColor, setButtonColor] = useState(true)
  const user = useSelector(state => state.user.data)
  useEffect(() => {
    console.log(user)
  }, [buttonColor])

  

  return (
    <View>
      <Text>Current User: {user && user.email}</Text>
      <Login />
      <Button 
        title="Update State" 
        style={styles.button}
        color={buttonColor? "blue": "red"}
        onPress={() => setButtonColor(!buttonColor)}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'grey',

  },
  list: {
    backgroundColor: 'yellow',
    flexGrow: 0,
  }
})
