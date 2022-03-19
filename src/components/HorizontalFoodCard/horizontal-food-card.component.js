import React from "react";
import { View } from "react-native";
import {
  
  HorizontalContainer,
  LogoImage,
  Name,
  Description,
  FoodImageContainer,
  Order,
  FoodImage,
  ContainerWrapper,
  Details,
} from "./styles";

import Logo from "../../assets/logo.png";
import Food from "../../assets/pizza.png";

export const HorizontalFoodCard = ({name,description,onPress,source}) => {
  return (
    <HorizontalContainer
    colors={['#f9a923', '#eccc99']}
    >
      <ContainerWrapper>
        <Details>
          <LogoImage source={Logo} />
          <Name variant="smallTitle">{name}</Name>
          <Description  variant="small">{description}</Description>
          <Order variant="small" onPress={onPress}>Order</Order>
        </Details>

        <FoodImageContainer>
          <FoodImage source={source} />
        </FoodImageContainer>
      </ContainerWrapper>
    </HorizontalContainer>
  );
};
