import styled from "styled-components/native";
import { colors } from "../../infrastructure/theme/colors";
import { fontWeights } from "../../infrastructure/theme/fonts";
import { Container } from "../container/container.component";
import { Text } from "../typography/text.component";
import IconForPlus from "react-native-vector-icons/AntDesign";
import IconForMinus from "react-native-vector-icons/AntDesign";

export const CounterComponent = styled(Container)`
  border-radius: 19;
  background: rgba(235, 173, 91, 0.7);
`;

export const MinusWrapper = styled(Container)``;
export const Minus = styled(IconForMinus)`
  color: ${colors.black.strong};
`;

export const CounterWrapper = styled(Container)`
  border-radius: 19;
  opacity: 0.6;
  elevation: 1;
`;

export const CounterText = styled(Text)`
  color: ${colors.black.strong};
  font-weight: ${fontWeights.bold};
`;
export const PlusWrapper = styled(Container)``;

export const Plus = styled(IconForPlus)`
  color: ${colors.black.strong};
`;
