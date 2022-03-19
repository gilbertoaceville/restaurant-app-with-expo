import React from "react";
import { Spacer } from "../../components/spacer/spacer.component";
import {
  CardListHeaderContainer,
  TitleSection,
  Title,
  SubTitle,
  SeeAllSection,
  SeeAllText,
  RightIcon,
} from "./cardListHeader.styles";

export const CardListHeader = ({ title, subTitle, seeAllText }) => {
  return (
    <CardListHeaderContainer flexDirection="row" paddingHorizontal>
      <TitleSection alignItems="flex-start">
        <Title variant="smallTitle">{title}</Title>
        <SubTitle variant="smallBody">{subTitle}</SubTitle>
      </TitleSection>
      <SeeAllSection flexDirection="row" justifyContent="flex-end">
        <SeeAllText variant="caption">{seeAllText}</SeeAllText>
        <Spacer position="right" />
        <RightIcon name="right" size={12} />
      </SeeAllSection>
    </CardListHeaderContainer>
  );
};

CardListHeader.defaultProps = {
  title: "Restraunts Near By",
  subTitle: "Check Crunchies Restraunts nearby to you",
  seeAllText: "See All",
};
