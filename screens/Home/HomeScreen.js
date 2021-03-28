import React from "react";
import { Text, View, FlatList } from "react-native";
import { FAB } from "react-native-paper";
import CardView from "../../components/CardView/CardView";
import { styles } from "./Styles";
import UserImage from "../../assets/images/user1.jpg";
import { useSelector } from "react-redux";

const HomeScreen = ({ navigation }) => {
  const { employeesData } = useSelector((state) => state);
  console.log(employeesData)
  return (
    <View style={styles.container}>
      <FlatList
        data={employeesData}
        renderItem={({ item }) => (
          <CardView
            name={item.name}
            designation={item.designation}
            image={UserImage}
            id={item.id}
            navigation={navigation}
          />
        )}
        keyExtractor={(item) => item.id}
        refreshing={true}
      />
      <FAB style={styles.fab} large icon="plus" onPress={() => navigation.navigate("Create Screen")} />
    </View>
  );
};

export default HomeScreen;
