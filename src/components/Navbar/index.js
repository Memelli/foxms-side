import React from 'react'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink, IconLogo } from './NavbarElements'
import { FaBars } from 'react-icons/fa';

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                        FoxMS <IconLogo />
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="trabalhos">Trabalhos</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="estudo">Estudo</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contato">Contato</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="sobre">Sobre</NavLinks>
                        </NavItem>
                        <NavBtn>
                            <NavBtnLink to="/painel">Painel</NavBtnLink>
                        </NavBtn>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
