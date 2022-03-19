import React from "react";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { OrdersScreen } from "../../features/Orders/orders.screen";
import { OrderDetailsScreen } from "../../features/Orders/order-details.screen";

const OrderStack = createStackNavigator();
const screenOptions = {
  //...TransitionPresets.ModalPresentationIOS,
  // activeBackgroundColor: theme.colors.white,
  // tabBarActiveTintColor: theme.colors.primary,
  headerShown: false,
};

export const OrderNavigator = () => {
  return (
    <OrderStack.Navigator
      screenOptions={screenOptions}
      initialRouteName="Orders"
    >
      <OrderStack.Screen name="Orders" component={OrdersScreen} />
      <OrderStack.Screen name="OrderDetail" component={OrderDetailsScreen} />
    </OrderStack.Navigator>
  );
};
