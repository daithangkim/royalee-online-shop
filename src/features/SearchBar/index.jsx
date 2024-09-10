import React from 'react'
import {Box} from "@mui/material";
import SearchInputBase from "./components/SearchInputBase";
import SearchBar from "./components/SearchBar";
import AllCategory from "../AllCategory/AllCategory";

const SearchBarFeature = () => {
    return (
        <Box display="flex" alignItems="center" sx={{ width: '100%', height: '34px' }}>
            <AllCategory/>
            <SearchInputBase/>
            <SearchBar/>
        </Box>
    )
}
export default SearchBarFeature
