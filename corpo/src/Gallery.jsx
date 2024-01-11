// Gallery.jsx
import React from 'react';
import './Gallery.css'; // Import the CSS file for styling
import { styled } from '@mui/system';
import Button from '@mui/material/Button';

const StyledButton = styled(Button)({
    backgroundColor: 'rgba(0, 0, 0, 0)', // Set your desired button background color
    border: '2px solid #609999', // Set the border color and width
    color: 'white', // Set your desired text color
    margin: '10px', // Adjust the margin as needed
    '&:hover': {
        backgroundColor: '#C0E6E6', // Change color on hover
    },
});

const Gallery = () => {
    return (
        <div className="gallery-container">
            <div className="gallery-background"></div>
            <section className="drip-section">
                <div className="drip-container-black">
                    <h1 className="glitch"> Corpo</h1>
                    <div className="drip-one-black"></div>
                    <div className="_drip-one-black"></div>
                    <div className="__drip-one-black"></div>
                    <div className="drip-two-black"></div>
                    <div className="drip-three-black"></div>
                    <div className="drip-four-black"></div>
                </div>
            </section>
        </div>
    );
}
export default Gallery;