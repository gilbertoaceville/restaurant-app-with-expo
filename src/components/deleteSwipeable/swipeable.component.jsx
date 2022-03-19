import React, { useState } from "react";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { Ionicons } from "@expo/vector-icons";
import { Delete } from "./swipeable.styles";
import { StyleSheet, Dimensions, View } from 'react-native'

const SwipeableDelete = (props) => {
  const { handleDelete } = props;

  // card border color
  const [bColState, setBColState] = useState("#ffffff");

  /**
   * border color is set when swiped open...
   */
  const switchOpenHandler = () => setBColState("#F3501C");

  /**
   * border color is returned to original state when swiped closed... return to inertia;
   */
  const switchCloseHandler = () => setBColState("#ffffff");

  // Delete icon
  const removeReq = () => {
    return (
      <Delete onPress={handleDelete}>
        <Ionicons name="ios-trash-outline" size={35} color="#F3501C" />
      </Delete>
    );
  };

  return (
    <Swipeable
      onSwipeableWillOpen={switchOpenHandler}
      onSwipeableClose={switchCloseHandler}
      renderRightActions={removeReq}
      containerStyle={styles.container}
    >
      <View style={{...styles.containerWrapper, borderColor: bColState,}} >
        {props.children}
      </View>
    </Swipeable>
  );
};
export default SwipeableDelete;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width / 1.1,
    marginVertical: 5,
    alignSelf: "center"
  },
  containerWrapper: {
    borderWidth: 1,
    borderRadius: 16,
  }
})


