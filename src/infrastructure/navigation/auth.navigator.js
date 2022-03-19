import React from "react";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { SignInScreen } from "../../features/Authentication/signin.screen";
import { SignUpScreen } from "../../features/Authentication/signup.screen";
import { ForgotPassword } from "../../features/Authentication/forgot-password.screen";
import { VerifyEmail } from "../../features/Authentication/verify-email.screen";
import { ChangePhone } from "../../features/Authentication/change-phone.screen";
// import { SplashScreen } from "../../features/Authentication/splash.screen";

const AuthenticationStack = createStackNavigator();
const screenOptions = {
  //   ...TransitionPresets.ModalPresentationIOS,
  headerShown: false,
};

export const AuthNavigator = () => {
  const { Navigator, Screen } = AuthenticationStack;

  return (
    <Navigator
      //headerMode="none"
      screenOptions={screenOptions}
      initialRouteName="SignIn"
    >
      {/* <AuthenticationStack.Screen name="Splash" component={SplashScreen} /> */}
      <Screen name="SignIn" component={SignInScreen} />
      <Screen name="SignUp" component={SignUpScreen} />
      <Screen name="ForgotPassword" component={ForgotPassword} />
      <Screen name="VerifyEmail" component={VerifyEmail} />
      <Screen name="ChangePhone" component={ChangePhone} />
    </Navigator>
  );
};
