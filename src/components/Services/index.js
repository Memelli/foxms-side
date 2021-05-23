import React from 'react'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements'
import Icon1 from '../../images/svg-5.svg'
import Icon2 from '../../images/svg-4.svg'
import Icon3 from '../../images/svg-6.svg'


const Services = () => {
    return (
        <>
            <ServicesContainer>
                <ServicesH1>Experiencias</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={Icon1} />
                        <ServicesH2>Lorem Ipsum</ServicesH2>
                        <ServicesP>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon2} />
                        <ServicesH2>Lorem Ipsum II</ServicesH2>
                        <ServicesP>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon3} />
                        <ServicesH2>Lorem Ipsum III</ServicesH2>
                        <ServicesP>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
            </ServicesContainer>
        </>
    )
}

export default Services
