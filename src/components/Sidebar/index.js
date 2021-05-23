import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements'

const Sidebar = () => {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="trabalhos">
                        Trabalhos
                    </SidebarLink>
                    <SidebarLink to="trabalhos">
                        Estudos
                    </SidebarLink>
                    <SidebarLink to="trabalhos">
                        Contato
                    </SidebarLink>
                    <SidebarLink to="trabalhos">
                        Sobre
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/painel">
                        Painel
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
