'use client';
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import styles from "./slider.module.css";

const Slider = ({ items, transitionDuration }) => {
    // State to track the current slide index
    const [currentSlide, setCurrentSlide] = useState(0);

    // State to determine how many items to display per slide based on screen size
    const [itemsPerSlide, setItemsPerSlide] = useState(3);

    // Calculate the total number of slides
    const totalSlides = Math.ceil(items.length / itemsPerSlide);

    // State to track if the user is dragging (for drag functionality)
    const [dragging, setDragging] = useState(false);

    useEffect(() => {
        // Function to dynamically adjust the number of items per slide based on screen width
        const handleResize = () => {
            const width = window.innerWidth;
            if (width <= 768) {
                setItemsPerSlide(1); // For small screens
            } else if (width <= 1024) {
                setItemsPerSlide(2); // For medium screens
            } else {
                setItemsPerSlide(3); // For large screens
            }
        };

        // Set the initial number of items per slide
        handleResize();

        // Add event listener to update on window resize
        window.addEventListener("resize", handleResize);

        // Cleanup event listener on component unmount
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Function to move to the next slide
    const nextSlide = () => {
        if (currentSlide < totalSlides - 1) {
            setCurrentSlide(currentSlide + 1);
        }
    };

    // Function to move to the previous slide
    const prevSlide = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
        }
    };

    // Function to handle drag end and determine the direction of drag
    const handleDragEnd = (_, info) => {
        setDragging(false);
        if (info.offset.x > 50 && currentSlide > 0) {
            prevSlide(); // Drag right to move to the previous slide
        } else if (info.offset.x < -50 && currentSlide < totalSlides - 1) {
            nextSlide(); // Drag left to move to the next slide
        }
    };

    // Function to get the items visible in the current slide
    const getVisibleSlides = () => {
        const startIndex = currentSlide * itemsPerSlide;
        return items.slice(startIndex, startIndex + itemsPerSlide);
    };

    // Animation variants for slide transitions
    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction) => ({
            x: direction < 0 ? 300 : -300,
            opacity: 0,
        }),
    };

    return (
        <div className={styles.SliderContainer}>
            {/* Left arrow button */}
            <button
                onClick={prevSlide}
                disabled={currentSlide === 0} // Disable if on the first slide
                className={`${styles.SliderButton} ${styles.SliderButtonLeft}`}
            >
                <svg fill="#000000" height="20px" width="20px" viewBox="0 0 330 330">
                    <path d="M111.213,165.004L250.607,25.607c5.858-5.858,5.858-15.355,0-21.213c-5.858-5.858-15.355-5.858-21.213,0.001l-150,150.004C76.58,157.211,75,161.026,75,165.004c0,3.979,1.581,7.794,4.394,10.607l150,149.996C232.322,328.536,236.161,330,240,330s7.678-1.464,10.607-4.394c5.858-5.858,5.858-15.355,0-21.213L111.213,165.004z"></path>
                </svg>
            </button>

            {/* Slider wrapper to contain the slides */}
            <div className={styles.SliderWrapper}>
                <AnimatePresence mode="wait" custom={currentSlide}>
                    <motion.div
                        key={currentSlide}
                        className={styles.SliderSlide}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        custom={currentSlide}
                        variants={slideVariants}
                        transition={{ duration: transitionDuration }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        onDragStart={() => setDragging(true)} // Set dragging state when drag starts
                        onDragEnd={handleDragEnd} // Handle drag end
                    >
                        {/* Render visible items */}
                        {getVisibleSlides().map((item, index) => (
                            <div className={styles.SliderItem} key={item.id || index}>
                                {item.content || item} {/* Render item's content */}
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Right arrow button */}
            <button
                onClick={nextSlide}
                disabled={currentSlide === totalSlides - 1} // Disable if on the last slide
                className={`${styles.SliderButton} ${styles.SliderButtonRight}`}
            >
                <svg fill="#000000" height="20px" width="20px" viewBox="0 0 330.002 330.002">
                    <path d="M233.252,155.997L120.752,6.001c-4.972-6.628-14.372-7.97-21-3c-6.628,4.971-7.971,14.373-3,21l105.75,140.997L96.752,306.001c-4.971,6.627-3.627,16.03,3,21c2.698,2.024,5.856,3.001,8.988,3.001c4.561,0,9.065-2.072,12.012-6.001l112.5-150.004C237.252,168.664,237.252,161.33,233.252,155.997z"></path>
                </svg>
            </button>
        </div>
    );
};

Slider.propTypes = {
    items: PropTypes.array.isRequired, // Array of items to display
    transitionDuration: PropTypes.number, // Duration of slide transition
};

Slider.defaultProps = {
    transitionDuration: 0.5, // Default transition duration
};

export default Slider;
