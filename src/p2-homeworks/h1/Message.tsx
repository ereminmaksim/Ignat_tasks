import React from 'react'
import styles from './Message.module.css'


interface MessageProps {
    avatar: string
    name: string
    message: string
    time: string
}


function Message(props: MessageProps) {
    const {avatar, name, message, time} = props

    return (
        <>
            <h1 style={{marginBottom: '14px'}}>Отображение формы отправки</h1>
            <div className={styles.head}>
                <div className={styles.wrapper}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'end',
                        marginRight: '9px'
                    }}>
                        <img className={styles.ava} src={avatar} alt="avatar"/>
                    </div>
                    <div className={styles.blockMessage}>
                        <h2>{name}</h2>
                        <span>{message}</span>
                        <span className={styles.inTime}>{time}</span>
                    </div>
                </div>
            </div>
            <br/>
        </>
    )
}

export default Message
