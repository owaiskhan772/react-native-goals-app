import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

const GoalItem = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => props.onDelete(props.id)}
    >
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "#ccc",
  },
});

export default GoalItem;
