import styled from "styled-components/native";
import { Text } from "../../components/typography/text.component";
import { colors } from "../../infrastructure/theme/colors";
import { fontWeights, fontSizes } from "../../infrastructure/theme/fonts";
import { Container } from "../container/container.component";
import IconForNaira from "react-native-vector-icons/MaterialCommunityIcons";
import { lineHeights } from "../../infrastructure/theme/spacing";

export const ContainerWrap = styled.View`
  background: ${colors.white};
  border-radius: 20px;
  padding: 10px;
  margin: 10px 0;
  width: 100%;
`;

export const HeaderWrapper = styled.View`
`;

export const TextWrapper = styled.View``;

export const PriceWrapper = styled.View`
flex-direction: row;
justify-content: flex-start;
`;

export const PriceFigure = styled(Text)`
  color: ${(props)=> props.color || colors.black.strong};
  font-weight: ${fontWeights.bold};
`;
export const NairaIcon = styled(IconForNaira)`
  color: ${(props)=> props.color || colors.black.strong};
  line-height: ${lineHeights.copy};
`;

export const HeaderWrap = styled.View`
flex-direction: row;
justify-content: space-between;
padding: 5px 0 15px;
border-bottom-width: 1px;
border-color: ${colors.iconColor};
`;

export const HeaderTitle = styled(Text)`
  color: ${(props)=> props.color || "#7f7f7f"};
  font-size: ${fontSizes.smallTitle};
  font-weight: ${fontWeights.bold};
  text-transform: capitalize;
`;

export const TextWrap = styled.View` 
  margin: 6px 0;
`;

export const FlexComponent = styled.View`
 flex-direction: ${(props) => props.flexDirection || "row"};
 justify-content: space-between;
 align-items: center;
 margin-bottom: 3px;
 width: 98%;
`;

export const TextTitle = styled(Text)`
    font-size: ${(props) => props.fs || fontSizes.button};
  color: ${(props) => props.color || colors.black.strong};
  font-weight: ${(props) => props.fontWeight || 500}
`;

export const TextContentWrap = styled(FlexComponent)`
    margin: 0;
    ${'' /* flex-direction: column; */}
`

export const TextContent = styled(TextTitle)`
  font-weight: ${(props)=> props.fw || fontWeights.semiBold};
  font-size: ${(props) => props.fs || fontSizes.button};
  color: ${(props) => props.color || colors.black.strong};
  width: ${(props)=> props.width || "100%"}
`;
