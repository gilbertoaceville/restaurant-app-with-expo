import React from "react";
import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import {
  MaterialCommunityIcons,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";
import { theme } from "../../infrastructure/theme";
import navigationTheme from "../theme/navigation-theme";

import { SafeArea } from "../../components/utility/safe-area.component";

//components for the Tab Navigator
import { DeliveryScreen } from "../../features/Delivery/delivery.screen";
import { NotificationsScreen } from "../../features/Notifications/notifications.screen";
import { FavouritesScreen } from "../../features/Favourites/favourites.screen";
// import { Home } from "../../features/Home/home.screen";
import { OrderNavigator } from "./order.navigator";

//components for the HomeScreen Stack Navigator
// import { LogisticsScreen } from "../../features/Logistics/logistics.screen";
// import { StoreNavigator } from "./store.navigator";
// import { FoodServiceScreen } from "../../features/Stores/food-service.screen";
// import { CustomerProfile } from "../../features/Customer/customer-profile.screen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeScreen = () => {
  // return <Home />;
  return <Text>Home</Text>;
};

const OrdersScreen = () => {
  return <OrderNavigator />;
};

const NotificationScreen = () => {
  return <NotificationsScreen />;
};

const DeliveriesScreen = () => {
  return <DeliveryScreen />;
};

const FavouriteScreen = () => {
  return <FavouritesScreen />;
};

const TAB_ICONS = {
  Home: "home",
  Orders: "shopping",
  Notification: "bell",
  Delivery: "truck-delivery",
  Favourite: "heart",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICONS[route.name];

  return {
    tabBarIcon: ({ size, color }) => (
      <MaterialCommunityIcons name={iconName} size={size} color={color} />
    ),
    headerShown: false,
    tabBarActiveBackgroundColor: theme.colors.white,
    tabBarActiveTintColor: theme.colors.primary,
  };
};

// const HomeScreenStackNavigator = () => {
//   return (
//     <Stack.Navigator //headerMode="none">
//       <Stack.Screen name="HomeMenu" component={HomeScreen} />
//       <Stack.Screen name="Stores" component={StoreNavigator} />
//       <Stack.Screen name="Food" component={FoodServiceScreen} />
//       <Stack.Screen name="Logistics" component={LogisticsScreen} />
//     </Stack.Navigator>
//   );
// };

export const HomeNavigator = () => {
  return (
    <Tab.Navigator screenOptions={createScreenOptions}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Orders" component={OrderNavigator} />
      <Tab.Screen name="Notification" component={NotificationScreen} />
      <Tab.Screen name="Delivery" component={DeliveriesScreen} />
      <Tab.Screen name="Favourite" component={FavouriteScreen} />
    </Tab.Navigator>
  );
};
