import React from "react";
import { SafeArea } from "../../components/utility/safe-area.component";
import { Container } from "../../components/container/container.component";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  OrderTotalCard,
  OrderText,
  ItemsContainer,
  HeaderWrap,
  HeaderTitle,
  EachCard,
  OrderDeliveryText,
  OrderDeliveryDate,
  ScrollableDetails,
} from "./order-details.styles";
import { Header } from "../../components/header/header.component";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import { MultiPurposeCard } from "../../components/MultiPurposeCard/multi-purpose-card.component";
import ButtonContainer from "../../components/button/button.component";
import FoodImg from "../../assets/food.png";
import { colors } from "../../infrastructure/theme/colors";
import HorizontalTable from "../../components/HorizontalTable/horizontalTable.component";

export const OrderDetailsScreen = ({ navigation, route }) => {
  return (
    <SafeArea showStatusBar={true}>
      <Container background="#FFF9EC" height="100%">
        <Header
          paddingHorizontal
          svg={
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="ios-arrow-undo" size={24} color="#F38B1C" />
            </TouchableOpacity>
          }
          text={`Order Details; ${route.params.order.price}`}
        />
        <ScrollView
          style={{ width: "100%" }}
          showsVerticalScrollIndicator={false}
        >
          <View>
            <OrderTotalCard>
              <OrderText color="#F38B1C" fontSize="16px" fontWeight="bold">
                Order ID: #CR845645
              </OrderText>
              <OrderText>Order Date: 08-04-2021</OrderText>
              <OrderText>No of Dish: 3</OrderText>
              <OrderText>
                Total:{" "}
                <MaterialCommunityIcons
                  name="currency-ngn"
                  size={14}
                  color="black"
                />
                6400
              </OrderText>
            </OrderTotalCard>

            <ItemsContainer>
              <HeaderWrap>
                <HeaderTitle>Items in my order</HeaderTitle>
              </HeaderWrap>
              <EachCard>
                <Text>
                  <OrderDeliveryText color={colors.green.strong}>
                    Delivered
                  </OrderDeliveryText>{" "}
                  <OrderDeliveryDate>08-04-2021</OrderDeliveryDate>
                </Text>
                <MultiPurposeCard
                  foodName="Chicken peppersoup"
                  address="6 Factory Rd(Leventis building) Aba, Abia State, Nigeria."
                  orderStatus={true}
                  source={FoodImg}
                  price={1400}
                  elevation={-1}
                />
                <ButtonContainer text="Buy Again" />
              </EachCard>
              <EachCard>
                <Text>
                  <OrderDeliveryText color={colors.yellow.strong}>
                    On Delivery
                  </OrderDeliveryText>{" "}
                  <OrderDeliveryDate>08-04-2021</OrderDeliveryDate>
                </Text>
                <MultiPurposeCard
                  foodName="Hot Dog Pie"
                  address="54 East West Road Abia State, Nigeria."
                  orderStatus={true}
                  price={500}
                  elevation={-1}
                />
              </EachCard>
            </ItemsContainer>
            <HorizontalTable
              nameOrCardNumber="Name"
              headerText={null}
              addressChange={false}
            />
            <HorizontalTable
              nameOrCardNumber="Card Payment"
              cardNumber="0000123****"
              nameOrNumber={null}
              headerText={null}
              headerTitle="Payment Details"
              address={null}
              expiryDate={null}
              emailOrcardHolder="Card Holder Name"
              emailOrHolder="Matthew Cabret"
            />
          </View>
        </ScrollView>
      </Container>
    </SafeArea>
  );
};
