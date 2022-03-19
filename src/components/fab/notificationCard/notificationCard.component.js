import React, { useState } from "react";
import { Spacer } from "../../components/spacer/spacer.component";
import { colors } from "../../infrastructure/theme/colors";
import {
  MultiPurposeCardContainer,
  ImageSection,
  CardImage,
  InfoSection,
  Wrapper,
  NotificationMessage,
  BoldMessage,
  TimeStampWrapper,
  TimeStamp,
} from "./notificationCard.styles";
import Crunchies from "../../assets/Crunchies.png";

export const NotificationCard = ({ image, orderNumber, timeStamp }) => {
  return (
    <MultiPurposeCardContainer
      height={110}
      background={colors.white}
      flexDirection="row"
      justifyContent="space-between"
    >
      <ImageSection width="25%">
        <CardImage source={image} resizeMode="cover" />
      </ImageSection>
      <InfoSection width="72%">
        <Wrapper alignItems="flex-start">
          <NotificationMessage variant="caption">
            Your Order{" "}
            <BoldMessage variant="caption">{orderNumber}</BoldMessage> has been
            and confirmed, and will be delivered within 30 min. You can track
            delivery in <BoldMessage variant="caption">Orders</BoldMessage>.
          </NotificationMessage>
        </Wrapper>
        <Spacer size="medium" position="top" />
        <Wrapper alignItems="flex-end">
          <TimeStampWrapper width="auto">
            <TimeStamp variant="caption" numberOfLines={1}>
              {timeStamp}
            </TimeStamp>
          </TimeStampWrapper>
        </Wrapper>
      </InfoSection>
    </MultiPurposeCardContainer>
  );
};

NotificationCard.defaultProps = {
  image: Crunchies,
  orderNumber: "#CR845645",
  timeStamp: "Just Now",
};
