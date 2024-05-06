import React, { useState, useEffect } from 'react';

const ScrollIndicator = ({ left = '5%', right = '0', ballOffset = 13  }) => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollY = window.scrollY;
      const percentage = (scrollY / (documentHeight - windowHeight)) * 100;
      setScrollPercentage(percentage);
    };

    // Add scroll event listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove scroll event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ ...styles.scrollIndicator, left, right }}>
      <div style={{ ...styles.scrollBall, top: `calc(${scrollPercentage}% + ${ballOffset}%)` }}></div>
      <div style={{ ...styles.scrollBall, top: `calc(${scrollPercentage}% - ${3*ballOffset}%)`}}></div>
      <div style={{ ...styles.scrollBall, top: `calc(${scrollPercentage}% - ${8*ballOffset}%)`}}></div>
    </div>
  );
};

const styles = {
  scrollIndicator: {
    position: 'fixed',
    top: 0,
    height: '100%',
    width: '0.1px', // Adjust width as needed
    backgroundColor: 'rgb(41 ,60 ,204)', // Background color of the scroll indicator
    
  },
  scrollBall: {
    position: 'absolute',
    left: '50%',
    transform: 'translate(-50%, 0)',
    width: '8px', // Width of the scroll ball
    height: '8px', // Height of the scroll ball
    borderRadius: '50%', // Make the scroll ball circular
    backgroundColor: 'white', // Color of the scroll ball
  },
};

export default ScrollIndicator;
