import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Button,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TextInput
} from "react-native";
import storage from "./Components/storage";

const Task = ({ name, id }) => {

  const onChangeText = (text, id)=>{
    // console.log(id)
    
    DATA[id].name = text
    name = text
  }

  return (
    <View style={{ alignItems: "center" }}>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => onChangeText(text, id)}
        value={name}
      />
    </View>
  );
};

const Item = function (name, id) {
  this.name = name;
  this.id = id;
};

const DATA = [new Item("TASK1", 0), new Item("Task2", 1)];

const Tasks = (props) => {
  const renderItem = ({ item }) => <Task name={item.name} id={item.id} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default function App() {
  const addItem = () => {
    DATA.push(new Item("test", DATA.length));
  };

  return (
    <View style={styles.container}>
      <Text>TaskPallete</Text>
      <Button title="ADD" onPress={addItem} />
      <Tasks />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
