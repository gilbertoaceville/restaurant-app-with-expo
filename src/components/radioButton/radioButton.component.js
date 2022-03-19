import React, { useState } from "react";
import { RadioButton } from "react-native-paper";
import { Spacer } from "../../components/spacer/spacer.component";
import { colors } from "../../infrastructure/theme/colors";

export const RadioButtonComponent = ({ value, color }) => {
  const [checked, setChecked] = useState(false);
  return (
//  Make sure to create a wrapper for this component because the width cannot be customized from here. It takes 100% of its container.Hence, give the wrapper the desired width and the radioButton inside will take that same width.
      <RadioButton
        value={value}
        status={checked === true ? "checked" : "unchecked"}
        onPress={() => setChecked(!checked)}
        uncheckedColor={color}
        color={color}
        style={{ background: "red" }}
      />
  );
};

RadioButton.defaultProps = {
  color: colors.primary,
  uncheckedColor: colors.primary,
};
