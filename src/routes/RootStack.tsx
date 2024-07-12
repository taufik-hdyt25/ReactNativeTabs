
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import Tabs1 from "./Tabs/Tabs1";

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="Tabs1" component={Tabs1} />
    </Stack.Navigator>
  );
};

export default RootStack;
