import React from "react";
import {
  FlexLayout,
  DeliveryTextContainer,
  DeliveryText,
  DeliveryDate,
  CheckboxWrap,
  ButtonWrap,
  CheckboxLine,
  CheckBoxLineWrap,
} from "./deliveryCard.styles";
import { CheckboxComponent } from "../checkBox/checkBox.component";
import { colors } from "../../infrastructure/theme/colors";
import ButtonContainer from "../button/button.component";
import { RadioButtonComponent } from "../radioButton/radioButton.component";

const DeliveryProgressCard = ({
  situation,
  date,
  hour,
  time,
  color,
  lineColor = colors.primary,
  opacity,
}) => {
  const deliveryProgress = "On Delivery";
  return (
    <FlexLayout justifyContent="space-between">
      <FlexLayout justifyContent="flex-start" alignItems="flex-start">
        <CheckBoxLineWrap>
          <CheckboxWrap>
            <RadioButtonComponent
              color={color}
              uncheckedColor={colors.headerShade.strong}
            />
            <CheckboxLine borderColor={lineColor} opacity={opacity} />
          </CheckboxWrap>
        </CheckBoxLineWrap>
        <DeliveryTextContainer>
          <DeliveryText color={color}>{situation}</DeliveryText>
          <DeliveryDate>
            {date} {hour}
            {time}
          </DeliveryDate>
        </DeliveryTextContainer>
      </FlexLayout>
      {situation.toLowerCase() === deliveryProgress.toLowerCase() && (
        <ButtonWrap>
          <ButtonContainer fontSize="12px" text="Track Delivery" />
        </ButtonWrap>
      )}
    </FlexLayout>
  );
};

// DeliveryProgressCard.defaultProps ={
//     uncheckedColor: colors.primary,
//     checkedColor: colors.blue.strong,
// }

export default DeliveryProgressCard;
