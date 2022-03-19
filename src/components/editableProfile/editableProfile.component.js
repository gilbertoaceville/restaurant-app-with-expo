import React, { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";

import {
  EditProfileContainer,
  EditProfileImage,
  ProfileOverlayContainer,
  ProfileOverlay,
  EditIconImage,
  Touched,
} from "./editableProfile.styles";

const EditableProfile = () => {
  // const [image, setImage] = useState<any>(AsyncStorage.getItem("image") || null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    const imagePickerPermissions = async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    };
    imagePickerPermissions();
  }, []);

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
      });

      if (!result.cancelled) {
        setImage(result.uri);
        // await AsyncStorage.setItem("image", result.uri)
      }
    } catch (error) {
      if (error) console.warn(error);
    }
  };

  return (
    <EditProfileContainer>
      <ProfileOverlayContainer>
        <ProfileOverlay />
        {image ? (
          <EditProfileImage source={{ uri: image }} />
        ) : (
          <EditProfileImage source={require("../../assets/pdf.png")} />
        )}
        <Touched onPress={pickImage}>
          <EditIconImage source={require("../../assets/pencil.png")} />
        </Touched>
      </ProfileOverlayContainer>
    </EditProfileContainer>
  );
};

export default EditableProfile;
