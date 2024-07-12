import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useEffect, useRef } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import Icon, { Icons } from "../../components/Icons";
import Hometabs1 from "../../screens/Hometabs1";

const Tab = createBottomTabNavigator();

const TabArr = [
  {
    route: "Home",
    label: "Home",
    type: Icons.Ionicons,
    activeIcon: "grid",
    inActiveIcon: "grid-outline",
    component: Hometabs1,
  },
  {
    route: "Like",
    label: "Like",
    type: Icons.MaterialCommunityIcons,
    activeIcon: "heart-plus",
    inActiveIcon: "heart-plus-outline",
    component: Hometabs1,
  },
  {
    route: "Search",
    label: "Search",
    type: Icons.MaterialCommunityIcons,
    activeIcon: "timeline-plus",
    inActiveIcon: "timeline-plus-outline",
    component: Hometabs1,
  },
  {
    route: "Account",
    label: "Account",
    type: Icons.FontAwesome,
    activeIcon: "user-circle",
    inActiveIcon: "user-circle-o",
    component: Hometabs1,
  },
];

const Tabs1 = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          position: "absolute",
          bottom: 16,
          right: 16,
          left: 16,
          borderRadius: 16,
        },
      }}
    >
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: (props) => <TabButton {...props} item={item} />,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default Tabs1;

const TabButton = (props: any) => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef<any>(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate({
        0: { scale: 0.5, rotate: "0deg" }, // default 
        1: { scale: 1.5, rotate: "360deg" }, // after 
      });
    } else {
      viewRef.current.animate({
        0: { scale: 1.5, rotate: "360deg" },
        1: { scale: 1, rotate: "0deg" },
      });
    }
  }, [focused]);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}
    >
      <Animatable.View ref={viewRef} duration={1000} style={styles.container}>
        <Icon
          type={item.type}
          name={focused ? item.activeIcon : item.inActiveIcon}
          color={focused ? "#40A2D8" : "grey"}
        />
      </Animatable.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // main x center vertikal
    alignItems: "center", // main x center horizontal
  },
});
