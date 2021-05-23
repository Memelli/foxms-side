import React from 'react'

const InfoSection = () => {
    return (
        <>
            <InfoContainer id={id}>
                <InfoWrapper>
                    <InfoRow>
                        <Column1>
                            <TextWrapper>
                                <TopLine>Top</TopLine>
                                <Heading>Heading</Heading>
                                <Subtitle>Sub</Subtitle>
                                <BtnWrap>
                                    <Button to="home"></Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
