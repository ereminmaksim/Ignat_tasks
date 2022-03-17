import React from 'react'
import Message from "./Message";

const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Maksim',
    message: 'Отправь ты уже это сообщение!!!',
    time: '22:00',
}

function HW1() {
    return (
        <div>
            <hr/>
            <h1 style={{textAlign: "center"}}>homeworks 1</h1>
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />
            {/*<hr/>*/}
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
