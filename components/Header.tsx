import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 60,
    padding: 20,
    backgroundColor: "#007bff",
    alignItems: "center",
    position: "absolute",
    top: 0,
    zIndex: 1000, // Ensures that the header is always on top
  },
  headerText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Header;
