import React, { useState } from 'react'
import {
  SearchBarContainer,
  SearchBarWrapper,
  StyledSearchbar,
  Icon,
} from './styles'
import IconIMage from '../../assets/logo.png'
// import Icon from "react-native-vector-icons"

export const SearchBar = (source) => {
  const [searchQuery, setSearchQuery] = useState('')

  const onChangeSearch = (query) => setSearchQuery(query)

  return (
    <SearchBarContainer>
      <SearchBarWrapper flexDirection="row" justifyContent="space-around">
        <StyledSearchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
        <Icon source={IconIMage} />
        {/* <Icon source={source} height={34} width={34}  /> */}
      </SearchBarWrapper>
    </SearchBarContainer>
  )
}
