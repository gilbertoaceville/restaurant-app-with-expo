import React,{useState} from "react";
import { colors } from "../../infrastructure/theme/colors";
import {
  CounterComponent,
  MinusWrapper,
  Minus,
  CounterWrapper,
  CounterText,
  PlusWrapper,
  Plus,
} from "./counterButton.styles";

export const CounterButton = () => {
    const [count, setCount] = useState(0);
    const DecreaseCount = () => {
      return setCount(count - 1);
    };
    const IncreaseCount = () => {
      return setCount(count + 1);
    };
  return (
    <CounterComponent flexDirection="row">
      <MinusWrapper width="25%" onTouchStart={DecreaseCount}>
        <Minus name="minus" size={10} />
      </MinusWrapper>
      <CounterWrapper width="50%" background={colors.primary}>
        <CounterText variant="smallTitle">{count}</CounterText>
      </CounterWrapper>
      <PlusWrapper width="25%" onTouchStart={IncreaseCount}>
        <Plus name="plus" size={10} />
      </PlusWrapper>
    </CounterComponent>
  );
}