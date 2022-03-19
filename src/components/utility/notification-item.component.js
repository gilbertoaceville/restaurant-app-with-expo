import React from "react";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/AntDesign";

// export const Icon = styled.Image`
//   width: 30px;
//   height: 30px;
// `;

const NotificationContainer = styled.View`
  flex: 1;
  flex-direction: column;
  height: 90px;
  border-color: lightgrey;
  border-bottom-width: 1px;
  width: 100%;
  padding-left: 10px;
  /* background-color: blue; */
`;

const DateLabelContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  padding-right: 10px;
  height: 30px;
  /* background-color: green; */
`;

const IconContainer = styled.View`
  width: 13%;
`;

const MessageContainer = styled.View`
  width: 86%;
`;

const Message = styled.Text`
  color: #707070;
  font-size: 16px;
  font-weight: 700;
`;

const DateLabel = styled.Text`
  color: #9c9c9c;
  font-size: 10px;
`;

export const NotificationCard = styled.View`
  width: 95%;
  height: 60px;
  margin-bottom: 5px;
  padding-bottom: 20px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* background-color: red; */
`;

export const NotificationItem = ({ icon, iconColor, message, dateLabel }) => (
  <NotificationContainer>
    <DateLabelContainer>
      <DateLabel>{dateLabel}</DateLabel>
    </DateLabelContainer>
    <NotificationCard>
      <IconContainer>
        <Icon name={icon} size={32} color={iconColor} />
      </IconContainer>
      <MessageContainer>
        <Message>{message}</Message>
      </MessageContainer>
    </NotificationCard>
  </NotificationContainer>
);
