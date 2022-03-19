import styled from "styled-components/native";
import { colors } from '../../infrastructure/theme/colors'

export const EditProfileContainer = styled.View`
  flex-direction: column;
  ${'' /* justify-content: center; */}
  align-items: center;
`;

export const ProfileOverlayContainer = styled.View`
  width: 136px;
  height: 136px;
  border-width: 4px;
  border-color: #f38b1c;
  border-radius: 100px;
  position: relative;
`;

export const EditProfileImage = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: cover;
  border-radius: 100px;
`;

export const ProfileOverlay = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 100px;
  background-color: #33333350;
  z-index: 1;
`;

export const Touched = styled.TouchableOpacity`
z-index: 2;
position: absolute;
bottom: 0;
right: 0;
width: 36px;
height: 36px;
background: ${colors.bg.white};
border-radius: 100px;
justify-content: center;
align-items: center;
`;

export const EditIconImage = styled.Image`
resize-mode: cover;
height: 70%;
width: 70%;
`;