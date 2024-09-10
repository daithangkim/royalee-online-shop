import React, {useState} from "react";
import {AppBar, Box, Tab, Tabs, Typography} from "@mui/material";
import AdSliderFeature from "../features/AdSlider/AdSlider";
import ProductListFeature from "../features/ProductList";
import ContactFeature from "../features/Contact/Contact";

// CustomTabPanel Component
const CustomTabPanel = ({value, index, children}) => {
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
        <div style={{margin: 0, padding: 0, width: '100%', height: '100vh'}}>
            <Box
                sx={{
                    backgroundColor: '#ffffff',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                }}
            >
                {/* Top AppBar with Tabs */}
                <AppBar position="static" sx={{backgroundColor: 'rgb(5,20,54)'}}>
                    <Tabs
                        value={tabIndex}
                        onChange={handleTabChange}
                        sx={{display: 'flex', justifyContent: 'space-around'}}
                        TabIndicatorProps={{style: {backgroundColor: '#ffffff'}}}>
                        {["Home", "Bestseller", "New Products", "Contact"].map((label, index) => (
                            <Tab key={index} label={label} sx={{fontSize: '1rem', color: '#ffffff'}}/>
                        ))}
                    </Tabs>
                </AppBar>

                {/* Home tab */}
                <CustomTabPanel value={tabIndex} index={0}>
                    <Box sx={{padding: '10px'}}>
                        <AdSliderFeature/>
                    </Box>
                    <Box>
                        <ProductListFeature/>
                    </Box>
                </CustomTabPanel>

                {/* Bestseller tab */}
                <CustomTabPanel value={tabIndex} index={1}>
                    <Typography variant="h4">Bestseller</Typography>
                    <Box>
                        <ProductListFeature/>
                    </Box>
                </CustomTabPanel>

                {/* New Products tab  */}
                <CustomTabPanel value={tabIndex} index={2}>
                    <Typography variant="h4">New Products</Typography>
                    <Box>
                        <ProductListFeature/>
                    </Box>

                </CustomTabPanel>

                {/* Contact tab */}
                <CustomTabPanel value={tabIndex} index={3}>
                    <Typography variant="h4">Contact Us</Typography>
                    <ContactFeature/>
                </CustomTabPanel>
            </Box>
        </div>
    );
};

export default Main;
