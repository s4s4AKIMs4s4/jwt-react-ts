import { Button } from 'antd';
import React,{FC} from 'react'
import {IUser} from "../models/IUser";
import {UserPageWrapper,LogoutButton} from './StyledPageElements/UserPageWrapper'
import {ButtonElemet} from '../components/ButtonElemet'

interface IUserPage{
    isAuth: boolean,
    User:IUser,
    users: IUser[],
    logout:() => void
}




const UserPage: FC<IUserPage> = ({isAuth,User,logout,users}) => {
    return (
        <div>
            <UserPageWrapper >
                        <h1>{isAuth ? `Пользователь авторизован ${User.email}` : 'АВТОРИЗУЙТЕСЬ'}</h1>
                        <h1>{User.isActivated ? 'Аккаунт подтвержден по почте' : 'ПОДТВЕРДИТЕ АККАУНТ!!!!'}</h1>
           
                        <ButtonElemet onClick={() =>logout()}>Выйти</ButtonElemet>
                        {users.map(user =>
                            <div key={user.email}>{user.email}</div>
                        )}
            </UserPageWrapper>
        </div>
        
    )
}

export default UserPage
