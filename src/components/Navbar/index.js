import React from 'react'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements'
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo top="/">
                        memelli.
                    </NavLogo>
                    <MobileIcon>
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
                            <NavBtnLink to="/entrar">Painel</NavBtnLink>
                        </NavBtn>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
