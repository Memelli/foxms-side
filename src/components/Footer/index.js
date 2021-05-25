import React from 'react'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebSiteRights, SocialIcons, SocialIconLink } from './FooterElements'

import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa'

const Footer = () => {
    return (
        <>
        <FooterContainer>
            <FooterWrap>
                {/* <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Lorem Ipsum</FooterLinkTitle>
                                <FooterLink to="/">Lorem Ipsum act</FooterLink>
                                <FooterLink to="/">Lorem Ipsum act</FooterLink>
                                <FooterLink to="/">Lorem Ipsum act</FooterLink>
                                <FooterLink to="/">Lorem Ipsum act</FooterLink>
                                <FooterLink to="/">Lorem Ipsum act</FooterLink>
                                
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Lorem Ipsum</FooterLinkTitle>
                                <FooterLink to="/">Lorem Ipsum act</FooterLink>
                                <FooterLink to="/">Lorem Ipsum act</FooterLink>
                                <FooterLink to="/">Lorem Ipsum act</FooterLink>
                                <FooterLink to="/">Lorem Ipsum act</FooterLink>
                                <FooterLink to="/">Lorem Ipsum act</FooterLink>
                                
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Lorem Ipsum</FooterLinkTitle>
                                <FooterLink to="/">Lorem Ipsum act</FooterLink>
                                <FooterLink to="/">Lorem Ipsum act</FooterLink>
                                <FooterLink to="/">Lorem Ipsum act</FooterLink>
                                <FooterLink to="/">Lorem Ipsum act</FooterLink>
                                <FooterLink to="/">Lorem Ipsum act</FooterLink>
                                
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Lorem Ipsum</FooterLinkTitle>
                                <FooterLink to="/">Lorem Ipsum act</FooterLink>
                                <FooterLink to="/">Lorem Ipsum act</FooterLink>
                                <FooterLink to="/">Lorem Ipsum act</FooterLink>
                                <FooterLink to="/">Lorem Ipsum act</FooterLink>
                                <FooterLink to="/">Lorem Ipsum act</FooterLink>
                                
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Lorem Ipsum</FooterLinkTitle>
                                <FooterLink to="/">Lorem Ipsum act</FooterLink>
                                <FooterLink to="/">Lorem Ipsum act</FooterLink>
                                <FooterLink to="/">Lorem Ipsum act</FooterLink>
                                <FooterLink to="/">Lorem Ipsum act</FooterLink>
                                <FooterLink to="/">Lorem Ipsum act</FooterLink>
                                
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer> */}
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>
                            memelli.
                        </SocialLogo>
                        <WebSiteRights>memelli © {new Date().getFullYear()} todos os direitos reservados.</WebSiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
                                <FaLinkedin />
                            </SocialIconLink>
                            <SocialIconLink href="//www.github.com/memelli" target="_blank" aria-label="Github">
                                <FaGithub />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                    </SocialMedia>
            </FooterWrap>
        </FooterContainer>
        </>
    )
}

export default Footer
