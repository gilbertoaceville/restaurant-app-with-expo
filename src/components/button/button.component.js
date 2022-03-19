import React from "react";
import { Spacer } from "../spacer/spacer.component";
import { ButtonContainerWrapper, ButtonWrapper, ButtonText } from "./button.styles";

const ButtonContainer = ({
  backgroundColor = "#f38b1c",
  color = "#fff",
  text = "Register",
  rightIcon,
  leftIcon,
}) => {
  return (
    <ButtonContainerWrapper color={color}>
      <ButtonWrapper
        flexDirection="row"
        style={{ backgroundColor }}
        onPress={() => console.log("onPress")}
      >
        {rightIcon ? rightIcon : null}
        {rightIcon ? <Spacer position="right" size="medium" /> : null}
        <ButtonText variant="smallBody">{text}</ButtonText>
        {leftIcon ? <Spacer position="left" size="medium" /> : null}
        {leftIcon ? leftIcon : null}
      </ButtonWrapper>
    </ButtonContainerWrapper>
  );
};
export default ButtonContainer;
