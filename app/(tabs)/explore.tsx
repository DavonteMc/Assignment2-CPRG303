import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  ScrollView,
  Dimensions,
  Image,
  ImageSourcePropType,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window");
const numColumns = 3;
const spacing = 4;
const containerSize = (width - spacing * (numColumns - 1)) / numColumns;

// Define a type for the images in the array
const exploreImages: { source: ImageSourcePropType }[] = Array(36).fill({
  source: require("../../assets/images/hawaii.webp"),
});

const ExploreScreen = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable
          style={styles.backButton}
          onPress={() => router.back()} // Using router.back() to go bac
        >
          <Image
            style={styles.headerIcons}
            source={require("../../assets/images/icons8-left-50.png")}
          />
        </Pressable>
      </View>
      {/* Search Bar */}
      <View style={styles.searchBar}>
        <View style={styles.circle}></View>
        <TextInput
          style={styles.searchInput}
          placeholder="Ask Meta AI or Search"
          placeholderTextColor="#b3b3b3"
        />
      </View>

      {/* Explore Title and Navigation Buttons */}
      <Text style={styles.title}>Explore Screen</Text>

      {/* Scrollable Grid of Images */}
      <ScrollView>
        <View style={styles.gridContainer}>
          {exploreImages.map((image, index) => (
            <Image key={index} source={image.source} style={styles.imageBox} />
          ))}
        </View>
      </ScrollView>
      {/* Bottom Navigation Bar */}
      <View style={styles.navBar}>
        <Pressable onPress={() => router.back()}>
          <AntDesign
            name="home"
            size={30}
            color="black"
            style={styles.navIcon}
          />
        </Pressable>
        <Pressable onPress={() => router.push("/explore")}>
          <AntDesign
            name="hearto"
            size={30}
            color="black"
            style={styles.navIcon}
          />
        </Pressable>
        <Pressable onPress={() => router.push("/profile")}>
          <AntDesign
            name="user"
            size={30}
            color="black"
            style={styles.navIcon}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    position: "absolute",
    top: 0,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 100,
    paddingTop: 50,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  backButton: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  headerIcons: {
    width: 28,
    height: 28,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e3e7e8",
    padding: 2,
    borderRadius: 45,
    marginTop: 65,
    marginLeft: 50,
    marginRight: 20,
    marginBottom: 10,
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 5,
    borderColor: "#03b6fc",
    marginRight: 5,
    marginLeft: 7,
  },
  searchInput: {
    flex: 1,
    color: "black",
    fontSize: 16,
    marginHorizontal: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  buttonContainer: {
    marginBottom: 20,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginHorizontal: 0,
  },
  imageBox: {
    width: containerSize,
    height: containerSize,
    marginBottom: spacing,
  },
  navBar: {
    height: 80,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  navIcon: {
    marginHorizontal: 50,
  },
});

export default ExploreScreen;
