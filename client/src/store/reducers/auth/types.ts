import {IUser} from '../../../models/IUser'

export interface Istate{
    User:IUser,
    Loading: boolean,
    isAuth: boolean,
    Error: string
    
}

export interface Iaction{
    type:{}
    payload:IUser
}

export enum allTypes{
    SET_USER= 'LOGIN',
    SET_LOADING = 'LOADING',
    SET_AUTH = 'SET_AUTH',
    SET_ERROR = 'SET_ERROR'
}


export interface IActionLogin{
    type: allTypes.SET_USER,
    payloud: IUser
}

export interface IActionLoading{
    type: allTypes.SET_LOADING,
    payloud: boolean,
}

export interface IActionAuth{
    type: allTypes.SET_AUTH,
    payloud: boolean,
}

export interface IActionError{
    type: allTypes.SET_ERROR,
    payloud: string,
}

export  type allActions = IActionLogin | IActionLoading | IActionAuth | IActionError


