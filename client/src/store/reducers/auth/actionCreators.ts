import {Istate, allActions, allTypes} from './types'
import {IActionAuth,IActionLogin,IActionLoading,IActionError} from './types'
import {AppDispatch} from '../../index'
import {IUser} from '../../../models/IUser'
import AuthService from '../../../services/AuthService'
import { act } from '@testing-library/react'
import {AuthResponse} from "../../../models/response/AuthResponse";
import axios from 'axios';
import {API_URL} from "../../../http";


export const actionCreatorsObj = {
    setAuth:(boolVal: boolean): IActionAuth => ({type:allTypes.SET_AUTH, payloud:boolVal}),
    setLoading:(boolVal: boolean): IActionLoading => ({type:allTypes.SET_LOADING, payloud:boolVal}),
    setUser:(user:IUser): IActionLogin => ({type:allTypes.SET_USER, payloud:user}),
    setError:(message: string):IActionError => ({type:allTypes.SET_ERROR, payloud:message}),
    login: (email: string, password:string) => 
        async (dispatch: AppDispatch) =>{
            try{
                dispatch(actionCreatorsObj.setLoading(true))
                const response = await AuthService.login(email, password);
                console.log(response)
                localStorage.setItem('token', response.data.accessToken);
                dispatch(actionCreatorsObj.setAuth(true));
                dispatch(actionCreatorsObj.setUser(response.data.user))
                
            } catch (e: any) {
                dispatch(actionCreatorsObj.setError(e.response?.data?.message))
                console.log(e.response?.data?.message)
            }finally{
                dispatch(actionCreatorsObj.setLoading(false))
            }
        },

    logout: () => 
        async (dispatch: AppDispatch) =>{
            try {
                dispatch(actionCreatorsObj.setLoading(true))
                const response = await AuthService.logout();
                localStorage.removeItem('token');
                dispatch(actionCreatorsObj.setAuth(false));
                dispatch(actionCreatorsObj.setUser({} as IUser))
                
            }catch(e:any){
                dispatch(actionCreatorsObj.setError(e.response?.data?.message))
                console.log(e.response?.data?.message)
            }finally{
                dispatch(actionCreatorsObj.setLoading(false))
            }

        },

    registrarion: (email: string, password:string) => 
        async (dispatch: AppDispatch) =>{
            try{
                
                dispatch(actionCreatorsObj.setLoading(true))
                const response = await AuthService.registration(email, password);
                console.log(response)
                localStorage.setItem('token', response.data.accessToken);
                dispatch(actionCreatorsObj.setAuth(true));
                dispatch(actionCreatorsObj.setUser(response.data.user))
                
            } catch(e: any){
                dispatch(actionCreatorsObj.setError(e.response?.data?.message))
                console.log(e.response?.data?.message)
            } finally{
                dispatch(actionCreatorsObj.setLoading(false))
            }
        },
    checkAuth: () => 
        async (dispatch: AppDispatch) =>{
            try{
                dispatch(actionCreatorsObj.setLoading(true))
                const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {withCredentials: true})
                console.log(response);
                localStorage.setItem('token', response.data.accessToken);
                dispatch(actionCreatorsObj.setAuth(true));
                dispatch(actionCreatorsObj.setUser(response.data.user))
                
            } catch (e :any){
                dispatch(actionCreatorsObj.setError(e.response?.data?.message))
                console.log(e.response?.data?.message)
            } finally{
                dispatch(actionCreatorsObj.setLoading(false))
            }
        },        

}