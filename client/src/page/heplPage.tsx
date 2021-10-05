import React from 'react'
import {HelpContent,Header,Paragraph} from './StyledPageElements/HelpPageElemetns'
const f = () => {
    return (

        <HelpContent>
            <Header>
            JWT Authrization    
            </Header>   

            <Paragraph>
                Access token - 15s,
                Refresh roken - 30s
            </Paragraph>

            <Paragraph>         
            Кнопка - Get users - доступна только зарегистрированным пользователям
            </Paragraph>

        </HelpContent>
    )
}

export default f
