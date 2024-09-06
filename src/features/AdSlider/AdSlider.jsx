import React, {useState} from "react";
import {Box, IconButton} from "@mui/material";
import {ArrowBackIos, ArrowForwardIos,} from "@mui/icons-material";


const sliderData = [
    {image: "https://www.shutterstock.com/shutterstock/photos/2152461289/display_1500/stock-vector--d-anti-aging-or-rejuvenate-cosmetic-cream-ad-template-blue-glass-jar-mock-up-with-shining-clock-2152461289.jpg"},
    {image: "https://www.shutterstock.com/shutterstock/photos/1644360205/display_1500/stock-vector-cosmetics-bottle-on-podium-mock-up-banner-beauty-skin-care-cosmetic-tube-on-abstract-geometric-1644360205.jpg"},
    {image: "https://www.shutterstock.com/shutterstock/photos/745071622/display_1500/stock-vector-vector-glass-vial-with-professional-facial-serum-on-the-background-of-waves-and-bubbles-template-745071622.jpg"},
];

const AdSliderFeature = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === sliderData.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? sliderData.length - 1 : prevIndex - 1
        );
    };

    return (
        <Box sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                height: "300px",
                overflow: "hidden",
            }}
        >{sliderData.map((slide, index) => (
                <Box
                    key={index}
                    component="img"
                    src={slide.image}
                    alt={`slide-${index}`}
                    sx={{
                        display: index === currentIndex ? "block" : "none",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "opacity 0.5s ease",
                    }}
                />
            ))}

            <IconButton
                onClick={handlePrev}
                sx={{
                    position: "absolute",
                    left: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "white",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    "&:hover": {
                        backgroundColor: "rgba(0, 0, 0, 0.7)",
                    },
                }}
            ><ArrowBackIos/>
            </IconButton>

            <IconButton
                onClick={handleNext}
                sx={{
                    position: "absolute",
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "white",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    "&:hover": {
                        backgroundColor: "rgba(0, 0, 0, 0.7)",
                    },
                }}
            ><ArrowForwardIos/>
            </IconButton>

        </Box>
    );
};

export default AdSliderFeature;
