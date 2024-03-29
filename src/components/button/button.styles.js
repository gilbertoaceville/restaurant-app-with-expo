import styled from "styled-components/native";
import { Text } from "../typography/text.component";
import {
  fonts,
  fontWeights,
  fontSizes,
} from "../../infrastructure/theme/fonts";
import { Container } from "../container/container.component";
import { colors } from "../../infrastructure/theme/colors";

export const ButtonContainerWrapper = styled.TouchableOpacity`
  width: 100%;
`;
export const ButtonWrapper = styled(Container)`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 50px;
  background: #fafafa;
  border-radius: 12px;
`;

export const ButtonText = styled(Text)`
  font-weight: ${fontWeights.bold};
 color: ${(props) => (props.color ? props.color : colors.white)};
`;
