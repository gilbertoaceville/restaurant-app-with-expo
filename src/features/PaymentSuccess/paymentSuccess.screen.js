import React from "react";
import { SafeArea } from "../../components/utility/safe-area.component";
import {
  PageContainer,
  PaymentSuccessContainer,
  IconContainer,
  CheckIcon,
  Wrapper,
  TitleText,
  SubText
} from "./paymentSuccess.styles";
import { colors } from "../../infrastructure/theme/colors";
import { Spacer } from "../../components/spacer/spacer.component";
import ButtonContainer from "../../components/button/button.component";

const PaymentSuccess = () => {
  return (
    <SafeArea showStatusBar={true}>
      <PageContainer >
        <PaymentSuccessContainer paddingHorizontal  >
          <Spacer size="medium" positiion="top" />
          <IconContainer justifyContent="center" alignItems="center">
            <CheckIcon name="check" size={26} color={colors.white} />
          </IconContainer>
          <Spacer size="large" positiion="top" />
          <Wrapper>
            <TitleText variant="h5">Successful</TitleText>
          </Wrapper>
          <Wrapper>
            <SubText variant="smallBody">Your Order has been placed</SubText>
          </Wrapper>
          <Spacer size="large" positiion="top" />
          <Spacer size="large" positiion="top" />
          <ButtonContainer text="Back to Shopping" />
          <Spacer size="medium" positiion="top" />
        </PaymentSuccessContainer>
      </PageContainer>
    </SafeArea>
  );
};
export default PaymentSuccess;
