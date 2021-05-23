import React, { useState } from 'react';
import Video from '../../videos/video-heroSection-bg3.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroSectionElements'
import { Button } from '../Button/ButtonElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
            </HeroBg>
            <HeroContent>
                <HeroH1>memelli front-end dev</HeroH1>
                <HeroP>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in purus et ipsum varius placerat. Nullam sed lectus fringilla, pellentesque leo quis, eleifend justo. Cras vel volutpat velit.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="algo" onMouseEnter={onHover} onMouseLeave={onHover} primary dark>
                        Lorem Ipsum {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
