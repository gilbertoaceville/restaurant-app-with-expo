import styled from "styled-components";
import { Text } from "../typography/text.component";
import { colors } from "../../infrastructure/theme/colors";
import { fontSizes } from "../../infrastructure/theme/fonts";

export const PhotoUploadWrap = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const PhotoUploadContainer = styled.View`
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 115px;
  border: 1px dashed #cbcbcb;
  border-radius: 10px;
`;

export const PhotoUploadImg = styled.Image`
  height: 100%;
  width: 100%;
  border-radius: 10px;
  resize-mode: cover;
`;

export const DefaultContainer = styled.View`
    align-items: center;
    justify-content: center;
`;

export const UploadText = styled(Text)`
  font-size: 9px;
  color: #7f7f7f;
  font-weight: bold;
  text-transform: capitalize;
  margin-top: 5px;
`;

export const PhotoUploadBtn = styled.TouchableOpacity`
  height: 40px;
  width: 143px;
  border: 1px solid #f38b1c;
  align-items: center;
  justify-content: center;
  background: transparent;
  border-radius: 23px;
`;

export const PhotoUploadBtnText = styled(Text)`
  color: ${colors.primary};
  font-size: ${fontSizes.smallTitle};
  font-weight: bold;
`;
