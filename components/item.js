import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View key={props["object"].index} style={styles.goalItem}>
      <Pressable
        id={props.id}
        android_ripple={{ color: "#210644" }}
        style={({ pressed }) => pressed && styles.pressedItem}
        onPress={props.onDeleteItem.bind(this, props.id)}
      >
        <Text style={styles.goalText}>{props["object"].item}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: { color: "white", padding: 8 },
});

export default GoalItem;
