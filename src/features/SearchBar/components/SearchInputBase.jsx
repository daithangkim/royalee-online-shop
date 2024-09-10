import React from 'react'
import {InputBase} from "@mui/material";

const SearchInputBase = () => {
    return (
            <InputBase
                placeholder="Search on royalee..."
                sx={{
                    backgroundColor: 'white',
                    padding: '5px 10px',
                    borderRadius: '4px 0 0 4px',
                    flexGrow: 1,
                    height: '34px',
                    '&:hover': {
                        borderColor: 'black',
                    },
                }}
            />
    )
}
export default SearchInputBase
