import React from "react";
import { View } from "react-native";
import { SafeArea } from "../../components/utility/safe-area.component";
import { PageContainer, ContentContainer } from "./notifications.styles";
import { Header } from "../../components/header/header.component";
import Crunchies from "../../assets/Crunchies.png";
import { Spacer } from "../../components/spacer/spacer.component";
import { MultiPurposeCard } from "../../components/MultiPurposeCard/multi-purpose-card.component";
import { SearchBar } from "../../components/SearchBar/searchbar.component";
import { NotificationCard } from "../../components/NotificationCard/notification-card.component";

export const NotificationsScreen = () => {
  const NotificationsCardData = [
    { image: Crunchies, timeStamp: "today", orderNumber: "#CR868775" },
    { image: Crunchies, timeStamp: "today", orderNumber: "#PC868778" },
    { image: Crunchies, timeStamp: "yesterday", orderNumber: "#DC868774" },
    { image: Crunchies, timeStamp: "yesterday", orderNumber: "#AF868773" },
    { image: Crunchies, timeStamp: "yesterday", orderNumber: "#CR868772" },
    { image: Crunchies, timeStamp: "yesterday", orderNumber: "#CR868771" },
    { image: Crunchies, timeStamp: "wednesday", orderNumber: "#CR868779" },
  ];

  return (
    <SafeArea showStatusBar={false}>
      <PageContainer paddingHorizontal>
        <Header text="Notifications" source={Crunchies} />
        {/* <Spacer size="small" position="top" /> */}
        {/* <SearchBar sort onPress={() => console.log("Hello Cart")} /> */}
        <Spacer size="medium" position="top" />
        <ContentContainer
          showsVerticalScrollIndicator={false}
          data={NotificationsCardData}
          // key={Math.random()}
          renderItem={({ item }) => (
            <View key={item.orderNumber}>
              <NotificationCard
                image={item.image}
                timeStamp={item.timeStamp}
                orderNumber={item.orderNumber}
              />
              <Spacer size="medium" position="top" />
            </View>
          )}
        />
      </PageContainer>
    </SafeArea>
  );
};
