import React from "react";
import { StyleSheet, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { theme } from "../../infrastructure/theme/index";
import {
  PopUpContainer,
  PopUpText,
} from "../../features/Customer/customer.styles";

function PopUp({ content }) {
  return (
    <PopUpContainer>
      <MaterialCommunityIcons
        name="weather-cloudy-alert"
        size={35}
        color={theme.colors.black.soft}
      />
      <PopUpText>{content}</PopUpText>
    </PopUpContainer>
  );
}

export default PopUp;
