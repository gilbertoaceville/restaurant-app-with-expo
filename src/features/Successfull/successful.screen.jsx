import React from "react";
import { SafeArea } from "../../components/utility/safe-area.component";
import {
  PageContainer,
  PaymentSuccessContainer,
  IconContainer,
  CheckIcon,
  Wrapper,
  TitleText,
  SubText,
  Flex,
  ContainerView,
  ButtonContainerView
} from "./successful.styles";
import { colors } from "../../infrastructure/theme/colors";
import { Spacer } from "../../components/spacer/spacer.component";
import ButtonContainer from "../../components/button/button.component";
import { theme } from "../../infrastructure/theme";

const Successful = () => {
  return (
    <SafeArea showStatusBar={true}>
      <PageContainer>
        <PaymentSuccessContainer paddingHorizontal>
            <ContainerView flex={3}>
                
          <IconContainer justifyContent="center" alignItems="center">
            <CheckIcon name="check" size={26} color={colors.white} />
          </IconContainer>
          <Spacer size="large" positiion="top" />
         
            <TitleText variant="h5">Successful</TitleText>
         
            <SubText variant="smallBody">
              Congratulations your password has been changed
            </SubText>

            <Spacer size="large" positiion="top" />

            <Flex>
              <SubText variant="smallBody">Can't get email? </SubText>
              <SubText variant="smallBody" color="#F38B1C"> Resubmit</SubText>
            </Flex>
            </ContainerView>
          <ContainerView flex={1}>

          <ButtonContainer text="Sign Up" />

          </ContainerView>
        </PaymentSuccessContainer>
      </PageContainer>
    </SafeArea>
  );
};
export default Successful;
