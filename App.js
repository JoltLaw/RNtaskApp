import { StyleSheet, View, FlatList, Button } from "react-native";
import { useState } from "react";
import GoalItem from "./components/item";
import GoalInput from "./components/input";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [modal, setModal] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoalText,
    ]);

    endAddGoalHandler();
  }

  function startAddGoalHandler() {
    setModal(true);
  }

  function endAddGoalHandler() {
    setModal(false);
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentState) => {
      return currentState.filter((goal) => currentState.indexOf(goal) !== id);
    });
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#b180f0"
          onPress={startAddGoalHandler}
        />

        {modal && (
          <GoalInput
            onAddGoal={addGoalHandler}
            visible={modal}
            onModalClose={endAddGoalHandler}
          />
        )}
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(item) => {
              return (
                <GoalItem
                  object={item}
                  onDeleteItem={deleteGoalHandler}
                  id={item.index}
                />
              );
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },

  goalsContainer: {
    flex: 5,
  },
});
