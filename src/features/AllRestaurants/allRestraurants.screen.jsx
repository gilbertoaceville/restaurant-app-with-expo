import React from "react"
import { Container,FlatListContainer } from "../../components/container/container.component"
import { Image } from "react-native"
import {Header} from "../../components/header/header.component"
import { AllRestaurantsContainer,BackIcon } from "./allRestaurants.styles"
import Back from "../../assets/back.png"
import { SearchBar } from "../../components/searchBar/searchBar.component"
import CardImage from "../../assets/Crunchies.png";
import { RestrauntsBranchCard } from "../../components/restrauntsBranchCard/restrauntsBranchCard.component"
import { Spacer } from "../../components/spacer/spacer.component"

const AllRestaurant = () =>{
    const Restaurant = [
        {
          image: CardImage,
          name: "dd",
        },
        {
          image: CardImage,
          name: "dd",
        },
        {
            image: CardImage,
            name: "dd",
          },
          {
            image: CardImage,
            name: "dd",
          },
          {
            image: CardImage,
            name: "dd",
          },
      ];
    
    return(
        <AllRestaurantsContainer showStatusBar="false">
            <Container paddingHorizontal>
                <Header svg={<BackIcon source={Back} />} text="All Restaurants"/>
                <SearchBar sort/>
                <Spacer size="large"/>
        
          <FlatListContainer
            data={Restaurant}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <RestrauntsBranchCard />}
          />
            </Container>

        </AllRestaurantsContainer>
    )
}

export default AllRestaurant;