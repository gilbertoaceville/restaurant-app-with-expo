import React, { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";

import {
  PhotoUploadContainer,
  PhotoUploadWrap,
  PhotoUploadBtn,
  PhotoUploadBtnText,
  UploadText,
  PhotoUploadImg,
  DefaultContainer,
} from "./photoUpload.styles";
import { Fontisto } from "@expo/vector-icons";

const PhotoUpload = () => {
  const [photo, setPhoto] = useState(null);

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
        setPhoto(result.uri);
        // await AsyncStorage.setItem("image", result.uri)
      }
    } catch (error) {
      if (error) console.warn(error);
    }
  };
  return (
    <PhotoUploadWrap>
      <PhotoUploadContainer>
        {photo ? (
          <PhotoUploadImg source={{uri: photo}} />
        ) : (
          <DefaultContainer>
            <Fontisto name="photograph" size={25} color="#7f7f7f" />
            <UploadText>upload vehicle photos</UploadText>
          </DefaultContainer>
        )}
      </PhotoUploadContainer>
      <PhotoUploadBtn onPress={pickImage}>
        <PhotoUploadBtnText>Choose File</PhotoUploadBtnText>
      </PhotoUploadBtn>
    </PhotoUploadWrap>
  );
};

export default PhotoUpload;
