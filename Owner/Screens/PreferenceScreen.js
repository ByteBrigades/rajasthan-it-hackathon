import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const PreferenceScreen = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#ffba00",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Image
        source={require("../../assets/foodnest.png")}
        style={{
          width: "70%",
          height: 120,
          marginTop: 70,
          marginRight: 30,
          marginBottom: 60,
        }}
      />
      <View style={{ marginBottom: 30 }}>
        <Text style={{ fontSize: 22, fontVariant: "bold" }}>
          Choose your preference
        </Text>
      </View>
      <View style={{ flex: 2, marginTop: 30 }}>
        <Pressable
          style={{
            padding: 10,
            backgroundColor: "#fff",
            borderRadius: 10,
            marginBottom: 20,
            width: 190,
            height: 80,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => navigation.navigate("CustDetails")}
        >
          <Text style={{ fontSize: 16, fontVariant: "bold" }}>
            View Customer Details
          </Text>
        </Pressable>
        <Pressable
          style={{
            padding: 10,
            backgroundColor: "#fff",
            borderRadius: 10,
            width: 190,
            height: 80,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => navigation.navigate("SelfDonation")}
        >
          <Text style={{ fontSize: 16, fontVariant: "bold" }}>
            Self donation
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default PreferenceScreen;

const styles = StyleSheet.create({
  container: {},
});
