import styled from "styled-components/native";
import { Container,ScrollViewContainer } from "../../components/container/container.component";
import { SafeArea } from "../../components/utility/safe-area.component";


export const AllRestaurantsContainer = styled(SafeArea)`
  flex: 1;
justify-content: center;
align-items: center;
`;
export const ContainerView = styled(ScrollViewContainer)`



`

export const Flex = styled(Container)`
flex-direction:row;
display: flex;
flex-wrap:wrap;
/* width:0%; */
justify-content: center;
align-items: center;

`