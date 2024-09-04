import React, {useState} from "react";
import {Box, IconButton} from "@mui/material";
import {ArrowBackIos, ArrowForwardIos,} from "@mui/icons-material";


const sliderData = [
    {image: "https://via.placeholder.com/800x300.png?text=Advertisement+1"},
    {image: "https://via.placeholder.com/800x300.png?text=Advertisement+2"},
    {image: "https://via.placeholder.com/800x300.png?text=Advertisement+3"},
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
                width: "800px",
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
