import React from "react";
import { SafeArea } from "../../components/utility/safe-area.component";
import EditableProfile from "../../components/editableProfile/editableProfile.component";
import { Container } from "../../components/container/container.component";
import { Header } from "../../components/header/header.component";
import { Ionicons } from "@expo/vector-icons";
import { View, ScrollView } from "react-native";
import {
  ScrollableDetails,
  ProfileWrapper,
  UserImage,
  PersonalDetails,
  UserProfileTitle,
  TextInputLists,
  CheckComponents,
  GenderText,
  PersonalDetailsWrap,
} from "./UserProfile.styles";
import TextInputContainer from "../../components/textInput/textInput.component";
import { RadioButtonComponent } from "../../components/radioButton/radioButton.component";
import { AppPicker } from "../../components/pickerComponent/picker.component";

//   mock-up data
const state = [
  { label: "Abia", value: 1 },
  { label: "Imo", value: 2 },
  { label: "Enugu", value: 3 },
  { label: "Anambara", value: 4 },
];

const city = [
  { label: "Aba", value: 1 },
  { label: "Umuahia", value: 2 },
  { label: "Ifitedunu", value: 3 },
  { label: "Upper Iweka", value: 4 },
];
const UserProfile = () => {
  return (
    <Container paddingVertical={20} background="#FFF9EC" height="100%">
      <Header
        paddingHorizontal
        svg={<Ionicons name="ios-arrow-undo" size={24} color="#F38B1C" />}
        text="My Profile"
      />
      <ProfileWrapper>
        <Container height="85%" background="#f1f1f1">
          <ScrollableDetails>
            <UserImage>
              <EditableProfile />
            </UserImage>

            <PersonalDetailsWrap showsVerticalScrollIndicator={false}>
              <View>
                <PersonalDetails>
                  <UserProfileTitle>Personal Details</UserProfileTitle>
                </PersonalDetails>

                <TextInputLists>
                  <TextInputContainer
                    label="First Name"
                    textValue="Linda"
                    placeholder="Linda"
                    containerWidth="95%"
                  />
                  <TextInputContainer
                    label="Last Name"
                    textValue="Cabret"
                    placeholder="Cabret"
                    containerWidth="95%"
                  />
                </TextInputLists>
                <CheckComponents>
                  <CheckComponents>
                    <RadioButtonComponent />
                    <GenderText>Male</GenderText>
                  </CheckComponents>
                  <CheckComponents>
                    <RadioButtonComponent />
                    <GenderText>Female</GenderText>
                  </CheckComponents>
                </CheckComponents>

                <PersonalDetails>
                  <UserProfileTitle>Address and Destination</UserProfileTitle>
                </PersonalDetails>

                <TextInputLists>
                  <TextInputContainer
                    label="Address"
                    containerWidth="95%"
                    textValue="145 Abia polytechnic street, off Aba-Owerri Road"
                  />
                  <AppPicker
                    _array={state}
                    label="State"
                    containerWidth="95%"
                  />
                  <AppPicker _array={city} label="City" containerWidth="95%" />
                </TextInputLists>
              </View>
            </PersonalDetailsWrap>
          </ScrollableDetails>
        </Container>
      </ProfileWrapper>
    </Container>
  );
};

export default UserProfile;
