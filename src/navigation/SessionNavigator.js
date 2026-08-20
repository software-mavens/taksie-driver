import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SessionScreen from "../screens/Session/SessionScreen";
import LiveSessionScreen from "../screens/Session/LiveSessionScreen";

const Stack = createNativeStackNavigator();

export default function SessionNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="StartSession"
        component={SessionScreen}
      />

      <Stack.Screen
        name="LiveSession"
        component={LiveSessionScreen}
      />
    </Stack.Navigator>
  );
}