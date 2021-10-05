import {Istate, allActions, allTypes} from './types'
import {IUser} from '../../../models/IUser'

const initState: Istate = {
    User: {} as IUser,
    Loading: false,
    isAuth: false,
    Error:''
}


export default function reducerAuth(state = initState, action: allActions): Istate{
    switch (action.type){
        case allTypes.SET_USER: return {...state, User: action.payloud,Error:''}
        case allTypes.SET_LOADING: return {...state, Loading: action.payloud}
        case allTypes.SET_AUTH: return {...state, isAuth: action.payloud,Error:''}
        case allTypes.SET_ERROR: return {...state,Error:action.payloud}
        default: return state
    }
}



