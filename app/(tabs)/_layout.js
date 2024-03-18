// import { Stack } from "expo-router";
// import { Platform } from "react-native";
// import * as NavigationBar from "expo-navigation-bar";
// import { StatusBar } from "expo-status-bar";
// import { UserProvider } from "../../context/UserProvider";
// {
//   Platform.OS === "android" ? NavigationBar.setPositionAsync("absolute") : "";
// }
// {
//   Platform.OS === "android"
//     ? NavigationBar.setBackgroundColorAsync("transparent")
//     : "";
// }
// {
//   Platform.OS === "android" ? NavigationBar.setButtonStyleAsync("light") : "";
// }

// export default function Stack() {
//   return (
//     <UserProvider>
//       <Stack
//         screenOptions={{
//           headerShown: false,
//         }}
//       >
//         <Stack.Screen name="(tabs)" />
//         <Stack.Screen name="Login" options={{ presentation: "modal" }} />
//         <Stack.Screen name="Camera" options={{ presentation: "modal" }} />
//       </Stack>
//       <StatusBar style="light" />
//     </UserProvider>
//   );
// }
