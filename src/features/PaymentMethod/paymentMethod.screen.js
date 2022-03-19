import React from "react";
import { SafeArea } from "../../components/utility/safe-area.component";
import { Header } from "../../components/header/header.component";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../infrastructure/theme/colors";
import {
  PageContainer,
  ContentContainer,
  ArrowIcon,
  FieldWrapper,
  SaveTheCardSection,
  CheckBoxWrapper,
  SaveTheCardTextWrapper,
  SaveTheCardText,
} from "./paymentMethod.styles";
import { Spacer } from "../../components/spacer/spacer.component";
import ButtonContainer from "../../components/button/button.component";
import CartIcon from "react-native-vector-icons/FontAwesome";
import TextInputContainer from "../../components/textInput/textInput.component";
import { CheckboxComponent } from "../../components/checkBox/checkBox.component";

const PaymentMethod = () => {
  return (
    <SafeArea showStatusBar={true}>
      <PageContainer height="100%">
        <Header
          text="Add Payment Method"
          paddingHorizontal
          svg={<ArrowIcon name="ios-arrow-undo" size={24} color="#F38B1C" />}
        />

        <Spacer size="large" position="top" />
        <Spacer size="large" position="top" />
        <ContentContainer paddingHorizontal paddingVertical="20">
          <FieldWrapper>
            <TextInputContainer
              containerWidth="100%"
              placeholder="Select  Payment Method"
              label="Payment Method"
            />
          </FieldWrapper>
          <FieldWrapper>
            <TextInputContainer
              containerWidth="100%"
              placeholder="4554 4566 7823 6718"
              label="Card Number"
            />
          </FieldWrapper>
          <FieldWrapper flexDirection="row" justifyContent="space-between">
            <TextInputContainer
              containerWidth="47%"
              placeholder="******"
              label="Card Pin"
            />
            <TextInputContainer
              containerWidth="47%"
              placeholder="******"
              label="Card Pin"
            />
          </FieldWrapper>

          <FieldWrapper
            flexDirection="row"
            justifyContent="space-between"
            alignItems="flex-end"
          >
            <TextInputContainer
              containerWidth="47%"
              placeholder="******"
              label="Card Pin"
            />
            <SaveTheCardSection
              width="47%"
              flexDirection="row"
              justifyContent="flex-start"
            >
              <CheckBoxWrapper width={22}>
                <CheckboxComponent />
              </CheckBoxWrapper>
              <Spacer size="medium" position="right" />
              <SaveTheCardTextWrapper width="auto">
                <SaveTheCardText>Save the Card</SaveTheCardText>
              </SaveTheCardTextWrapper>
            </SaveTheCardSection>
          </FieldWrapper>
          <Spacer size="large" position="top" />
          <ButtonContainer text="Add Card" />
        </ContentContainer>
      </PageContainer>
    </SafeArea>
  );
};

export default PaymentMethod;

// PaymentMethod.defaultProps = {};
