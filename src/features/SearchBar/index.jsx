import React from 'react'
import {Box} from "@mui/material";
import SearchInputBase from "./components/SearchInputBase";
import SearchBar from "./components/SearchBar";

const SearchBarFeature = () => {
    return (
        <Box>
            <SearchInputBase/><SearchBar/>
        </Box>
    )
}
export default SearchBarFeature
