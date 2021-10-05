import {useDispatch} from 'react-redux'
import {allActions} from '../store/reducers/action-creators'
import {bindActionCreators} from 'redux'



export const useActions = () => {
    const dispatch = useDispatch ()
    return bindActionCreators(allActions, dispatch) 
}