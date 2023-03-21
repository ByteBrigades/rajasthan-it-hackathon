import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Pressable,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const Login = () => {
  const [loginMode, setLoginMode] = useState("user"); // 'user' or 'owner'
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [owner, setOwner] = useState("");

  const navigation = useNavigation();

  // handle form submit based on the login mode
  const handleSubmit = async () => {
    if (loginMode === "user") {
      // handle user login
      if (!phoneNumber) return;
      navigation.navigate("Otp", {
        phoneNumber,
      });
    } else if (loginMode === "owner") {
      // handle owner login
      if (!loginId && !password) return;
      await axios
        .post("http://localhost:8080/owners/", {
          username: loginId,
          password: password,
        })
        .then((res) => {
          setOwner(res.data);
        })
        .catch((err) => console.log(err));
      if (owner) {
        navigation.navigate("Pref", {
          owner: owner,
        });
      }
    }
  };
  console.log(loginId, password);
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/foodnest.png")}
        style={{ width: "60%", height: 120, marginBottom: 50 }}
      />
      <View style={{ flexDirection: "row", marginBottom: 20 }}>
        <TouchableOpacity
          onPress={() => setLoginMode("user")}
          style={{
            backgroundColor: loginMode === "user" ? "#111A21" : "#0047ab",
            width: 120,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 20,
          }}
        >
          <Text style={{ color: "white" }}>USER</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setLoginMode("owner")}
          style={{
            backgroundColor: loginMode === "owner" ? "#111A21" : "#0047ab",
            width: 120,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            borderTopRightRadius: 20,
            borderBottomRightRadius: 20,
          }}
        >
          <Text style={{ color: "white" }}>OWNER</Text>
        </TouchableOpacity>
      </View>

      {/* render login form based on the login mode */}
      {loginMode === "user" && (
        <View style={styles.loginForm}>
          <TextInput
            placeholder="Phone number"
            value={phoneNumber}
            style={styles.loginInput}
            onChangeText={setPhoneNumber}
            maxLength={10}
          />

          <Pressable style={styles.loginButton} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Get OTP</Text>
          </Pressable>
        </View>
      )}
      {loginMode === "owner" && (
        <View style={styles.loginForm}>
          <TextInput
            placeholder="Login ID"
            value={loginId}
            onChangeText={setLoginId}
            style={styles.loginInput}
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.loginInput}
          />

          <Pressable style={styles.loginButton} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Login</Text>
          </Pressable>
        </View>
      )}

      {/* render login button */}
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    width: "100%",
    height: "100%",
    backgroundColor: "#ffba00",
  },
  loginForm: {
    width: "100%",
    maxWidth: 400,
    padding: 20,
  },
  loginInput: {
    backgroundColor: "#f2f2f2",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    marginBottom: 10,
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
  heading: {
    padding: 20,
    textAlign: "center",
    marginTop: 40,
    fontSize: 35,
    fontWeight: "bold",
    color: "white",
  },
});
