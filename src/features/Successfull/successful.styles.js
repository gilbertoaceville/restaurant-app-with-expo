import styled from "styled-components/native";
import { Container } from "../../components/container/container.component";
import { Text } from "../../components/typography/text.component";
import Check from "react-native-vector-icons/FontAwesome";
import { colors } from "../../infrastructure/theme/colors";
import { fontWeights } from "../../infrastructure/theme/fonts";
import { theme } from "../../infrastructure/theme";


export const PageContainer = styled(Container)`
  flex: 1;
`;
export const PaymentSuccessContainer = styled(Container)`
  flex:1;
`;

export const IconContainer = styled(Container)`
  width: auto;
  width: 82px;
  height: 82px;
  border-radius: 82px;
  background: ${colors.primary};
`;
export const CheckIcon = styled(Check)``;
export const Wrapper = styled(Container)``;
export const TitleText = styled(Text)`
  color: ${colors.black.strong};
  font-weight: ${fontWeights.semiBold};
`;
export const SubText = styled(Text)`
  color:${(props)=>props.color ? props.color : theme.colors.text.strong };
  font-weight: ${fontWeights.regular};
`;

export const Flex = styled.View`
justify-content: center;
flex-direction:row;
align-items:center;
`
export const ContainerView = styled(Container)`
flex:${(props)=>props.flex ? props.flex : 1};
align-items: center;
justify-content: center;

`

export const ButtonContainerView = styled(Container)`
flex:1;
align-items: center;
justify-content: center;

`