// src/features/AllCategory/AllCategory.jsx
import React, { useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import {ArrowDropDown} from "@mui/icons-material";
import categories from "./AllCategoryData";

const AllCategory = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                variant="contained"
                onClick={handleClick}
                sx={{
                    backgroundColor: '#1d3670',
                    height: '34px',
                    padding: '20px 0',
                    color: 'white',
                    '&:hover': {
                        backgroundColor: '#1d4170',
                    },
                }}
            >
                <ArrowDropDown/>All
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                sx={{
                    '& .MuiPaper-root': {
                        marginTop: '5px',
                    }
                }}>
                {categories.map((category, index) => (
                    <MenuItem key={index} onClick={handleClose}>
                        {category}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
};

export default AllCategory;
