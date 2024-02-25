import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import { useDispatch } from "react-redux";
import { signup } from "../../state/user";

export default function Signup() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onSubmit = async () => {
    console.log("beep")
    dispatch(signup({email, password}))
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
      <Button title="Signup" onPress={onSubmit} />
    </View>
  )

}
