import React, { useState, useEffect } from 'react'
import { Text, View, FlatList, StyleSheet } from 'react-native'

const getUsers = async () => {
  const response = await fetch('http://192.168.1.218:3000/')
  const json = await response.json()
  return json
}

export default function User() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    getUsers().then(res => setUsers(res))
  }, [])

  return (
    <View>
      <Text>Users</Text>
      <FlatList
        data={users}
        renderItem={({ item }) => <Text style={styles.item}>{item.email}</Text>}
        style={styles.list}
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