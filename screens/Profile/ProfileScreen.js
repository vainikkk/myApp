import React from "react";
import { Button, Image, Text, View } from "react-native";
import { styles } from "./styles";
import USER_IMAGE from "../../assets/images/user1.jpg";
import BACKGROUND_IMAGE from "../../assets/images/background.jpg";
import { Avatar, Card } from "react-native-paper";
import { MY_COLORS } from "../../baseStyles";
import { themePrimaryColor } from "../../theme";
import { useNavigation } from "@react-navigation/native";
import IconAndText from "../../components/CardView/IconAndText";
import { useDispatch, useSelector } from "react-redux";

const ProfileScreen = ({ params, route }) => {
  const dispatch = useDispatch();
  const { employeesData } = useSelector((state) => state);
  let employeeId = route.params.id;
  const navigaiton = useNavigation();
  
  const handleRemove = () => {
    dispatch({ type: "DELETE_EMPLOYEE", payload: employeeId });
    navigaiton.navigate("Home");
  };

  const handleUpdate = () => {
    navigaiton.navigate("Create Screen", { id: employeeId });
  };

  let employee = employeesData.length > 0 && employeesData.find((v) => v.id === employeeId);

  return (
    <View style={styles.container}>
      <View style={styles.headerBox}>
        <Image source={BACKGROUND_IMAGE} style={{ height: 150 }} />
      </View>
      <View style={styles.imageWrapper}>
        <Image source={USER_IMAGE} style={styles.image} />
      </View>
      <View style={styles.profileWrapper}>
        <IconAndText iconName="account" text={employee?.name} />
        <IconAndText iconName="account-details" text={employee?.designation} />
        <IconAndText iconName="phone" text={employee?.number} dataDetectorType="phoneNumber" />
        <IconAndText
          iconName="email"
          text={employee?.email}
          ellipsizeMode="tail"
          dataDetectorType="email"
          numberOfLines={1}
        />
        <View style={styles.buttonGroup}>
          <View style={{ width: 150, padding: 20 }}>
            <Button onPress={handleUpdate} title="Update" color={MY_COLORS.primary} />
          </View>
          <View style={{ width: 150, padding: 20 }}>
            <Button onPress={handleRemove} title="Fire" color="firebrick" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
