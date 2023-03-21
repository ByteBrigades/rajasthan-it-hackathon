import React, { useState } from "react";
import { Image } from "react-native";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";

export const DonateScreen = () => {
  const [donationAmount, setDonationAmount] = useState(0);
  const [showThankYouModal, setShowThankYouModal] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();
  const resturant = route.params.resturant;

  const handleDonatePress = () => {
    // Code to process the donation goes here
    setShowThankYouModal(true);
  };

  const handleCloseModal = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/foodnest.png")}
        style={{ width: "60%", height: 100, marginBottom: 50, marginRight: 30 }}
      />
      {resturant && (
        <View>
          <Text
            style={{
              marginTop: 20,
              marginBottom: 20,
              fontSize: 20,
              fontWeight: 600,
            }}
          >
            Welcome to the {resturant}
          </Text>
          <Text
            style={{
              marginBottom: 20,
              marginTop: 20,
              textAlign: "center",
            }}
          >
            Please Provide your contribution
          </Text>
        </View>
      )}
      <TouchableOpacity style={styles.donateButton} onPress={handleDonatePress}>
        <Text style={styles.donateButtonText}>Donate the food</Text>
      </TouchableOpacity>
      <Modal
        visible={showThankYouModal}
        animationType="fade"
        transparent={true}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Thank you for your donation!</Text>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
    flexDirection: "column",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 20,
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 20,
    textAlign: "right",
  },
  donateButton: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 5,
  },
  donateButtonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
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
