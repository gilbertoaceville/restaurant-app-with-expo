import styled from "styled-components";
import { colors } from "../../infrastructure/theme/colors";
import { Text } from "../../components/typography/text.component";
import { ScrollViewContainer } from "../../components/container/container.component";
import { fontSizes, fontWeights } from "../../infrastructure/theme/fonts";

export const OrderTotalCard = styled.View`
  justify-content: center;
  padding: 10px 0;
  padding-left: 20px;
  height: auto;
  width: auto;
  border-radius: 20px;
  background-color: ${colors.bg.white};
  margin: 10px 10px 5px 10px;
`;

export const OrderText = styled(Text)`
font-size: ${(props)=> props.fontSize || "14px"};
font-weight: ${(props) => props.fontWeight || 600};
color: ${(props) => props.color || colors.black.strong};
margin: 2px 0;
`;

export const ItemsContainer = styled.View`
background: ${colors.bg.white};
height: auto;
padding: 10px 4%;
margin-top: 5px;
width: 100%;
`;

export const HeaderWrap = styled.View`
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 5px 0 15px;
border-bottom-width: 1px;
border-color: #C8C8C8;
`;

export const HeaderTitle = styled(Text)`
  color: ${colors.black.strong};
  font-size: ${fontSizes.smallTitle};
  font-weight: ${fontWeights.bold};
  text-transform: capitalize;
`;

export const EachCard = styled.View`
padding: 5px 0;
border-bottom-width: 1px;
border-color: #C8C8C8;
`;

export const OrderDeliveryText = styled(Text)`
  font-size: ${fontSizes.smallTitle};
  color: ${(props) => props.color || colors.blue.strong};
  font-weight: bold;
  text-transform: capitalize;
`;

export const OrderDeliveryDate = styled(Text)`
  font-size: ${fontSizes.button};
  color: ${colors.black.strong};
  line-height: 26px;
`;

export const ScrollableDetails = styled.ScrollView`
margin-top: 10px;
`;
