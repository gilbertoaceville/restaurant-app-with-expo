import React from "react";
import { colors } from "../../infrastructure/theme/colors";
import {
  MapViewContainer,
  MarkerComponent,
  MapCalloutText,
} from "./map.styles";
import { Spacer } from "../../components/spacer/spacer.component";
import { Callout } from "react-native-maps";

export const Map = () => {
  return (
    <MapViewContainer
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      <MarkerComponent
        coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
        pinColor={colors.primary}
      >
        <Callout>
          <MapCalloutText variant="caption">Current Location</MapCalloutText>
        </Callout>
      </MarkerComponent>
    </MapViewContainer>
  );
};
