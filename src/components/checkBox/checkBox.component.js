import React, { useState } from "react";
import { Checkbox } from "react-native-paper";
import { colors } from "../../infrastructure/theme/colors";
import {} from "./checkBox.styles";

export const CheckboxComponent = ({ value, color }) => {
  const [checked, setChecked] = useState(false);
  return (
    <Checkbox
      status={checked ? "checked" : "unchecked"}
      onPress={() => {
        setChecked(checked => !checked);
      }}
      uncheckedColor={color}
      color={color}
    />
  );
};

CheckboxComponent.defaultProps = {
  color: colors.primary,
  uncheckedColor: colors.primary,
};
