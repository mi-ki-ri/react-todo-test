import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Button,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TextInput,
} from "react-native";
import storage from "./Components/storage";

class Task extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    const onChangeText = (e, text, id) => {
      console.log(text)

      // this.props.data[id].name = text;
      this.props.name = text;
      
    };

    console.log("rennder")

    return (
      <View style={{ alignItems: "center" }}>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onKeyPress={(text) => onChangeText( text, this.props.id)}
          value={this.props.name}
        />
      </View>
    );
  }
}

const Item = function (name, id) {
  this.name = name;
  this.id = id;
};

class Tasks extends React.Component {
  
  render() {
    console.log("render", this.props.data)

    const renderItem = ({ item }) => (
      <Task name={item.name} id={item.id} data={this.props.data} />
    );

    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.props.data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    );
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { data:[new Item("test", 0)] }

  }

  render() {
    const addItem = () => {
      
      let newArr = this.state.data.concat(new Item("test", this.state.data.length))
      

      this.setState({data: newArr}, ()=>{
        console.log(this.state.data)

      })

      
    };

    return (
      <View style={styles.container}>
        <Text>TaskPallete</Text>
        <Button title="ADD" onPress={addItem} />
        <Tasks data={this.state.data} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
