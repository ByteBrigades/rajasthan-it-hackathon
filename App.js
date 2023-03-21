import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import AddItemOwner from "./Owner/Screens/AddItemOwner";
import CouponUpdateScreen from "./Owner/Screens/CouponUpdateScreen";
import { DonateScreen } from "./Owner/Screens/Donateme";
import Hotel from "./Owner/Screens/Hotel";
import Login from "./Owner/Screens/Login";
import OTPScreen from "./Owner/Screens/OtpScreen";
import PreferenceScreen from "./Owner/Screens/PreferenceScreen";
import QrCodeScan from "./Owner/Screens/QrCodeScan";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Otp" component={OTPScreen} />
        <Stack.Screen name="QRScreen" component={QrCodeScan} />
        <Stack.Screen name="Donate" component={DonateScreen} />
        <Stack.Screen name="Pref" component={PreferenceScreen} />
        <Stack.Screen name="CustDetails" component={Hotel} />
        <Stack.Screen name="CouponUpdate" component={CouponUpdateScreen} />
        <Stack.Screen name="SelfDonation" component={AddItemOwner} />
      </Stack.Navigator>
      {/* <Login /> */}
      {/* <OTPScreen /> */}
      {/* <QrCodeScan /> */}
      {/* <DonateScreen /> */}
      {/* <Hotel /> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#",
    alignItems: "center",
    justifyContent: "center",
  },
});
