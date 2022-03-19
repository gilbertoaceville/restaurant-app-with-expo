import React, { useMemo, useEffect, useReducer, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";

// import Orders from "../../features/Orders/orders.screen";
// import Cart from "../../features/Cart/cart.screen";
// import Test from "../../features/Test/test.screen";
// import Notifications from "../../features/Notifications/notifications.screen";
// import OrderStatus from "../../features/OrderStatus/orderStatus.screen";
// import OrderDetails from "../../features/OrderDetails/orderDetails.screen";
// import UserProfile from "../../features/UserProfile/UserProfile.screen";
// import Checkout from "../../features/Checkout/checkout.screen";
import DeliveryManagementCard from "../../components/deliveryManagementCard/deliveryManagementCard.component";
// import Delivery from "../../features/Delivery/delivery.screen";
// import DishDetails from "../../features/DishDetails/dishDetails.screen";
// import PaymentMethod from "../../features/PaymentMethod/paymentMethod.screen";
// import MapTracking from "../../features/MapTracking/mapTracking.screen";
// import PaymentSuccess from "../../features/PaymentSuccess/paymentSuccess.screen";
// import Favourites from "../../features/Favourites/favourites.screen";

// import { OnboardingNavigator } from "./onboarding.navigator";
// import { AuthNavigator } from "./auth.navigator";
// import { HomeNavigator } from "./home.navigator";
// import { BottomNavigation } from "../../components/BottomNavigation/bottom-navigation.component";

// import { SplashScreen } from "../../features/onboarding/splash.screen";

export const AppNavigator = () => {
  const initialState = {
    showSplashScreen: true,
    showOnboarding: false,
    userToken: null,
    accountType: null,
  };

  //CREATE AUTHREDUCER
  const authReducer = (prevState, action) => {
    switch (action.type) {
      case "SHOW_ONBOARDING":
        return {
          ...prevState,
          showSplashScreen: false,
          showOnboarding: true,
          userToken: null,
          accountType: null,
        };
      case "RETRIEVE_TOKEN":
        return {
          ...prevState,
          showSplashScreen: false,
          showOnboarding: false,
          userToken: action.token,
          accountType: action.accountType,
        };
      case "LOGIN":
        return {
          ...prevState,
          showSplashScreen: false,
          showOnboarding: false,
          accountType: action.accountType,
          userToken: action.token,
        };
      case "SIGNOUT":
        return {
          ...prevState,
          userToken: null,
          accountType: null,
          showSplashScreen: false,
          showOnboarding: false,
        };
    }
  };

  // SET UP USEREDUCER
  const [authState, dispatch] = useReducer(authReducer, initialState);

  const get = async () => {
    let userToken = null;
    let accountType = null;

    //demo code, remove later and uncomment below
    setTimeout(async () => {
      dispatch({ type: "SHOW_ONBOARDING" });
    }, 5000);

    // try {
    //   userToken = await AsyncStorage.getItem("token");
    //   accountType = await AsyncStorage.getItem("accountType");
    // } catch (e) {
    //   ShowMessage(type.ERROR, "There was error");
    // }
    // dispatch({ type: "RETRIEVE_TOKEN", token: userToken, accountType });
  };

  // useEffect(() => {
  //   //SplashScreen.hide();
  //   get();
  // }, []);

  // if (authState.showSplashScreen) {
  //   return <SplashScreen />;
  // }

  // if (authState.showOnboarding) {
  //   return null;
  // }

  // const {navigate} = this.props.navigation;

  // setTimeout(() => {
  //     navigate('Login'); //this.props.navigation.navigate('Login')
  // }, 5000);

  return (
    <DeliveryManagementCard />
  );
};

// import React, { useMemo, useEffect, useReducer, useContext } from "react";
// import { useQuery } from "@apollo/client";
// import { NavigationContainer } from "@react-navigation/native";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// import navigationTheme from "../theme/navigation-theme";

// import { AuthContext } from "../../services/auth/auth.context";

// import { SplashScreen } from "../../features/Authentication/splash.screen";

// import ShowMessage, {
//   type,
// } from "../../components/showMessage/show-message.component";

// //import navigators
// import { AuthNavigator } from "./auth.navigator";
// import { SideDrawerNavigator } from "./side-drawer.navigator";
// // import { HomeNavigator } from "./home.navigator";
// // import { OrderNavigator } from "./order.navigator";
// // import { ProductNavigator } from "./product.navigator";
// // import { StoreNavigator } from "./store.navigator";
// // import { NotificationScreen } from "../../features/Notification/notification.screen";
// // import { ChatDetails } from "../../features/Chats/chatdetails.screen";
// // import { ProductListScreen } from "../../features/Products/product-list.screen";

// import { GET_CURRENT_USER } from "../../services/auth/auth.service";

// export const AppNavigator = () => {
//   const initialState = {
//     isLoading: true,
//     userToken: null,
//     accountType: null,
//   };

//   //CREATE AUTHREDUCER
//   const authReducer = (prevState, action) => {
//     switch (action.type) {
//       case "RETRIEVE_TOKEN":
//         return {
//           ...prevState,
//           isLoading: false,
//           userToken: action.token,
//           accountType: action.accountType,
//         };
//       case "LOGIN":
//         return {
//           ...prevState,
//           isLoading: false,
//           accountType: action.accountType,
//           userToken: action.token,
//         };
//       case "SIGNOUT":
//         return {
//           ...prevState,
//           userToken: null,
//           accountType: null,
//           isLoading: false,
//         };
//     }
//   };

//   // SET UP USEREDUCER
//   const [authState, dispatch] = useReducer(authReducer, initialState);

//   //setup query
//   const { data, loading, error } = useQuery(GET_CURRENT_USER);

//   // SET UP AUTHENTICATION CONTEXT
//   const authContext = useMemo(
//     () => ({
//       //signIn method defined on Context, so its accessible to other components
//       signIn: async (token, accountType, email) => {
//         try {
//           await AsyncStorage.setItem("token", token);
//           await AsyncStorage.setItem("accountType", accountType);
//           await AsyncStorage.setItem("email", email);
//         } catch (e) {
//           ShowMessage(type.ERROR, e.toString());
//         }
//         dispatch({ type: "LOGIN", token, accountType });
//       },

//       //signOut method
//       signOut: async () => {
//         try {
//           await AsyncStorage.clear();
//         } catch (e) {
//           ShowMessage(type.ERROR, "There was error");
//         }
//         dispatch({ type: "SIGNOUT" });
//       },

//       //getCurrentUser method, defined to get the current User and Profile
//       getUserProfile: async () => {
//         if (data && data.getCurrentUser && data.getConsumerProfile) {
//           const { getConsumerProfile, getCurrentUser } = data;
//           console.log(
//             "Returning from context: ",
//             getConsumerProfile,
//             getCurrentUser
//           );

//           return {
//             currentUser: getCurrentUser,
//             consumerProfile: getConsumerProfile,
//           };
//         }
//       },
//     }),
//     [data]
//   );

//   const get = async () => {
//     let userToken = null;
//     let accountType = null;

//     //demo code, remove later and uncomment below
//     // setTimeout(async () => {
//     //   try {
//     //     userToken = await AsyncStorage.getItem("token");
//     //     accountType = await AsyncStorage.getItem("accountType");
//     //   } catch (e) {
//     //     ShowMessage(type.ERROR, "There was error");
//     //   }
//     //   dispatch({ type: "RETRIEVE_TOKEN", token: userToken, accountType });
//     // }, 2000);

//     try {
//       userToken = await AsyncStorage.getItem("token");
//       accountType = await AsyncStorage.getItem("accountType");
//     } catch (e) {
//       ShowMessage(type.ERROR, "There was error");
//     }
//     dispatch({ type: "RETRIEVE_TOKEN", token: userToken, accountType });
//   };

//   useEffect(() => {
//     //SplashScreen.hide();
//     get();
//   }, []);

//   if (authState.isLoading) {
//     return <SplashScreen />;
//   }

//   return (
//     <AuthContext.Provider value={authContext}>
//       <NavigationContainer>
//         {authState.userToken ? <SideDrawerNavigator /> : <AuthNavigator />}
//       </NavigationContainer>
//     </AuthContext.Provider>
//   );
// };
