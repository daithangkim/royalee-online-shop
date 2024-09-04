import React from "react";
import {Box, Container} from "@mui/material";
import AdSliderFeature from "../features/AdSlider/AdSlider";
import ProductListFeature from "../features/ProductList";

const Main = () => {
    return (
        <div>
            <h1>Main</h1>
            <Container>
                {/*ad slider*/}
                <Box>
                    <AdSliderFeature/>
                </Box>

                {/*products*/}
                <Box>
                    <ProductListFeature/>
                </Box>
            </Container>
        </div>
    );
};

export default Main;
