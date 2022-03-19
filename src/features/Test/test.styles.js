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

export const PageContainer = styled(Container)`
  position: relative;
  flex: 1;
`;

export const ScrollContainer = styled(ScrollViewContainer)`
  position: relative;
  flex: 1;
`;
