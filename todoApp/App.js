
import React, { useState } from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  Text,
  View,
  TextInput, TouchableOpacity
} from "react-native";
import Tasks from "./src/Component/Tasks";


const App = () => {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([])

   const handleAddTask = ()=>{

     setTaskItems([...taskItems, task])
     setTask(null)
   }

   const completeTask =(index)=>{
     let itemsCopy = [...taskItems];
     itemsCopy.splice(index, 1);
     setTaskItems(itemsCopy)
   }
  return (
    <View style={styles.constainer}>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks </Text>
        <View style={styles.items}>
          {taskItems.map((items, index) =>{
           return (
           <TouchableOpacity key={index} onPress={()=> completeTask(index)}>
             <Tasks text={items}/>
           </TouchableOpacity>
           )
          })}

        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder="Write your Task" onChangeText={text=> setTask(text)} value={task} />
        <TouchableOpacity onPress={()=> handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    backgroundColor: "#e8eaed"
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold"
  },
  items: {
    marginTop: 30
  },
  writeTaskWrapper: {
    bottom: 60,
    position: "absolute",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  input: {
    paddingVertical: 15,
    width: 250,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderRadius: 60,
    borderColor: "#c0c0c0c0",
    borderWidth: 1
  },
  addWrapper: {
    backgroundColor: "#fff",
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 60,
    borderWidth: 1
  },
  addText: {}
});

export default App;
