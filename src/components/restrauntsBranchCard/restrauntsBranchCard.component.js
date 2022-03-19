import React from "react";
import { Spacer } from "../../components/spacer/spacer.component";
import {
  RestrauntsBranchCardContainer,
  Wrapper,
  ImageSection,
  LoveIconWrapper,
  LoveIcon,
  LinearGradientBackground,
  InfoSection,
  NameAndStarContainer,
  NameText,
  RatingStar,
  AddressAndRatingContainer,
  AddressText,
  RatingNumber,
} from "./restrauntsBranchCard.styles";
import CardBg from "../../assets/Crunchies.png";
import { colors } from "../../infrastructure/theme/colors";

export const RestrauntsBranchCard = ({
  image,
  firstGradientColor,
  secondGradientColor,
  thirdGradientColor,
  branchName,
  branchAddress,rating
}) => {
  const StarData = [
    { name: "star", key: 1 },
    { name: "star", key: 2 },
    { name: "star", key: 3 },
    { name: "star", key: 4 },
    { name: "star", key: 5 },
  ];
  return (
    <RestrauntsBranchCardContainer source={CardBg} resizeMode="cover">
      <ImageSection background="transparent" height={130}>
        <LoveIconWrapper paddingVertical={8}>
          <LoveIcon name="heart" size={18} />
        </LoveIconWrapper>
      </ImageSection>

      <LinearGradientBackground
        colors={
          ("to left",
          [firstGradientColor, secondGradientColor, thirdGradientColor])
        }
        start={[2, -0.2]}
        end={[-0.2, 1.2]}
      >
        <InfoSection height="auto" paddingVertical={"20px"}>
          <NameAndStarContainer
            flexDirection="row"
            paddingHorizontal
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Wrapper width="75%" alignItems="flex-start">
              <NameText variant="title" numberOfLines={1}>
              {branchName}
              </NameText>
            </Wrapper>
            <Wrapper
              width="25%"
              flexDirection="row"
              justifyContent="space-between"
            >
              {StarData.map(({ name, key }) => (
                <RatingStar name={name} size={14} key={key} />
              ))}
            </Wrapper>
          </NameAndStarContainer>
          <Spacer size="small" position="top" />
          <AddressAndRatingContainer
            flexDirection="row"
            paddingHorizontal
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Wrapper width="85%" alignItems="flex-start">
              <AddressText variant="smallBody" numberOfLines={1}>
                {branchAddress}
              </AddressText>
            </Wrapper>
            <Wrapper width="15%" alignItems="flex-end">
              <RatingNumber variant="smallBody">{rating}</RatingNumber>
            </Wrapper>
          </AddressAndRatingContainer>
        </InfoSection>
      </LinearGradientBackground>
    </RestrauntsBranchCardContainer>
  );
};

RestrauntsBranchCard.defaultProps = {
  image:CardBg,
  firstGradientColor: "rgba(0,0,0,0.8)",
  secondGradientColor: "rgba(0,0,0,0.6)",
  thirdGradientColor: colors.primary,
  branchName: "Faulks Branch",
  branchAddress: "162 old Glenridge St Fountain Aba, Abia State",
  rating: "4.9",
};
