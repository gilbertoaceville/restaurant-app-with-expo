import styled from "styled-components"
import { Searchbar } from 'react-native-paper';
import { Container } from "../../components/container/container.component";

export const SearchBarContainer = styled.View`
${'' /* background-color:green; */}
width:100%;
height:52px;
align-items:center;
 `


export const SearchBarWrapper = styled(Container)`

width:100%;


`
export const StyledSearchbar = styled(Searchbar)`
background-color:white;
width:85%;

border-radius:16px;
height:52px;
`
export const Icon = styled.Image`
height:34px;
width:10%;
background-color:blue;

`