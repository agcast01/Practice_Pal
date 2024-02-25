import React, { useState, useEffect } from 'react'
import { Text, View, FlatList, StyleSheet, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import Login from './Login';
import { logout } from '../../state/user';
import Signup from './Signup';
//import { logout } from '../../state/user';

export default function User() {
  const dispatch = useDispatch();
  const [users, setUsers] = useState([])
  const [buttonColor, setButtonColor] = useState(true)
  const user = useSelector(state => state.user)
  useEffect(() => {
    console.log(user)
  }, [buttonColor])

  

  return (
    <View>
      <Text>Current User: {user.data && user.data.email}</Text>
      {!user.data && 
      <View>
        <Login />
        <Signup />
      </View>}
      {user.data && <Button 
        title="Logout"
        onPress={() => {
          dispatch(logout())
        }}
      />}
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
