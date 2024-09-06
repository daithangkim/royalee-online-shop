import React from "react";
import { Box, Container } from "@mui/material";
import AdSliderFeature from "../features/AdSlider/AdSlider";
import ProductListFeature from "../features/ProductList";

const Main = () => {
    return (
        <div style={{ margin: 0, padding: 0, width: '100%', height: '100vh' }}>
            <Container
                sx={{
                    backgroundColor: '#ffffff',
                    width: '100%',
                    height: '100%',
                    maxWidth: '100%', // Override default max-width
                    padding: 0, // Remove default padding
                    margin: 0, // Remove default margin
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between', // Distribute space evenly
                }}
            >
                {/* Ad slider */}
                <Box sx={{padding: '10px'}}>
                    <AdSliderFeature />
                </Box>

                {/* Products */}
                <Box>
                    <ProductListFeature />
                </Box>
            </Container>
        </div>
    );
};

export default Main;
