import React from "react";
import { SafeArea } from "../../components/utility/safe-area.component";
import { Spacer } from "../../components/spacer/spacer.component";
import { PageContainer, ScrollContainer } from "./test.styles";
import { CardListHeader } from "../../components/cardListHeader/cardListHeader.component";
import { RestrauntsBranchCard } from "../../components/restrauntsBranchCard/restrauntsBranchCard.component";
import { Fab } from "../../components/fab/fab.component";
import { colors } from "../../infrastructure/theme/colors";
import { RadioButtonComponent } from "../../components/radioButton/radioButton.component";
import { CheckboxComponent } from "../../components/checkBox/checkBox.component";
import { MultiPurposeCard } from "../../components/multiPurposeCard/multiPurposeCard.component";

import { Header } from "../../components/header/header.component";
import Crunchies from "../../assets/Crunchies.png";
import { NotificationCard } from "../../components/notificationCard/notificationCard.component";
import HorizontalTable from "../../components/HorizontalTable/horizontalTable.component";
import GRD from "../../assets/profile.png";
import DeliveryManagementCard from "../../components/deliveryManagementCard/deliveryManagementCard.component";

const Test = () => {
  return (
    <SafeArea showStatusBar={true}>
      <PageContainer paddingHorizontal>
        <ScrollContainer>
          <Spacer size="large" position="top" />
          <CardListHeader />
          <Spacer size="large" position="top" />
          <RestrauntsBranchCard />
          <Spacer size="large" position="top" />
          <Header text="Orders" source={Crunchies} />
          <Spacer size="large" position="top" />
          <RadioButtonComponent />
          <CheckboxComponent />
          <Spacer size="large" position="top" />
          <MultiPurposeCard />
          <Spacer size="large" position="top" />
          <MultiPurposeCard counter />
          <Spacer size="large" position="top" />
          <MultiPurposeCard favourite />
          <Spacer size="large" position="top" />
          <DeliveryManagementCard
          // DeliveryAgentTitle={false}
          // OrderDetailsSection={false}
          />
          <Spacer size="large" position="top" />
          <MultiPurposeCard orderStatus />
          <Spacer size="large" position="top" />
          <MultiPurposeCard orderStatus quantity="6" />
          <Spacer size="large" position="top" />
          <NotificationCard />
          <Spacer size="large" position="top" />
          <HorizontalTable orderSummary />
        </ScrollContainer>
        <Fab />
      </PageContainer>
    </SafeArea>
  );
};
export default Test;
