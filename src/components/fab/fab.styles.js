import styled from "styled-components/native";
import { Text } from "../../components/typography/text.component";
import { FontAwesome5, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { colors } from "../../infrastructure/theme/colors";
import { Container } from "../container/container.component";

export const FabContainer = styled(Container)`
  background-color: ${colors.white};
  elevation:2;
  width: auto;
  padding-horizontal: 15;
  padding-vertical: 10;
  flex-direction: row;
  position: absolute;
  border-radius: 45;
  right: 20;
  bottom:7%;
`;

export const FabLabel = styled(Text)`
  color: ${colors.text.soft};
`;
export const FabIcon = styled(MaterialIcons)``;
