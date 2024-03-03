import { useEffect, useState } from "react";
import { UseDispatch, useDispatch, useSelector } from "react-redux";
import { FlatList, Text, StyleSheet, Modal, View, Button, Pressable } from "react-native";
import { deleteSession, loadSessions } from "../../state/sessions";
import AddSession from "./AddSession";

export default function Session() {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const sessions = useSelector(state => state.sessions.data)

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedSession, setSelectedSession] = useState({});

  useEffect(() => {
    dispatch(loadSessions(user.data.id))
    //console.log(sessions)
  }, [])
  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible)
        }}
      >
        <View style={styles.modal}>
          <View style={styles.modalBox}>
            <Text>Are you sure you want to delete {selectedSession.title}?</Text>
            <Button title={`Delete ${selectedSession.title}`} onPress={() => {
              dispatch(deleteSession({sessionId: selectedSession.id}))
            }}/>
            <Button title='Cancel' onPress={() => setModalVisible(!modalVisible)}/>
          </View>
        </View>
      </Modal>
      <Text style={styles.title}>Sessions</Text>
      <FlatList
        data={sessions}
        renderItem={({ item }) =>
          <View stye={styles.listItem}>
            <Text style={styles.listTitle}>{item.title}</Text>
            <Button title='-' onPress={() => {
              setModalVisible(!modalVisible)
              setSelectedSession(item)
              }}/>
          </View>}
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
  },
  listItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  listTitle: {
    backgroundColor: 'blue',
    alignSelf: 'flex-start'
  },
  listDeleteButton: {
    width: 20,
  },
  modal: {
    alignSelf: 'center',
    height: '100%',
    justifyContent: 'center',
  },
  modalBox: {
    backgroundColor: 'gray'
  }
})