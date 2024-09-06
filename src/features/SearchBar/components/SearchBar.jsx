import React from 'react'
import {Search} from "@mui/icons-material";
import {Button} from "@mui/material";

const SearchBar = () => {
    return (
        <Button
            variant="contained"
            sx={{
                backgroundColor: '#1d3670',
                height: '34px',
                padding: '0 20px',
                borderRadius: '0 4px 4px 0',
                color: 'white',
                '&:hover': {
                    backgroundColor: '#1d4170',
                },}}>
            <Search/>
        </Button>
    )
}
export default SearchBar
