// import React from "react";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import { CustomSidebarMenu } from "../../features/SideDrawer/side-drawer.screen";
// import { HomeNavigator } from "./home.navigator";
// import { OrderNavigator } from "./order.navigator";
// import { ProductNavigator } from "./product.navigator";
// import { StoreNavigator } from "./store.navigator";
// import { HelpAndSupportScreen } from "../../features/Settings/help-support.screen";
// import { Language } from "../../features/Settings/language-settings.screen";
// import { Chat } from "../../features/Chats/chat.screen";
// import { FoodServiceScreen } from "../../features/Stores/food-service.screen";
// import { CustomerProfile } from "../../features/Customer/customer-profile.screen";
// import { LogisticsScreen } from "../../features/Logistics/logistics.screen";

// const SideDrawer = createDrawerNavigator();

// export const SideDrawerNavigator = () => {
//   const { Navigator, Screen } = SideDrawer;
//   return (
//     <Navigator
//       //headerMode="none"
//       initialRouteName="Home"
//       drawerContent={(props) => <CustomSidebarMenu {...props} />}
//       drawerStyle={{ backgroundColor: "transparent" }}
//       // options={{
//       //   title: "Home"
//       // }}
//     >
//       <Screen name="Home" component={HomeNavigator} />
//       <Screen name="Stores" component={StoreNavigator} />
//       <Screen name="FoodService" component={FoodServiceScreen} />
//       <Screen name="Logistics" component={LogisticsScreen} />
//       <Screen name="Order" component={OrderNavigator} />
//       <Screen name="Chats" component={Chat} />
//       <Screen name="Settings" component={Language} />
//       <Screen name="Language" component={Language} />
//       <Screen name="HelpAndSupport" component={HelpAndSupportScreen} />
//       <Screen name="CustomerProfile" component={CustomerProfile} />
//     </Navigator>
//   );
// };
