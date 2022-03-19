import React from "react";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { GetStartedScreen } from "../../features/Onboarding/getstarted.screen";
import { OnboardScreen } from "../../features/Onboarding/onboard.screen";
import { SplashScreen } from "../../features/Onboarding/splash.screen";

const OnboardingStack = createStackNavigator();
const screenOptions = {
  //   ...TransitionPresets.ModalPresentationIOS,
  headerShown: false,
};

export const OnboardingNavigator = () => {
  const { Navigator, Screen } = OnboardingStack;

  return (
    <Navigator
      //headerMode="none"
      screenOptions={screenOptions}
      initialRouteName="Onboard"
    >
      {/* <OnboardingStack.Screen name="Splash" component={SplashScreen} /> */}
      <Screen name="Splash" component={SplashScreen} />
      <Screen name="Onboard" component={OnboardScreen} />
      <Screen name="GetStarted" component={GetStartedScreen} />
    </Navigator>
  );
};
