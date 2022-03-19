import styled from "styled-components/native";

export const AuthContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const VerifyTextContainer = styled.View`
  ${'' /* margin-top: 20px; */}
  padding-top: 30px;
`;

export const ImageIcon = styled.Image`
  width: 70%;
  height: 33%;
  resize-mode: contain;
  margin: 30px 0;
  `;

export const VerifyText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #000;
  text-align: center;
`;

export const VerifyLabel = styled.Text`
  font-size: 16px;
  line-height: 24px;
  color: #000;
  text-align: center;
  opacity: 0.7;
`;
