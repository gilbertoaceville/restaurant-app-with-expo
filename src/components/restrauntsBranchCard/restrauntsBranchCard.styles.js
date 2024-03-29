import styled from "styled-components/native";
import { ImageBackground } from "react-native";
import {
  Container,
  ScrollViewContainer,
} from "../../components/container/container.component";
import { Text } from "../../components/typography/text.component";
import { colors } from "../../infrastructure/theme/colors";
import { fonts, fontWeights } from "../../infrastructure/theme/fonts";
import { lineHeights } from "../../infrastructure/theme/spacing";
import Icon from "react-native-vector-icons/FontAwesome";
import Love from "react-native-vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";

export const RestrauntsBranchCardContainer = styled.ImageBackground`
  border-radius: ${(props)=>props.borderRadius ? props.borderRadius : "25px"};
  /* border-radius:25px; */
  overflow: hidden;
  height: 210;
  justify-content: center;
  width: 100%;
`;
export const Wrapper = styled(Container)``;
export const ImageSection = styled(Container)`
  width: 100%;
`;
export const LoveIconWrapper = styled(Container)`
  background: rgba(250, 250, 250, 0.3);
  padding-horizontal: 2%;
  width: auto;
  border-bottom-right-radius: 40;
  border-bottom-left-radius: 40;
  position: absolute;
  right: 10%;
`;
export const LoveIcon = styled(Love)`
  color: ${colors.primary};
`;
export const LinearGradientBackground = styled(LinearGradient)`
  overflow: hidden;
  height: auto;
`;
export const InfoSection = styled(Container)``;
export const NameAndStarContainer = styled(Container)``;
export const NameText = styled(Text)`
  color: ${colors.white};
  font-weight: ${fontWeights.bold};
`;
export const RatingStar = styled(Icon)`
  color: ${colors.primary};
  line-height: ${lineHeights.title};
`;

export const AddressAndRatingContainer = styled(Container)``;
export const AddressText = styled(Text)`
  color: ${colors.white};
`;
export const RatingNumber = styled(Text)`
  color: ${colors.white};
`;
