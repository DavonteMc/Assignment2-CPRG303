import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
} from "react-native";
import { useRouter } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import BackButton from "@/components/BackButton";

const ProfilePage = () => {
  const router = useRouter();

  const posts = [
    {
      id: 1,
      image: "https://picsum.photos/id/1/200/300",
      caption: "Enjoying a beautiful day!",
    },
    {
      id: 2,
      image: "https://picsum.photos/id/3/200/300",
      caption: "Enjoying a beautiful day!",
    },
    {
      id: 3,
      image: "https://picsum.photos/id/8/200/300",
      caption: "Enjoying a beautiful day!",
    },
    {
      id: 4,
      image: "https://picsum.photos/id/5/200/300",
      caption: "Enjoying a beautiful day!",
    },
    {
      id: 5,
      image: "https://picsum.photos/id/33/200/300",
      caption: "Enjoying a beautiful day!",
    },
    {
      id: 6,
      image: "https://picsum.photos/id/44/200/300",
      caption: "Enjoying a beautiful day!",
    },
    {
      id: 7,
      image: "https://picsum.photos/id/29/200/300",
      caption: "Enjoying a beautiful day!",
    },
    {
      id: 8,
      image: "https://picsum.photos/id/28/200/300",
      caption: "Enjoying a beautiful day!",
    },
    {
      id: 9,
      image: "https://picsum.photos/id/25/200/300",
      caption: "Enjoying a beautiful day!",
    },
    {
      id: 10,
      image: "https://picsum.photos/id/22/200/300",
      caption: "Enjoying a beautiful day!",
    },
    {
      id: 11,
      image: "https://picsum.photos/id/34/200/300",
      caption: "Enjoying a beautiful day!",
    },
    {
      id: 12,
      image: "https://picsum.photos/id/55/200/300",
      caption: "Enjoying a beautiful day!",
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <BackButton onPress={() => router.back()} />
          <View style={styles.headerText}>
            <Text style={styles.title}>Group Profile</Text>
            <Text>ootd_everyday</Text>
          </View>
        </View>

        <View style={styles.profileHeader}>
          <View style={styles.profilePhotoWhole}>
            <Image
              source={{ uri: "https://picsum.photos/200" }}
              style={styles.profilePhoto}
            />
          </View>
          <View style={styles.profileMetrics}>
            <View style={styles.metricText}>
              <Text style={styles.metricTitle}>53</Text>
              <Text style={styles.metricSubtitle}>Posts</Text>
            </View>
            <View style={styles.metricText}>
              <Text style={styles.metricTitle}>12</Text>
              <Text style={styles.metricSubtitle}>Members</Text>
            </View>
            <View style={styles.metricText}>
              <Text style={styles.metricTitle}>1</Text>
              <Text style={styles.metricSubtitle}>Admins</Text>
            </View>
          </View>
        </View>

        <View style={styles.profileBody}>
          <Text style={styles.descriptionTitle}>OOTD Everyday</Text>
          <Text>Fit Check!</Text>
          <Text>You know we'll hype you up.</Text>
        </View>
        <View style={styles.dropdown}>
          <Text style={styles.dropdownText}>Member</Text>
          <Image
            style={styles.dropdownButton}
            source={require("../../assets/images/icons8-down-50.png")}
          />
        </View>

        <View style={styles.gallery}>
          {posts.map((post) => (
            <Image
              key={post.id}
              source={{ uri: post.image }}
              style={styles.picture}
              resizeMode="cover"
            />
          ))}
          {posts.map((post) => (
            <Image
              key={post.id}
              source={{ uri: post.image }}
              style={styles.picture}
              resizeMode="cover"
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
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
  headerText: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  headerIcons: {
    width: 28,
    height: 28,
  },
  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: 100,
  },
  profilePhotoWhole: {
    marginLeft: 10,
  },
  profilePhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: "#fff",
    borderWidth: 2,
  },
  profileMetrics: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-start",
    marginRight: 15,
  },
  metricText: {
    alignItems: "center",
  },
  metricTitle: {
    fontWeight: "bold",
    fontSize: 19,
  },
  metricSubtitle: {
    fontSize: 12,
  },
  profileBody: {
    alignItems: "flex-start",
    width: "100%",
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  descriptionTitle: {
    fontWeight: "bold",
  },
  dropdown: {
    flexDirection: "row",
    width: "94%",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderRadius: 3,
    borderColor: "black",
    paddingVertical: 1,
    paddingHorizontal: 30,
    marginHorizontal: "auto",
    marginVertical: 15,
  },
  dropdownText: {
    fontWeight: "bold",
  },
  dropdownButton: {
    width: 16,
    height: 16,
    marginLeft: 8,
  },
  gallery: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 2,
    width: Dimensions.get("window").width,
    marginVertical: 5,
  },

  picture: {
    width: (Dimensions.get("window").width - 9) / 3,
    height: (Dimensions.get("window").width - 9) / 3,
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

export default ProfilePage;
