import React, { useState } from "react";
import { AppBar, Box, Container, Tab, Tabs, Typography } from "@mui/material";
import AdSliderFeature from "../features/AdSlider/AdSlider";
import ProductListFeature from "../features/ProductList";
import { ArrowDropDown } from "@mui/icons-material";

// CustomTabPanel Component
const CustomTabPanel = ({ value, index, children }) => {
    return (
        <div role="tabpanel" hidden={value !== index}>
            {value === index && (
                <Box p={3}>
                    {children}
                </Box>
            )}
        </div>
    );
};

const Main = () => {
    const [tabIndex, setTabIndex] = useState(0);

    const handleTabChange = (event, newValue) => {
        setTabIndex(newValue);
    };

    return (
        <div style={{ margin: 0, padding: 0, width: '100%', height: '100vh' }}>
            <Box
                sx={{
                    backgroundColor: '#ffffff',
                    width: '100%',
                    height: '100%',
                    maxWidth: '100%', // Override default max-width
                    padding: 0, // Remove default padding
                    margin: 0, // Remove default margin
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                {/* Top AppBar with Tabs */}
                <AppBar position="static" sx={{ backgroundColor: 'rgb(5,20,54)' }}>
                    <Tabs
                        value={tabIndex}
                        onChange={handleTabChange}
                        sx={{ display: 'flex', justifyContent: 'space-around' }}
                        TabIndicatorProps={{ style: { backgroundColor: '#ffffff' } }} // Customize indicator color
                    >
                        <Tab label={<><ArrowDropDown /> Home</>} sx={{ fontSize: '1rem', color: '#ffffff' }} />
                        <Tab label="Bestseller" sx={{ fontSize: '1rem', color: '#ffffff' }} />
                        <Tab label="New Products" sx={{ fontSize: '1rem', color: '#ffffff' }} />
                        <Tab label="Contact" sx={{ fontSize: '1rem', color: '#ffffff' }} />
                    </Tabs>
                </AppBar>

                {/* Tab Panels for different content */}
                <CustomTabPanel value={tabIndex} index={0}>
                    {/* Home tab content */}
                    <Box sx={{ padding: '10px' }}>
                        <AdSliderFeature />
                    </Box>
                    <Box>
                        <ProductListFeature />
                    </Box>
                </CustomTabPanel>

                <CustomTabPanel value={tabIndex} index={1}>
                    {/* Bestseller tab content */}
                    <Typography variant="h4">Bestseller Content</Typography>
                </CustomTabPanel>

                <CustomTabPanel value={tabIndex} index={2}>
                    {/* New Products tab content */}
                    <Typography variant="h4">New Products Content</Typography>
                </CustomTabPanel>

                <CustomTabPanel value={tabIndex} index={3}>
                    {/* Contact tab content */}
                    <Typography variant="h4">Contact Us</Typography>
                </CustomTabPanel>
            </Box>
        </div>
    );
};

export default Main;
