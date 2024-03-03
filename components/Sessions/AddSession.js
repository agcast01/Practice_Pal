import { useState } from "react";
import { Button, TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { createSession } from "../../state/sessions";


const getCurrentDate = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
  const currentTime = new Date()
  const month = months[currentTime.getMonth()]
  return `${month + ' ' + currentTime.getDate()}, ${currentTime.getFullYear()}`
}

export default function AddSession() {
  const [title, setTitle] = useState(getCurrentDate());
  const userId = useSelector(state => state.user.data.id);
  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(createSession({userId, title}))
  }


  return (
    <>
      <TextInput 
        value={title}
        onChangeText={setTitle}
        style={{
          fontStyle: 'italic',
          borderStyle: 'solid',
          borderColor: 'rgba(0, 0 , 0, .2)',
          borderWidth: 1,
          borderRadius: 10,
          paddingHorizontal: 10,
        }}
      />
      <Button 
        title="New Session"
        onPress={() => onSubmit()}
      />
    </>
    
  )
}