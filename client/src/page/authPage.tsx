import React, {FC, useContext, useEffect, useState} from 'react';
import LoginForm from "../components/FormLogin";
import {IUser} from "../models/IUser";
import UserService from "../services/UserService";
import {useTypedSelector} from '../hooks/typedUseSelector'
import {useActions} from '../hooks/useActions'
import {ButtonElemet} from '../components/ButtonElemet'
import UserPage from './userPage'
import {MainLoyoutContainer,GetUsersButton,MainLoyoutWrapper} from './StyledPageElements/aythPageLoyout'




const AuthPage: FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const {Loading,User,isAuth,Error} = useTypedSelector( state => state.auth )
    const {checkAuth, logout} = useActions()
   


    useEffect(() => {
        if (localStorage.getItem('token')) {
            checkAuth()
        }
    }, [])

    async function getUsers() {
        try {
            const response = await UserService.fetchUsers();
            setUsers(response.data);
        } catch (e) {
            console.log(e);
        }
    }

    if (Loading) {
        return <div>Загрузка...</div>
    }



    return (
        <MainLoyoutContainer>
            <MainLoyoutWrapper>
            <div>

                { (!isAuth) 
                ?  
                    <div> 
                        {Error !=='' && <div>{Error}</div>}
                        <div>
                            <LoginForm/>
                        </div> 

                    </div>
                : (

                    <UserPage 
                        logout = {logout} 
                        User = {User} 
                        users = {users} 
                        isAuth = {isAuth} 
                    />

                )   
                    
                }

                
                
            </div>

            <GetUsersButton>
                <ButtonElemet onClick={getUsers}>Get Users</ButtonElemet>
            </GetUsersButton>
            </MainLoyoutWrapper>
    </MainLoyoutContainer>


    );
};

export default AuthPage
