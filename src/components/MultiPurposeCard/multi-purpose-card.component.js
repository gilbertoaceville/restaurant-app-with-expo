import React, { useState } from "react";
import { Spacer } from "../spacer/spacer.component";
import { colors } from "../../infrastructure/theme/colors";
import {
  MultiPurposeCardContainer,
  ImageSection,
  CardImage,
  InfoSection,
  Wrapper,
  FoodName,
  IconWrapper,
  LocationIcon,
  AddressWrapper,
  Address,
  QuantitySection,
  QuantityText,
  LastOrPriceSection,
  PriceWrapper,
  NairaIcon,
  PriceFigure,
  DynamicSectionWrapper,
  FavouriteIconContainer,
  FavouriteIcon,
  OrderStatusWrapper,
  OrderStatusText,
} from "./multi-purpose-card.styles";
import Crunchies from "../../assets/Crunchies.png";
import { CounterButton } from "../counterButton/counterButton.component";

export const MultiPurposeCard = ({
  source,
  counter,
  favourite,
  orderStatus,
  quantity,
  foodName,
  address,
  price,
  elevation,
}) => {
  return (
    <MultiPurposeCardContainer
      height={110}
      width="99%"
      background={colors.white}
      flexDirection="row"
      justifyContent="space-between"
      orderStatus={orderStatus}
      elevation={elevation}
    >
      <ImageSection width="25%">
        <CardImage source={source} resizeMode="cover" />
      </ImageSection>
      <Spacer size="small" position="right" />
      <InfoSection>
        <Wrapper alignItems="flex-start">
          <FoodName variant="body" numberOfLines={1}>
            {foodName}
          </FoodName>
        </Wrapper>
        <Spacer size="medium" position="top" />
        <Wrapper flexDirection="row" alignItems="flex-start">
          <IconWrapper width="auto">
            <LocationIcon name="location-on" size={12} />
          </IconWrapper>
          <Spacer size="small" position="right" />
          <AddressWrapper width="90%">
            <Address variant="small" numberOfLines={2}>
              {address}
            </Address>
          </AddressWrapper>
        </Wrapper>
      </InfoSection>
      {quantity ? (
        <QuantitySection width="auto">
          <QuantityText variant="smallBody">{quantity}Qty</QuantityText>
        </QuantitySection>
      ) : null}
      <LastOrPriceSection width="24%">
        <PriceWrapper
          flexDirection="row"
          justifyContent="flex-end"
          alignItems="flex-start"
        >
          <NairaIcon name="currency-ngn" size={9} />
          <PriceFigure variant="body" numberOfLines={1}>
            {price}
          </PriceFigure>
        </PriceWrapper>
        <Spacer size="medium" position="top" />
        <DynamicSectionWrapper>
          {counter ? (
            <CounterButton />
          ) : favourite ? (
            <FavouriteIconContainer alignItems="flex-end">
              <FavouriteIcon name="heart" size={20} />
            </FavouriteIconContainer>
          ) : orderStatus ? (
            <OrderStatusWrapper>
              <OrderStatusText variant="caption">Order Status</OrderStatusText>
            </OrderStatusWrapper>
          ) : null}
        </DynamicSectionWrapper>
      </LastOrPriceSection>
    </MultiPurposeCardContainer>
  );
};

MultiPurposeCard.defaultProps = {
  source: Crunchies,
  foodName: "Hot Dog Pie",
  address: "54 East West Road Abia State, Nigeria.",
  price: "1,400",
};
