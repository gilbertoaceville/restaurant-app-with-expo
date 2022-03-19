import styled from "styled-components/native";
import MapView from "react-native-maps";
import { Text } from "../../components/typography/text.component";
import { colors } from "../../infrastructure/theme/colors";
import { fonts, fontWeights } from "../../infrastructure/theme/fonts";
import { Marker } from "react-native-maps";

export const MapViewContainer = styled(MapView)`
  flex: 1;
  width: 100%;
`;

export const MarkerComponent = styled(Marker)``;

export const MapCalloutText = styled(Text)`
  color: ${colors.primary};
  font-weight: ${fontWeights.regular};
`;
