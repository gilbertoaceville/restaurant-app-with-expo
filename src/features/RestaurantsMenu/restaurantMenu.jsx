import React from "react";
import {
  Container,
  FlatListContainer,
} from "../../components/container/container.component";
import { Image } from "react-native";
import { Header } from "../../components/header/header.component";
import {
  AllRestaurantsContainer,
  Flex,
  ContainerView,
} from "./restaurantsMenu.styles.js";
import Back from "../../assets/back.png";
import { SearchBar } from "../../components/searchBar/searchBar.component";
import CardImage from "../../assets/Crunchies.png";
import { RestrauntsBranchCard } from "../../components/restrauntsBranchCard/restrauntsBranchCard.component";
import { Spacer } from "../../components/spacer/spacer.component";
import { VerticalFoodCard } from "../../components/VerticalFoodCard/index";
import Handbugger from "../../assets/handbugger.png";
import ChickenPepperSoup from "../../assets/chickenPepperSoup.png";

const RestaurantMenu = () => {
  const RestaurantMenu = [
    {
      name: "Chicken peppersoup",
      description: "6 Factory Rd(Leventis building) Aba, Abia State, Nigeria.",
      image: ChickenPepperSoup,
      amount: "200",
    },
    {
      name: "Flash",
      description: "We are here with the best desert intown",
      image: Handbugger,
      amount: "200",
    },
    {
      name: "Pizza",
      description: "We are here with the best desert intown",
      image: ChickenPepperSoup,
      amount: "200",
    },
    {
      name: "Flash",
      description: "We are here with the best desert intown",
      image: Handbugger,
      amount: "200",
    },
    {
      name: "Pizza",
      description: "We are here with the best desert intown",
      image: ChickenPepperSoup,
      amount: "200",
    },
    {
      name: "Flash",
      description: "We are here with the best desert intown",
      image: Handbugger,
      amount: "200",
    },
  ];
  const Restaurant = [
    {
      image: CardImage,
      name: "dd",
    },
    {
      image: CardImage,
      name: "dd",
    },
  ];

  return (
    <AllRestaurantsContainer showStatusBar="false">
      <ContainerView>
        <RestrauntsBranchCard borderRadius="0px" />
        <Container paddingHorizontal>
          <SearchBar sort />
        </Container>
        <Spacer size="large" />
        <Flex>
          {RestaurantMenu.map(({ image, name, description, amount }) => (
            <VerticalFoodCard
              source={image}
              name={name}
              location={description}
              amount={amount}
            />
          ))}
        </Flex>
      </ContainerView>
    </AllRestaurantsContainer>
  );
};

export default RestaurantMenu;
