import styled from "styled-components";
import {Input, Button} from 'antd';

export const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
   
`
export const LoginWrapper = styled.div`
   /* position:relative;
   top:200px; */
   width:350px;
   padding:0 20px;

   @media screen and (max-width: 768px){
    width:250px;
   }

`

export const Inputelemet = styled(Input)`
    height: 55px;
    margin-bottom: 5px;

    @media screen and (max-width: 768px){
        height: 45px;
        width: 100%;
   }
`

export const InputWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 10px;
`

export const ButtonElemet = styled(Button)`
   margin-left: 3px;
   height: 40px;
`
export const ButtonWrapper = styled.div`
    display: flex;
    column-gap:3px ;
    
`