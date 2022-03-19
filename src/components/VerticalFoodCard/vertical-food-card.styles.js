import styled from "styled-components";
import { Container } from "../container/container.component";
import { Text } from "../../components/typography/text.component";
import { theme } from "../../infrastructure/theme";

export const ContainerView = styled(Container)`
  border-radius: 20px;
  background-color:white;
  width: 160px;
  height: 244px;
  padding: 10px;
  margin-left: 15px;
  margin-bottom:20px
`;

export const ContainerWrapper = styled.View`
  width: 100%;
  flex: 1;
`;
export const FoodImage = styled.Image`
  width: 100%;
  height: 120px;
  background-color: white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
export const Name = styled(Text)`
  width: 100%;
  justify-content: center;
  align-items: center;
  color:${theme.colors.black.regular}
`;
export const Location = styled(Text)`
  width: 100%;
  /* background-color: blue; */
  height: 30px;
  justify-content: center;
  align-items: center;
`;

export const Amount = styled.Text`
  width: 100%;
  /* background-color: red; */
  height: 30px;
  justify-content: center;
  align-items: center;
  text-align:center;
  /* align-items: center; */
`;
