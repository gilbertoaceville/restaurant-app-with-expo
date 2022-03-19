import React from "react";
import { Spacer } from "../spacer/spacer.component";
import {
  HeaderCover,
  LeftSide,
  HeaderText,
  UserImage,
  RightSide,
} from "./header.styles";

export const Header = ({ svg, text, source, paddingHorizontal,position }) => {
  return (
    <HeaderCover
      flexDirection="row"
      paddingHorizontal={paddingHorizontal}
      position={position}
    >
      <LeftSide flexDirection="row" width="auto" justifyContent="flex-start">
        {svg}
        {svg && <Spacer size="medium" position="right" />}
        {text ? <HeaderText variant="smallTitle">{text}</HeaderText> : null}
      </LeftSide>
      {source ? (
        <RightSide>
          <UserImage source={source} />
        </RightSide>
      ) : null}
    </HeaderCover>
  );
};

Header.defaultProps = {
  text: "Header",
};
