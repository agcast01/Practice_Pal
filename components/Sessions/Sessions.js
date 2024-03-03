import { useEffect } from "react";
import { UseDispatch, useDispatch, useSelector } from "react-redux";
import { FlatList, Text, StyleSheet } from "react-native";
import { loadSessions } from "../../state/sessions";
import AddSession from "./AddSession";

export default function Session() {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const sessions = useSelector(state => state.sessions.data)
  useEffect(() => {
    dispatch(loadSessions(user.data.id))
    //console.log(sessions)
  }, [])
  return(<>
  <Text style={styles.title}>Sessions</Text>
  <FlatList 
    data={sessions}
    renderItem={({item}) => <Text>{item.title}</Text>}
    keyExtractor={item => item.id}
    style={{
      flexGrow: 0
    }}
  />
  <AddSession />
  </>)
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    textAlign: 'center',
    fontSize: 18,
  }
})