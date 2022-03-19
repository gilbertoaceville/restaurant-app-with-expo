import * as React from "react";
import { Image } from "react-native";
import Crunchies from "../../assets/Crunchies.png";
import {
  VerifyText,
  VerifyLabel,
  VerifyTextContainer,
  AuthContainer,
  ImageIcon,
} from "./blurb.styles";

export const Blurb = ({ header, label, image }) => {
  return (
    <AuthContainer>
      {image && <ImageIcon source={image} />}
      <VerifyTextContainer>
        <VerifyText>{header}</VerifyText>
        <VerifyLabel>{label}</VerifyLabel>
      </VerifyTextContainer>
    </AuthContainer>
  );
};

Blurb.defaultProps = {
  header: "Yes",
  label: "This is america",
  image: Crunchies,
};
