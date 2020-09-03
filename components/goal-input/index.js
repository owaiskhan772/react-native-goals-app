import React, { useState } from "react";
import { TextInput, Text, Button, View, Modal, StyleSheet } from "react-native";

const GoalInput = (props) => {
  const [goal, setGoal] = useState("");
  const [error, setError] = useState(false);

  const goalInputHandler = (enteredText) => {
    setGoal(enteredText);
  };

  const addGoalHandler = () => {
    if (goal !== "") {
      props.addGoalHandler(goal);
      setGoal("");
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.formContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.inputControl}
          value={goal}
          onChangeText={goalInputHandler}
        />
        {error ? (
          <Text style={styles.error}>Please, enter your goal!</Text>
        ) : null}
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="CANCEL"
              color="red"
              onPress={() => {
                setGoal("");
                setError(false);
                props.onCancel();
              }}
            />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputControl: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
  },
  button: {
    width: "40%",
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
});

export default GoalInput;
