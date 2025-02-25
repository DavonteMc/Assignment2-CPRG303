import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  FlatList,
  Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const App = () => {
  const router = useRouter();
  const posts = [
    {
      id: 1,
      username: "User1",
      image: "https://picsum.photos/id/142/200/300",
      caption: "Enjoying a beautiful day!",
    },
    {
      id: 2,
      username: "User2",
      image: "https://picsum.photos/id/147/200/300",
      caption: "Adventures are calling!",
    },
    {
      id: 3,
      username: "User3",
      image: "https://picsum.photos/id/161/200/300",
      caption: "Exploring the world!",
    },
    {
      id: 4,
      username: "User4",
      image: "https://picsum.photos/id/166/200/300",
      caption: "Traveling is fun!",
    },
  ];

  const stories = [
    {
      id: 0,
      image: "https://picsum.photos/200",
      username: "Your Story",
    },
    {
      id: 1,
      image: "https://picsum.photos/id/40/200/300",
      username: "User1",
    },
    {
      id: 2,
      image: "https://picsum.photos/id/64/200/300",
      username: "User2",
    },
    {
      id: 3,
      image: "https://picsum.photos/id/91/200/300",
      username: "User3",
    },
    {
      id: 4,
      image: "https://picsum.photos/id/133/200/300",
      username: "User4",
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>Instagram</Text>
        <View style={styles.headerIcons}>
          <AntDesign
            name="search1"
            size={24}
            color="black"
            style={styles.icon}
          />
          <AntDesign
            name="hearto"
            size={24}
            color="black"
            style={styles.icon}
          />
          <AntDesign
            name="message1"
            size={24}
            color="black"
            style={styles.icon}
          />
        </View>
      </View>

      {/* Stories */}
      <FlatList
        style={styles.story}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={stories}
        renderItem={({ item }) => (
          <View style={styles.storyContainer}>
            <LinearGradient
              colors={["#fdf497", "#fd5949", "#d6249f", "#285AEB"]}
              style={styles.storyImageBG}
            >
              <Image source={{ uri: item.image }} style={styles.storyImage} />
            </LinearGradient>

            <Text style={{ fontSize: 11 }}>{item.username}</Text>
          </View>
        )}
      />

      {/* Posts Feed */}
      <ScrollView>
        {posts.map((post) => (
          <View key={post.id} style={styles.post}>
            <Text style={styles.postTitle}>{post.username}</Text>
            <Image source={{ uri: post.image }} style={styles.postImage} />
            <Text style={styles.caption}>{post.caption}</Text>

            {/* Post Action Icons */}
            <View style={styles.iconsContainer}>
              <Image
                source={require("../../assets/images/home.png")}
                style={styles.icons1}
              />
              <Image
                source={require("../../assets/images/comment.png")}
                style={styles.icons1}
              />
              <Image
                source={require("../../assets/images/paper-plane.png")}
                style={styles.icons1}
              />
              <Image
                source={require("../../assets/images/bookmark.png")}
                style={styles.icons1}
              />
            </View>

            {/* Post Likes and Comments */}
            <View>
              <Text>
                Liked by{" "}
                <Text style={{ fontWeight: "bold" }}>paisley.print48</Text> and{" "}
                <Text style={{ fontWeight: "bold" }}>7 others</Text>
              </Text>

              <Text>
                <Text style={{ fontWeight: "bold" }}>french_fries</Text> Fresh
                shot on a sunny day
              </Text>

              <Text style={{ color: "#E7EAE5" }}>View all 15 comments</Text>

              <Text>
                <Text style={{ fontWeight: "bold" }}>lilwat.838</Text> Awesome
                looks
              </Text>

              <Text>
                <Text style={{ fontWeight: "bold" }}>pia.in.a.pott</Text> Gorg.
                Looks
              </Text>

              <Text>
                <Text style={{ fontWeight: "bold" }}>xo.xo.xm</Text> Wonderful
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: "100%",
  },
  header: {
    paddingTop: 50,
    height: 120,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    alignItems: "center",
  },
  logo: {
    fontSize: 24,
    fontWeight: "bold",
  },
  headerIcons: {
    flexDirection: "row",
  },
  icon: {
    marginLeft: 20,
  },
  storyContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  story: {
    width: "100%",
    height: 150,
    marginLeft: 5,
    marginBottom: 10,
    textAlign: "center",
  },
  storyImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
    margin: 10,
    borderWidth: 3,
    borderColor: "#ffffff",
  },
  storyImageBG: {
    width: 76,
    height: 76,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  post: {
    marginBottom: 20,
    borderBottomWidth: 0.5,
    borderColor: "#ddd",
    width: "100%",
  },
  postTitle: {
    marginTop: 10,
    marginLeft: 10,
    fontWeight: "bold",
  },
  postImage: {
    width: "100%",
    height: 400,
    marginVertical: 10,
  },
  postText: {
    marginLeft: 10,
  },
  caption: {},
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
  iconsContainer: {
    flexDirection: "row",
    padding: 10,
  },
  icons1: {
    height: 30,
    width: 30,
    margin: 10,
    right: 20,
  },
});

export default App;
