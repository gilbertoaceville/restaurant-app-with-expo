import { SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components/native";
import { colors } from "../../infrastructure/theme/colors";

const calculateStatusBarHeight = () =>
  `${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}`;

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${'' /* align-items: center; */}
  ${({ showStatusBar }) => showStatusBar && calculateStatusBarHeight()};
  background:${colors.bg.lightOrange};
`;

SafeArea.defaultProps = {
  showStatusBar: false,
};
