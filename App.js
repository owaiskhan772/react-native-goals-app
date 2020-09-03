import React, { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";

import GoalItem from "./components/goal-item";
import GoalInput from "./components/goal-input";

const App = () => {
  const [toggleModal, setToggleModal] = useState(false);
  const [goals, setGoals] = useState([]);

  const addGoalHandler = (goal) => {
    setGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goal },
    ]);
    setToggleModal(false);
  };

  const removeGoalHandler = (goalId) => {
    setGoals((currentGoals) => {
      return currentGoals.filter((currentGoal) => currentGoal.id !== goalId);
    });
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setToggleModal(true)} />
      <GoalInput
        visible={toggleModal}
        addGoalHandler={addGoalHandler}
        onCancel={() => setToggleModal(false)}
      />
      <FlatList
        keyExtractor={(item, indexed) => item.id}
        data={goals}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.id}
            title={itemData.item.value}
            onDelete={removeGoalHandler}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { padding: 50 },
});

export default App;
