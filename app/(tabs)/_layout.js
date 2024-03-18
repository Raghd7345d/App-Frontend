import { Tabs } from "expo-router";

export default function Stack() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
      }}
    >
      <Tabs.Screen name="index" />
    </Tabs>
  );
}
