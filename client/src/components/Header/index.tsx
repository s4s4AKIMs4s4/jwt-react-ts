import React from 'react'
import { Layout, Menu } from 'antd';

import {HeaderContainer,LogoContainer} from './headerElemetns'


const Header = () => {
    const { Header } = Layout;
    return (
        <Header>
            <HeaderContainer>
                <LogoContainer to = '/'>Authorization </LogoContainer>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>       
                    <Menu.Item> <a href='/help'>help page</a> </Menu.Item>     
                </Menu>
            </HeaderContainer>
        </Header>
            
    )
}

export default Header
