import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../state/user";

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onSubmit = async () => {
    console.log("beep")
    dispatch(login({email, password}))
  }
  return (
    <View>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
        inputMode="email"
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        secureTextEntry={true}
      />
      <Button title="Login" onPress={onSubmit} />
    </View>
  )

}
