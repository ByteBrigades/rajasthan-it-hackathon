import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Pressable, ScrollView } from "react-native";
import { View, Text, FlatList, StyleSheet } from "react-native";
const customers = [
  {
    id: 1,
    phone: "555-1234",
    coupon: "FREESHIPPING",
    timesDonated: 4,
    lastDonatedDate: "2022-03-01",
  },
  {
    id: 2,
    phone: "555-5678",
    coupon: "SAVE10",
    timesDonated: 1,
    lastDonatedDate: "2022-02-28",
  },
  {
    id: 3,
    phone: "555-5678",
    coupon: "SAVE10",
    timesDonated: 1,
    lastDonatedDate: "2022-02-28",
  },
  {
    id: 4,
    phone: "555-1234",
    coupon: "FREESHIPPING",
    timesDonated: 4,
    lastDonatedDate: "2022-03-01",
  },
  // more customers
];

const CustomerTable = ({
  id,
  phone,
  coupon,
  timesDonated,
  lastDonatedDate,
  navigation,
}) => (
  <View style={{ alignItems: "center" }}>
    <View style={styles.table}>
      <View style={{ flexDirection: "column" }}>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontWeight: "bold", marginRight: 10 }}>Phone:</Text>
          <Text>{phone}</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontWeight: "bold", marginRight: 10 }}>
          Last Donated Date:
        </Text>
        <Text>{lastDonatedDate}</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontWeight: "bold", marginRight: 10 }}>Count:</Text>
        <Text>{timesDonated}</Text>
      </View>
      {(timesDonated & (timesDonated - 1)) === 0 && timesDonated !== 0 && (
        <Pressable
          style={{
            width: 150,
            height: 50,
            backgroundColor: "#74EB4B",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
            padding: 5,
            marginTop: 10,
          }}
          onPress={() => navigation.navigate("CouponUpdate")}
        >
          <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>
            Generate Coupon
          </Text>
        </Pressable>
      )}
    </View>
  </View>
);

const Hotel = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <CustomerTable
      id={item.id}
      phone={item.phone}
      coupon={item.coupon}
      timesDonated={item.timesDonated}
      lastDonatedDate={item.lastDonatedDate}
      navigation={navigation}
    />
  );
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
        }}
      />
      <Text style={styles.heading1}>Hotel ABC</Text>
      <Text style={styles.heading2}>Customer List</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          width: "100%",
        }}
      >
        <FlatList
          data={customers}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  table: {
    padding: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#000",
    backgroundColor: "#fff",
    marginTop: 20,
    width: "80%",
    borderRadius: 20,
  },
  heading1: {
    padding: 5,
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
  },
  heading2: {
    marginTop: 40,
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Hotel;
