import React, { useState, useEffect } from 'react'
import { Text, View, FlatList, StyleSheet, Button } from 'react-native'

const getUsers = async () => {
  const response = await fetch('http://172.19.224.1:3000/users/')
  const json = await response.json()
  return json
}

export default function User() {
  const [users, setUsers] = useState([])
  const [buttonColor, setButtonColor] = useState(true)
  useEffect(() => {
    getUsers().then(res => setUsers(res))
  }, [buttonColor])

  

  return (
    <View>
      <Text>Users</Text>
      <FlatList
        data={users}
        renderItem={({ item }) => <Text style={styles.item}>{item.email}</Text>}
        style={styles.list}
      />
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
