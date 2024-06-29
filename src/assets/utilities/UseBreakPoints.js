import { useState, useEffect } from 'react';

export const breakpoints = {
    mobile: 600,
    tablet: 1200,
  };
  
const getDeviceConfig = (width) => {
  if (width <= breakpoints.mobile) {
    return 'mobile';
  } else if (width > breakpoints.mobile && width <= breakpoints.tablet) {
    return 'tablet';
  } else {
    return 'desktop';
  }
};



export const UseBreakpoints = () => {

  const [device, setDevice] = useState(getDeviceConfig(window.innerWidth));

  const getResponsiveStyles = () => {
    switch (device) {
        case "mobile":
            return { width: "60%", padding: "10px" };
        case "tablet":
            return { width: "80%", padding: "20px" };
        case "desktop":
            return { width: "100%", padding: "0px" };
        default:
            return {};
    }
};
const responsiveStyles = getResponsiveStyles();

  useEffect(() => {
    const handleResize = () => {
      setDevice(getDeviceConfig(window.innerWidth));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return device;
};
