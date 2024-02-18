import React, {useState, useEffect} from 'react'
import {Text, View, FlatList} from 'react-native'

const getUsers = async () => {
  const response = await fetch('http://192.168.1.218:3000/')
  const json = await response.json()
  return json
}

export default function User() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    getUsers().then(res => setUsers(res))
    console.log(users)
  }, [])

  return (
    <View>
      <Text>Users</Text>
      <FlatList 
        data={users}
        renderItem={({item}) => <Text>{item.email}</Text>}
      />
    </View>
  )
}