import React from 'react'
import Lottie  from 'lottie-react';
import MotionDivAnimation from '../UX-UI/MotionDivAnimation'

export default function LottieAnimation({ children, animationData = '', style = {} }) {
  return (
    <MotionDivAnimation 
        animateDirection={'left'} 
    >
        <Lottie
            animationData={animationData} 
            style={style}
        /> 
        {children}
    </MotionDivAnimation>
  )
}
