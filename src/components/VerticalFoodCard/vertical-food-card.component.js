import React from "react";
import { View } from "react-native";
import {
  ContainerView,
  FoodImage,
  Name,
  Location,
  Amount,
  ContainerWrapper,
} from "./vertical-food-card.styles";

import Food from "../../assets/pizza.png";
import { Spacer } from "../spacer/spacer.component";

export const VerticalFoodCard = ({ name, location, amount, source }) => {
  return (
    <ContainerView>
      <ContainerWrapper>
        <FoodImage source={source} />
        <Name>{name}</Name>
        <Location variant="small">{location}</Location>
        <Spacer />
        <Amount variant="smallTitle">{amount}</Amount>
      </ContainerWrapper>
    </ContainerView>
  );
};
