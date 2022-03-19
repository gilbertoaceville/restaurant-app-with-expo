import styled from "styled-components/native";
import {
  Container,
  ScrollViewContainer,
} from "../../components/container/container.component";
import Arrow from "react-native-vector-icons/Ionicons";
import { colors } from "../../infrastructure/theme/colors";
import { Text } from "../../components/typography/text.component";
import { fonts, fontWeights } from "../../infrastructure/theme/fonts";
import { lineHeights } from "../../infrastructure/theme/spacing";

export const PageContainer = styled(Container)`
  flex: 1;
`;
export const ArrowIcon = styled(Arrow)`
  color: ${colors.primary};
`;
export const ContentContainer = styled(Container)`
  flex: 1;
  background: ${colors.white};
  border-top-left-radius: 36;
  border-top-right-radius: 36;
`;

export const FieldWrapper = styled(Container)``;
export const SaveTheCardSection = styled(Container)`
  height: 48;
  margin: 5px 0;
`;
export const CheckBoxWrapper = styled(Container)``;
export const SaveTheCardTextWrapper = styled(Container)``;
export const SaveTheCardText = styled(Text)`
  color: ${colors.primary};
  font-weight: ${fontWeights.semiBold};
`;