import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  DevSettings,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Pressable } from "react-native";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import axios from "axios";

const QRCodeScan = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanResult, setScanResult] = useState("");
  const [scanQR, setScanQR] = useState(false);
  const [updatedUser, setUpdatedUser] = useState("");
  const navigation = useNavigation();
  const route = useRoute();

  const user = route.params.user;

  const handlePressNext = async () => {
    if (scanResult) {
      await axios
        .post("http://192.168.137.1:8080/customers/scanned", {
          phoneNumber: user.phoneNumber,
        })
        .then((res) => {
          console.log("Incremented user ", res.data);
          setUpdatedUser(res.data);
          if (updatedUser) {
            navigation.navigate("Donate", {
              resturant: scanResult,
              updatedUser,
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    if (scanQR) {
      (async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === "granted");
      })();
    }
  }, [scanQR]);

  const handleBarCodeScanned = ({ data }) => {
    setScanResult(data);
  };
  if (scanQR) {
    if (hasPermission === null) {
      return (
        <View>
          <View
            style={{
              width: "100%",
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "black", margin: 20 }}>
              Requesting for camera permission
            </Text>
            <Pressable
              style={{
                backgroundColor: "#000",
                width: 120,
                height: 50,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => {
                setScanQR((prev) => !prev);
              }}
            >
              <View
                style={{
                  width: "100%",
                  height: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Pressable
                  style={{
                    backgroundColor: "#000",
                    width: 120,
                    height: 50,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onPress={() => {
                    setScanQR(false);
                  }}
                >
                  <Text
                    style={{
                      color: "#fff",
                      fontWeight: "bold",
                    }}
                  >
                    Exit QR
                  </Text>
                </Pressable>
              </View>
            </Pressable>
          </View>
        </View>
      );
    }
    if (hasPermission === false) {
      return (
        <View>
          <View
            style={{
              width: "100%",
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text>No access to camera</Text>
            <Pressable
              style={{
                backgroundColor: "#000",
                width: 120,
                height: 50,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => {
                setScanQR(false);
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                }}
              >
                Exit QR
              </Text>
            </Pressable>
          </View>
        </View>
      );
    }
  }

  return (
    <View style={styles.container}>
      {scanQR ? (
        <View>
          <BarCodeScanner
            onBarCodeScanned={handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
          />

          <View style={styles.resultContainer}>
            <Text style={styles.resultText}>{scanResult}</Text>
          </View>
          <View style={{ flexDirection: "row", marginTop: 50 }}>
            <TouchableOpacity style={styles.button} onPress={handlePressNext}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setScanResult("")}
            >
              <Text style={styles.buttonText}>Remove</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              width: "100%",
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Pressable
              style={{
                backgroundColor: "#000",
                width: 120,
                height: 50,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => {
                setScanQR(false);
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                }}
              >
                Exit QR
              </Text>
            </Pressable>
          </View>
        </View>
      ) : (
        <View
          style={{
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../../assets/foodnest.png")}
            style={{ width: "60%", height: 120, marginBottom: 50 }}
          />
          {user && (
            <View
              style={{
                flexDirection: "row",
                marginLeft: 10,
              }}
            >
              <Text style={{ marginBottom: 20, fontSize: 20 }}>Hello, </Text>
              <Text style={{ fontWeight: "bold" }}>{user.phoneNumber}</Text>
            </View>
          )}
          <Text style={{ fontSize: 20, marginBottom: 20 }}>
            Please scan the QR to donate{" "}
          </Text>
          <Pressable
            style={{
              backgroundColor: "#000",
              width: 120,
              height: 50,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => {
              setScanQR((prev) => !prev);
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              Scan QR
            </Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
    width: "100%",
  },
  resultContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  resultText: {
    fontSize: 24,
    color: "#fff",
  },
  button: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    alignSelf: "center",
  },
  buttonText: {
    fontSize: 16,
  },
});

export default QRCodeScan;
