import React from "react";
import { Container } from "../../components/container/container.component";
import { Header } from "../../components/header/header.component";
import { SafeArea } from "../../components/utility/safe-area.component";
import { Ionicons } from "@expo/vector-icons";
import { OrderDetailsContainer, OrderArranger } from "./order-status.styles";
import DeliveryProgressCard from "../../components/deliveryCard/deliveryCard.component";
import { colors } from "../../infrastructure/theme/colors";

const OrderStatus = () => {
  return (
    <SafeArea showStatusBar={true}>
      <Container background="#FFF9EC" height="100%">
        <Header
          paddingHorizontal
          svg={<Ionicons name="ios-arrow-undo" size={24} color="#F38B1C" />}
          text="Order Details"
        />
        <OrderDetailsContainer>
          <DeliveryProgressCard
            situation="Order Placed"
            date="08-04-2021"
            hour="10:20"
            time="AM"
            color={colors.blue.strong}
            lineColor={colors.primary}
          />
          <OrderArranger>
            <DeliveryProgressCard
              color={colors.yellow.strong}
              date="22-04-2021"
              time="PM"
              hour="01:30"
              lineColor={colors.headerShade.soft}
              situation="on delivery"
            />
          </OrderArranger>
          <OrderArranger>
            <DeliveryProgressCard
              color={colors.yellow.strong}
              opacity={1}
              color={colors.headerShade.soft}
              situation="Delivered"
            />
          </OrderArranger>
        </OrderDetailsContainer>
      </Container>
    </SafeArea>
  );
};

export default OrderStatus;
