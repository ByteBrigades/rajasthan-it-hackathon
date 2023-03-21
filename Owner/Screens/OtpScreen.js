import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useRoute } from "@react-navigation/native";

const OTPScreen = () => {
  const [otp, setOTP] = useState("");
  const [user, setUser] = useState(null);
  const navigation = useNavigation();
  const route = useRoute();
  const [givenOtp, setGivenOtp] = useState("");
  const phoneNumber = route.params.phoneNumber;
  const generateOTP = (length) => {
    const characters =
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const characterCount = characters.length;
    let OTP = "";
    for (let i = 0; i < length; i++) {
      OTP += characters[Math.floor(Math.random() * characterCount)];
    }
    return OTP;
  };
  useEffect(() => {
    setGivenOtp(generateOTP(6));
  }, []);

  console.log(givenOtp);
  const handleSubmit = async () => {
    if (!otp) return;
    if (otp !== givenOtp) return;
    await axios
      .post("http://localhost:8080/customers/", {
        phoneNumber: phoneNumber,
      })
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => console.log(err));

    if (user !== null) {
      navigation.navigate("QRScreen", {
        user,
      });
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/foodnest.png")}
        style={{ width: "60%", height: 120, marginBottom: 50 }}
      />
      <Text style={styles.title}>Enter OTP</Text>
      <View style={styles.otpContainer}>
        <View style={styles.loginForm}>
          <TextInput
            placeholder="Enter OTP"
            value={otp}
            style={styles.loginInput}
            onChangeText={setOTP}
            maxLength={6}
          />
        </View>
      </View>
      <Pressable style={styles.loginButton} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#ffba00",
    width: "100%",
  },
  loginButton: {
    backgroundColor: "#111A21",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: 120,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "black",
  },
  loginForm: {
    width: "100%",
    maxWidth: 400,
    padding: 20,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginBottom: 30,
  },
  otpInput: {
    borderWidth: 1,
    borderColor: "white",
    width: 50,
    height: 50,
    fontSize: 24,
    textAlign: "center",
    borderRadius: 5,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
  disabledButton: {
    opacity: 0.5,
  },
  loginInput: {
    backgroundColor: "#f2f2f2",
    padding: 10,
    width: "100%",
    borderRadius: 5,
    marginBottom: 10,
    marginBottom: 10,
  },
});

export default OTPScreen;
