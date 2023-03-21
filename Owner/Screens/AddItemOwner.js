import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { Image } from "react-native";
import { Pressable } from "react-native";
import { Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

const AddItemOwner = () => {
  const [showThankYouModal, setShowThankYouModal] = useState(false);
  const navigation = useNavigation();
  const [foodObject, setFoodObject] = useState([
    {
      foodName: "fruits",
      quantity: 3,
    },
    {
      foodName: "Parota",
      quantity: 25,
    },
  ]);
  const [foodName, setFoodName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [addItem, setAddItem] = useState(false);

  function funcName() {}

  const handleDonatePress = () => {
    // Code to process the donation goes here
    setShowThankYouModal(true);
  };

  const handleCloseModal = () => {
    navigation.navigate("Login");
  };
  return (
    <View style={{ width: "100%", height: "100%", backgroundColor: "#ffba00" }}>
      <Image
        source={require("../../assets/foodnest.png")}
        style={{
          width: "70%",
          height: 120,
          marginTop: 70,
          marginRight: 30,
        }}
      />
      <View>
        <Text style={{ fontSize: 20, marginLeft: 10, fontWeight: "bold" }}>
          Food Details
        </Text>
        <View style={{ flexDirection: "row", padding: 10 }}>
          <Text
            style={{
              fontSize: 15,
              marginLeft: 10,
              fontWeight: "bold",
              marginRight: 10,
            }}
          >
            Food Name:
          </Text>
          <Text>Fruits</Text>
        </View>
        <View style={{ flexDirection: "row", padding: 10 }}>
          <Text
            style={{
              fontSize: 15,
              marginLeft: 10,
              marginRight: 10,
              fontWeight: "bold",
            }}
          >
            Quantity
          </Text>
          <Text>3</Text>
        </View>
        <View style={{ flexDirection: "row", padding: 10 }}>
          <Text
            style={{
              fontSize: 15,
              marginLeft: 10,
              fontWeight: "bold",
              marginRight: 10,
            }}
          >
            Food Name:
          </Text>
          <Text>Parota</Text>
        </View>
        <View style={{ flexDirection: "row", padding: 10 }}>
          <Text
            style={{
              fontSize: 15,
              marginLeft: 10,
              marginRight: 10,
              fontWeight: "bold",
            }}
          >
            Quantity
          </Text>
          <Text>25</Text>
        </View>
        <View
          style={{ width: "100%", height: "100%", flexDirection: "column" }}
        >
          <View
            style={{
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Pressable
              style={{
                alignItems: "center",
                backgroundColor: "#FF2323",
                borderRadius: 20,
                justifyContent: "center",
                width: 120,
                height: 60,
              }}
              onPress={() => setAddItem((prev) => !prev)}
            >
              <Text style={{ color: "white" }}>Add Item +</Text>
            </Pressable>
            {addItem && (
              <View
                style={{
                  marginTop: 20,
                  backgroundColor: "white",
                  padding: 10,
                  borderRadius: 20,
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <TextInput
                  value={foodName}
                  placeholder="enter the food to be donated"
                  style={{
                    width: "80%",
                    height: 60,
                    backgroundColor: "#fff",
                    borderRadius: 10,
                    marginBottom: 10,
                    padding: 5,
                    borderColor: "#000",
                    borderWidth: 2,
                  }}
                  onChangeText={setFoodName}
                />
                <TextInput
                  value={quantity}
                  placeholder="enter the quantity to be donated"
                  style={{
                    width: "80%",
                    height: 60,
                    backgroundColor: "#fff",
                    borderRadius: 10,
                    padding: 5,
                    borderColor: "#000",
                    borderWidth: 2,
                  }}
                  onChangeText={setQuantity}
                />
                <Pressable
                  style={{
                    alignItems: "center",
                    backgroundColor: "#000",
                    borderRadius: 20,
                    justifyContent: "center",
                    alignItems: "center",
                    width: "60%",
                    height: 60,
                    marginTop: 20,
                  }}
                >
                  <Text style={{ color: "white" }}>Submit</Text>
                </Pressable>
              </View>
            )}
            <Pressable
              style={{
                alignItems: "center",
                backgroundColor: "#000",
                borderRadius: 20,
                justifyContent: "center",
                width: 120,
                height: 60,
                marginTop: 20,
              }}
            >
              <Text style={{ color: "white" }} onPress={handleDonatePress}>
                Donate
              </Text>
            </Pressable>
          </View>
          <Modal
            visible={showThankYouModal}
            animationType="fade"
            transparent={true}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>
                  Thank you for your donation!
                </Text>
                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={handleCloseModal}
                >
                  <Text style={styles.modalButtonText}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    </View>
  );
};

export default AddItemOwner;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 5,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 5,
  },
  modalButtonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
