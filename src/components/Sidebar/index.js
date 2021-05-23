import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink onClick={toggle} to="trabalhos">
                        Trabalhos
                    </SidebarLink>
                    <SidebarLink onClick={toggle} to="trabalhos">
                        Estudos
                    </SidebarLink>
                    <SidebarLink onClick={toggle} to="trabalhos">
                        Contato
                    </SidebarLink>
                    <SidebarLink onClick={toggle} to="trabalhos">
                        Sobre
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute onClick={toggle} to="/painel">
                        Painel
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
