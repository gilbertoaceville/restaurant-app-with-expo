import * as React from "react";
import { Text, View, ScrollView } from "react-native";
import {
  MaterialCommunityIcons,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useState } from "react";
import { Divider } from "../Divider";
import { HeroSection } from "../HeroSection";
import { HorizontalFoodCard } from "../HorizontalFoodCard/horizontal-food-card.component";
import { VerticalFoodCard } from "../VerticalFoodCard/vertical-food-card.component";
import { SearchBar } from "../SearchBar/searchbar.component";

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View
      style={{ flex: 1, justifyContent: "center", backgroundColor: "blue" }}
    >
      <ScrollView>
        <Divider />
        <HeroSection />
        <HorizontalFoodCard />
        <VerticalFoodCard />
        <SearchBar />
      </ScrollView>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export const BottomNavigation = () => {
  const [active, setActive] = useState(false);

  return (
    // <NavigationContainer>
    <Tab.Navigator
      screenOptions={{
        tabBarInactiveBackgroundColor: "black",
        tabBarActiveBackgroundColor: "black",
        activeTintColor: "#B122E5",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",

          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Nortification"
        component={SettingsScreen}
        options={{
          tabBarLabel: "Order",

          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="shopping" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={SettingsScreen}
        options={{
          tabBarLabel: "Notification",
          tabBarIcon: ({ color }) => (
            <Ionicons name="notifications" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Delivery"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="truck-delivery"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="favorite" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
    // </NavigationContainer>
  );
};
