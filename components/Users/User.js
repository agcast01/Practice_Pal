import React, {useState} from 'react'
import {Text, View, FlatList} from 'react-native'

export default function User() {
  const {users, setUsers} = useState([])

  return (
    <View>
      <Text>Users</Text>
      <FlatList 
        data={users}
      />
    </View>
  )
}