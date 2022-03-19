import React, { useState } from "react";
import { View, Text } from "react-native";
import {
  AuthContainer,
  Container,
  Appearance,
  Successful,
  ButtonCover,
  Checkemail,
} from "./successful.styles";
import { FontAwesome, AntDesign } from "@expo/vector-icons";

import Button from "../../components/button/button.component";

const GetStarted = () => {
  return (
    <AuthContainer>
      <Container>
        <Appearance>
          <FontAwesome name="facebook-f" size={20} color="#fff" />
        </Appearance>
        <Successful>Successful</Successful>
        <Checkemail>Congratulations! your password has been changed</Checkemail>
        <View
          style={{ marginTop: 20, flexDirection: "row", alignItems: "center" }}
        >
          <Checkemail>Can't get email? </Checkemail>
          <Text style={{ color: "#F38B1C" }}>Resubmit</Text>
        </View>
      </Container>
      <ButtonCover>
        <Button text="Sign In" />
      </ButtonCover>
    </AuthContainer>
  );
};

export default GetStarted;
