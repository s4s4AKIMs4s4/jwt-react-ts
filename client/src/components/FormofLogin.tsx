import {FC, useState } from "react";
import {useTypedSelector} from '../hooks/typedUseSelector'
import {useActions} from '../hooks/useActions'
import { Input, Button } from 'antd';

const LoginForm :FC = () =>{
    
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const {} = useTypedSelector( state => state.auth )
    const {login,registrarion} = useActions()
    return (
        <div>
            <Input 
                type = "text" 
                placeholder ="Enter email pls"
                value = {email} 
                onChange = { (e) => {setEmail(e.target.value )}}>
            </Input>

            <Input
                type = 'password'
                placeholder ="Enter password pls"
                value = {password}
                onChange = { (e) => {setPassword(e.target.value )}}>
            </Input>

            <Button onClick = {() => {login(email, password)} }>
                login
            </Button>

            <Button  onClick = {() => {registrarion(email, password)}} > 
                registration
            </Button>

        </div>
    )
}

export default LoginForm