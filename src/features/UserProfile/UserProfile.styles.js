import styled from "styled-components";
import { colors } from "../../infrastructure/theme/colors";
import { Text } from "../../components/typography/text.component";

export const ProfileWrapper = styled.View`
  width: 100%;
  justify-content: flex-end;
  height: 100%;
  padding: 25px 0;
`;

export const ScrollableDetails = styled.View`
  width: 100%;
  border-radius: 36px;
  position: relative;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: auto;
  ${'' /* padding: 0 0 50px 0; */}
`;

export const UserImage = styled.View`
  position: absolute;
  left: 30%;
  top: -15%;
`;

export const PersonalDetailsWrap = styled.ScrollView`
  width: 100%;
  margin-top: 15%;
`;

export const PersonalDetails = styled.View`
  height: 39px;
  width: 100%;
  background-color: #c8c8c850;
  align-items: flex-start;
  margin: 20px 0 10px 0;
  justify-content: center;
`;

export const UserProfileTitle = styled(Text)`
  font-size: 16px;
  color: ${colors.black.strong};
  font-weight: bold;
  margin-left: 20px;
`;

export const TextInputLists = styled.View`
  padding: 10px;
  width: 100%;
  align-items: center;
`;

export const CheckComponents = styled.View`
  flex-direction: row;
  margin: 2px 15px;
  align-items: center;
`;

export const GenderText = styled(UserProfileTitle)`
  font-size: 15px;
  color: #a2a2a2;
  font-weight: 600;
  margin-left: 0px;
`;
