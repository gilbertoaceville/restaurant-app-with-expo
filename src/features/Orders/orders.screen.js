import React from "react";
import { TouchableOpacity } from "react-native";
import { SafeArea } from "../../components/utility/safe-area.component";
import { PageContainer, ContentContainer } from "./orders.styles";
import { Header } from "../../components/header/header.component";
import Crunchies from "../../assets/Crunchies.png";
import { Spacer } from "../../components/spacer/spacer.component";
import { MultiPurposeCard } from "../../components/MultiPurposeCard/multi-purpose-card.component";
import { SearchBar } from "../../components/SearchBar/searchbar.component";

export const OrdersScreen = ({ navigation }) => {
  const OrdersCardData = [
    { image: "", price: "200" },
    { image: "", price: "200" },
    { image: "", price: "200" },
    { image: "", price: "200" },
    { image: "", price: "200" },
    { image: "", price: "200" },
    { image: "", price: "200" },
  ];
  return (
    <SafeArea showStatusBar={true}>
      <PageContainer paddingHorizontal>
        <Header text="Orders" source={Crunchies} />
        <Spacer size="small" position="top" />
        <SearchBar cart onPress={() => console.log("Hello Cart")} Number={3} />
        <Spacer size="large" position="top" />
        <ContentContainer
          showsVerticalScrollIndicator={false}
          data={OrdersCardData}
          key={Math.random()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("OrderDetail", { order: item })
              }
            >
              <MultiPurposeCard />
              <Spacer size="medium" position="top" />
            </TouchableOpacity>
          )}
        />
      </PageContainer>
    </SafeArea>
  );
};
