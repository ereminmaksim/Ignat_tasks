import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";
import styles from "./HW3.module.css";

// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<UserType[]>([]) // need to fix any


    const addUserCallback = (name: string) => { // need to fix any
        let user = {
            _id: v1(),
            name: name
        }
        let userAdd = [user, ...users]
        setUsers(userAdd) // need to fix
    }

    return (<>
            <div className={styles.parent}>
                <div className={styles.block}>

                    <h1>homeworks 3</h1>
                    {/*should work (должно работать)*/}
                    <GreetingContainer users={users} addUserCallback={addUserCallback}/>

                    {users.map(e => (
                        <ul key={e._id}>
                            <li>{e.name}</li>
                        </ul>))}

                    {/*для личного творчества, могу проверить*/}
                    {/*<AlternativeGreeting/>*/}
                </div>
            </div>
            <hr/>
        </>
    )
}

export default HW3
