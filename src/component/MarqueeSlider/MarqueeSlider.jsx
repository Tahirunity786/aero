'use client';

import PropTypes from "prop-types";
import styles from "./MarqueeSlider.module.css";

const MarqueeSlider = ({ items, scrollSpeed }) => {
    return (
        <div className={styles.SliderContainer}>
            <marquee behavior="scroll" direction="left" scrollamount={scrollSpeed}>
                {items.map((item, index) => (
                    <div className={styles.SliderItem} key={index}>
                        {item.content || item}
                    </div>
                ))}
            </marquee>
        </div>
    );
};

MarqueeSlider.propTypes = {
    items: PropTypes.array.isRequired, // Array of items to display
    scrollSpeed: PropTypes.number, // Speed of the marquee scrolling
};

MarqueeSlider.defaultProps = {
    scrollSpeed: 5, // Default scroll speed
};

export default MarqueeSlider;
