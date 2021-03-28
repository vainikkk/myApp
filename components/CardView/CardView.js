import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import {styles} from "./styles"

const CardView = ({ image, name, designation, id, navigation }) => {
  return (
    <Card style={{ margin: 10 }} onPress={() => navigation.navigate("Profile", {id})}>
      <View style={styles.employeeCardWrapper}>
        <Image source={image} style={styles.image} />
        <View style={styles.textWrapper}>
          <Text style={styles.cardTitle}>{name}</Text>
          <Text>{designation}</Text>
        </View>
      </View>
    </Card>
  );
};

export default CardView;


