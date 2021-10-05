import {FC, useState } from "react";
import {useTypedSelector} from '../../hooks/typedUseSelector'
import {useActions} from '../../hooks/useActions'
import {LoginContainer, LoginWrapper,Inputelemet,InputWrapper,ButtonWrapper} from './FormLoginElemets'
import {ButtonElemet} from '../ButtonElemet'

const LoginForm :FC = () =>{
    
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const {} = useTypedSelector( state => state.auth )
    const {login,registrarion} = useActions()
    return (
        <LoginContainer>
            <LoginWrapper>

            <InputWrapper>
                    <Inputelemet 
                        type = "text" 
                        placeholder ="Enter email pls"
                        value = {email} 
                        onChange = { (e) => {setEmail(e.target.value )}}>
                    </Inputelemet>

                    
                    <Inputelemet
                        type = 'password'
                        placeholder ="Enter password pls"
                        value = {password}
                        onChange = { (e) => {setPassword(e.target.value )}}>
                    </Inputelemet>
                </InputWrapper>

                <ButtonWrapper>
                    <ButtonElemet onClick = {() => {login(email, password)} }>
                        login
                    </ButtonElemet>
                
                    <ButtonElemet  onClick = {() => {registrarion(email, password)}} > 
                        registration
                    </ButtonElemet>
                </ButtonWrapper>

            </LoginWrapper>
        </LoginContainer>
    )
}

export default LoginForm