import * as React from "react";
import { Image, Text, View,  } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import {
  ViewCover,
  OnboardHeader,
  OnboardLabel,
  BottomSection,
  BottomCover,
  EachDotCover,
  AuthContainer,
  ImageIcon,
  EachDot,
} from "./onboard.styles";

function Onboard() {
  const [conter, setConter] = React.useState(0);

  const setNextCircle = () => {
    if (conter === 2) {
      return;
    }
    setConter(conter + 1);
  };

  const setBack = (i, e) => {
    setConter(i)
  }

  const mappedDot = ["", "", ""].map((v, i) => {
    return (
      <EachDot
        key={Math.random()}
        onPress={setBack.bind(this, i)}
        style={{ backgroundColor: i === conter ? "#F38B1C" : "#C8C8C8" }}
      ></EachDot>
    );
  });

  return (
    <AuthContainer>
      <ViewCover>
        <ImageIcon
          source={
            conter === 0
              ? require("../../assets/onboard1.png")
              : conter === 1
              ? require("../../assets/onboard2.png")
              : require("../../assets/onboard3.png")
          }
        />
        <OnboardHeader>
          {conter === 0
            ? "Nearby restaurants"
            : conter === 1
            ? "Select the Favorites Menu"
            : "Delivery and Tracking"}
        </OnboardHeader>
        <OnboardLabel>
          {conter === 0
            ? "You don't have to go far to find a good restaurant, we have provided all the restaurants that is near you"
            : conter === 1
            ? "Now eat well, don't leave the house,You can choose your favorite food only with one click"
            : "Track all your dishes as it Is been delivered to you in realtime"}
        </OnboardLabel>
      </ViewCover>
      <BottomSection>
        <BottomCover>
          <EachDotCover>
            {mappedDot}
          </EachDotCover>
          <AntDesign
            onPress={setNextCircle}
            name="arrowright"
            size={18}
            color="#F38B1C"
            style={{display: "none"}}
          />
        </BottomCover>
      </BottomSection>
    </AuthContainer>
  );
}

export default Onboard;
