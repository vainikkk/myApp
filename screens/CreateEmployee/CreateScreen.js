import React, { useState } from "react";
import { Button, StyleSheet, Text, View, TouchableOpacity, Modal, Pressable, Alert } from "react-native";
import { HelperText, TextInput } from "react-native-paper";
import { MY_COLORS, STYLES } from "../../baseStyles";
import { styles } from "./Styles";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import ErrorMessage from "../../components/Errors/ErrorMessage";
import { useDispatch, useSelector } from "react-redux";

const CreateScreen = ({ params, navigation, route }) => {
  const dispatch = useDispatch();
  const { employeesData } = useSelector((s) => s);
  const getId = route.params?.id;
  let employee;
  if (getId) {
    employee = employeesData.find((v) => (v.id = getId));
  }

  const [name, setName] = useState(getId ? employee.name : "");
  const [designation, setDesignation] = useState(getId ? employee.designation : "");
  const [email, setEmail] = useState(getId ? employee.email : "");
  const [number, setNumber] = useState(getId ? employee.number : "");
  const [modalVisible, setModalVisible] = useState("");
  const [imageName, setImageName] = useState("");
  const [errors, setErrors] = useState({});

  const handleCamera = () => {
    let options = {
      maxWidth: 256,
      maxHeight: 256,
    };
    launchCamera(options, (response) => {
      if (response.didCancel) {
        console.log("User cancelled photo picker");
        Alert.alert("You did not select any image");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        setImageName(response.fileName);
        let newFile = {
          name: response.fileName,
          uri: response.uri,
          type: response.type,
        };
        handleUpload(newFile);
      }
    });
  };

  const handleGalary = () => {
    let options = {
      maxWidth: 256,
      maxHeight: 256,
    };
    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log("User cancelled photo picker");
        Alert.alert("You did not select any image");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        setImageName(response.fileName);
        let newFile = {
          name: response.fileName,
          uri: response.uri,
          type: response.type,
        };
        handleUpload(newFile);
      }
    });
  };

  const handleUpload = (file) => {
    let formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "status_upload");
    formData.append("cloud_name", "vainik17");
    fetch("https://api.cloudinary.com/v1_1/vainik17/image/upload", {
      method: "post",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  const handleChange = (text, type) => {
    switch (type) {
      case "NAME":
        setName(text);
        setErrors({ ...errors, name: false });
        return;
      case "DESIGNATION":
        setDesignation(text);
        setErrors({ ...errors, designation: false });
        return;
      case "EMAIL":
        setEmail(text);
        setErrors({ ...errors, email: false });
        return;
      case "NUMBER":
        setNumber(text);
        setErrors({ ...errors, number: false });
        return;
    }
  };

  const handleSubmit = () => {
    let error = {};
    if (name && designation && email && number) {
      let empData = {
        name,
        designation,
        email,
        number,
      };
      dispatch({ type: "ADD_EMPLOYEE", payload: empData });
      navigation.navigate("Home");
    } else {
      if (!name) error.name = true;
      if (!designation) error.designation = true;
      if (!email) error.email = true;
      if (!number) error.number = true;
      setErrors(error);
    }
  };

  const handleUpdate = () => {
    if (name && designation && email && number) {
      let empData = {
        name,
        designation,
        email,
        number,
      };
      dispatch({ type: "UPDATE_EMPLOYEE", payload: { empData, id: getId } });
      navigation.navigate("Profile");
    } else {
      if (!name) error.name = true;
      if (!designation) error.designation = true;
      if (!email) error.email = true;
      if (!number) error.number = true;
      setErrors(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={STYLES.HeadingStyle}>{getId ? "Update Employee" : "Create Employee"}</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.inputStyle}
          label="Name"
          theme={{
            colors: { primary: errors.name ? MY_COLORS.primaryRed : MY_COLORS.primary, underlineColor: "transparent" },
          }}
          value={name}
          onChangeText={(text) => handleChange(text, "NAME")}
          mode="outlined"
        />
        {errors.name && <ErrorMessage visible={errors.name} text="Enter your name" />}
      </View>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.inputStyle}
          label="Designation"
          theme={{
            colors: { primary: MY_COLORS.primary, underlineColor: "transparent" },
          }}
          value={designation}
          onChangeText={(text) => handleChange(text, "DESIGNATION")}
          mode="outlined"
        />
        {errors.designation && <ErrorMessage visible={errors.designation} text="Enter your designation" />}
      </View>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.inputStyle}
          label="Email"
          autoCompleteType="email"
          theme={{
            colors: { primary: MY_COLORS.primary, underlineColor: "transparent" },
          }}
          value={email}
          onChangeText={(text) => handleChange(text, "EMAIL")}
          mode="outlined"
        />
        {errors.email && <ErrorMessage visible={errors.email} text="Enter your emailId" />}
      </View>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.inputStyle}
          label="Mobile Number"
          autoCompleteType="tel"
          keyboardType="number-pad"
          theme={{
            colors: { primary: MY_COLORS.primary, underlineColor: "transparent" },
          }}
          value={number}
          onChangeText={(text) => handleChange(text, "NUMBER")}
          mode="outlined"
        />
        {errors.number && <ErrorMessage visible={errors.number} text="Enter your mobile number" />}
      </View>
      <View style={styles.inputWrapper}>
        <Button onPress={() => setModalVisible(true)} title="Upload Image" color={MY_COLORS.primary} />
      </View>
      <Text style={STYLES.centerContainer}>{imageName ? "Uploaded" : ""}</Text>
      <View style={styles.inputWrapper}>
        <Button
          onPress={getId ? handleUpdate : handleSubmit}
          title={getId ? "Update" : "Submit"}
          color={MY_COLORS.primary}
        />
      </View>
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onDismiss={() => setModalVisible(!modalVisible)}
      >
        <View style={styles.modalView}>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Pressable style={styles.button} onPress={handleCamera}>
              <Text style={styles.textStyle}>Camera</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={handleGalary}>
              <Text style={styles.textStyle}>Galary</Text>
            </Pressable>
          </View>
          <View style={{ alignItems: "center" }}>
            <Pressable
              style={[styles.button, { backgroundColor: MY_COLORS.primaryRed }]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Cancle</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CreateScreen;
