import styled from "styled-components/native";
import { Text } from "../../components/typography/text.component";
import { colors } from "../../infrastructure/theme/colors";
import { fontWeights, fontSizes } from "../../infrastructure/theme/fonts";

export const FlexLayout = styled.View`
  flex-direction: ${(props) => props.row || "row"};
  justify-content: ${(props) => props.justifyContent || "center"};
  align-items: ${(props) => props.alignItems || "center"};
  margin-top: ${(props) => props.mb || "0px"};
`;

export const CheckboxProps = styled(FlexLayout);

export const CheckBoxLineWrap = styled.View`
  align-items: center;
  position: relative;
`;

export const CheckboxWrap = styled(FlexLayout)`
  height: 30px;
  width: 30px;
  border-radius: 100px;
  ${"" /* border-width: 1px; */}
  border-color: ${(props) => props.borderColor || colors.primary};
`;

export const CheckboxLine = styled.View`
  height: 70px;
  width: 1px;
  border-color: ${(props) => props.borderColor || colors.black.soft};
  border-width: 1px;
  position: absolute;
  top: 80%;
  opacity: ${(props) => props.opacity ? 0 : 1};
`;

export const DeliveryTextContainer = styled.View`
  margin-left: 10px;
`;

export const DeliveryText = styled(Text)`
  font-size: ${fontSizes.smallTitle};
  color: ${(props) => props.color || colors.blue.strong};
  font-weight: bold;
  ${"" /* line-height: 46px; */}
  text-transform: capitalize;
`;

export const DeliveryDate = styled(Text)`
  font-size: ${fontSizes.button};
  color: ${colors.black.strong};
  line-height: 26px;
`;

export const ButtonWrap = styled.View`
  width: 150px;
  ${"" /* height: 21px; */}
`;
