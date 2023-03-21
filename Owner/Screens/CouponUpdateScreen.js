import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Image } from "react-native";
import { TextInput } from "react-native";
import { Pressable } from "react-native";

export default function CouponUpdateScreen() {
  const customer = {
    id: 1,
    phone: "555-1234",
    coupon: "FREESHIPPING",
    timesDonated: 3,
    lastDonatedDate: "2022-03-01",
  };
  const [coupon, setCoupon] = useState("");
  const [foodName, setFoodName] = useState("");
  const [quantity, setQuantity] = useState("");

  const renderItem = ({ item }) => (
    <CustomerTable
      id={item.id}
      phone={item.phone}
      coupon={item.coupon}
      timesDonated={item.timesDonated}
      lastDonatedDate={item.lastDonatedDate}
    />
  );

  return (
    <View style={styles.container}>
      <View style={{ width: "100%", height: "100%", alignItems: "center" }}>
        <Image
          source={require("../../assets/foodnest.png")}
          style={{
            width: "70%",
            height: 120,
            marginTop: 70,
            marginRight: 30,
          }}
        />
        <View
          style={{
            width: "100%",
            height: "100%",
            marginLeft: "40%",
            marginTop: 20,
          }}
        >
          <View style={{ flexDirection: "column" }}>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontWeight: "bold", marginRight: 10 }}>
                Phone:
              </Text>
              <Text>{customer.phone}</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontWeight: "bold", marginRight: 10 }}>
              Last Donated Date:
            </Text>
            <Text>{customer.lastDonatedDate}</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontWeight: "bold", marginRight: 10 }}>Count:</Text>
            <Text>{customer.timesDonated}</Text>
          </View>
          <View>
            <Text
              style={{
                color: "white",
                marginTop: 20,
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              Coupon code
            </Text>
          </View>
          <TextInput
            placeholder="coupon code"
            value={coupon}
            style={styles.loginInput}
            onChangeText={setCoupon}
          />
          <View
            style={{
              marginLeft: 30,
              marginTop: 30,
            }}
          >
            <Pressable
              style={{
                width: 120,
                height: 60,
                padding: 10,
                backgroundColor: "#000",
                borderRadius: 20,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: "white" }}>Update</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#ffba00",
    alignItems: "center",
  },
  loginInput: {
    backgroundColor: "#f2f2f2",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    marginRight: 30,
    width: "60%",
    marginTop: 10,
  },
});
