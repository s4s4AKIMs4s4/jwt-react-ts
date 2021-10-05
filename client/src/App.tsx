import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import './App.css'
import Header from './components/Header'
import './Global.css'
import AuthPage from './page/authPage';

import {Switch, Route } from 'react-router-dom';
import F from './page/heplPage';


const App = () => {
    const {Content, Footer } = Layout;
    return (
        <>
         <Layout className="layout">
            <Header/>
            
            <Content>
                    <Switch>
                        <Route path = '/' component = {AuthPage}  exact/>
                        <Route path = '/help' component = {F}  exact/> 
                    </Switch>    
            </Content>

            <Footer style={{ textAlign: 'center' }}>Ant Design ©2021 Created by Ant UED</Footer>
        </Layout>

        </>
    )
}

export default App
