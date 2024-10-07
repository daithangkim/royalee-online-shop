import React, { memo } from "react";
import { AppBar, Box, Tab, Tabs, Typography, useMediaQuery } from "@mui/material";
import AdSliderFeature from "../features/AdSlider/AdSlider";
import ProductListFeature from "../features/ProductList";
import ContactFeature from "../features/Contact/Contact";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import {setTab} from "../redux/slices/tabSlice";

const CustomTabPanel = memo(({ value, tabKey, children }) => {
    const isSmallScreen = useMediaQuery('(max-width: 32rem)');
    return (
        <div role="tabpanel" hidden={value !== tabKey} id={`tabpanel-${tabKey}`} aria-labelledby={`tab-${tabKey}`}>
            {value === tabKey && (
                <Box p={3} sx={{ fontSize: isSmallScreen ? 'xx-small' : 'unset' }}>
                    {children}
                </Box>
            )}
        </div>
    );
});

const Main = () => {
    const dispatch = useDispatch();
    const currentTab = useSelector((state) => state.tab.currentTab);

    const handleTabChange = (event, newValue) => {
        dispatch(setTab(newValue));
    };

    return (
        <div style={{ margin: 0, padding: 0, width: '100%', height: '100vh' }}>
            <Box
                sx={{
                    backgroundColor: '#ffffff',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                }}
            >

                <AppBar position="static" sx={{ backgroundColor: 'rgb(5,20,54)' }}>
                    <Tabs
                        value={currentTab}
                        onChange={handleTabChange}
                        sx={{ display: 'flex', justifyContent: 'space-around' }}
                        TabIndicatorProps={{ style: { backgroundColor: '#9c7945' } }}>
                        <Tab label="Home" value="home" sx={{ fontSize: '1rem', color: '#9c7945' }} />
                        <Tab label="Bestseller" value="bestseller" sx={{ fontSize: '1rem', color: '#9c7945' }} />
                        <Tab label="New Products" value="newProducts" sx={{ fontSize: '1rem', color: '#9c7945' }} />
                        <Tab label="Contact" value="contact" sx={{ fontSize: '1rem', color: '#9c7945' }} />
                    </Tabs>
                </AppBar>

                <CustomTabPanel value={currentTab} tabKey="home">
                    <Box sx={{ padding: '10px' }}>
                        <AdSliderFeature />
                    </Box>
                    <Typography variant="h4"><br />Products<br /></Typography>
                    <Box>
                        <ProductListFeature tabKey="home" />
                    </Box>
                </CustomTabPanel>

                <CustomTabPanel value={currentTab} tabKey="bestseller">
                    <Typography variant="h4">Bestseller</Typography>
                    <Box>
                        <ProductListFeature tabKey="bestseller" />
                    </Box>
                </CustomTabPanel>

                <CustomTabPanel value={currentTab} tabKey="newProducts">
                    <Typography variant="h4">New Products</Typography>
                    <Box>
                        <ProductListFeature tabKey="newProducts" />
                    </Box>
                </CustomTabPanel>

                <CustomTabPanel value={currentTab} tabKey="contact">
                    <ContactFeature />
                </CustomTabPanel>

                <Box sx={{ flexShrink: 0 }}>
                    <Footer />
                </Box>
            </Box>
        </div>
    );
};

export default Main;
