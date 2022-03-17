import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import {FaSearch} from "react-icons/fa";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void// need to fix any
    addUser: () => void // need to fix any
    error: string | null// need to fix any
    totalUsers: number// need to fix any
    // keyPress: ()=> void
}

// презентационная компонента (для верстальщика)
const Greeting = ({name, setNameCallback, addUser, error, totalUsers}: GreetingPropsType) => {// деструктуризация пропсов {

// const inputClass = s.error // need to fix with (?:)

    return (
        <>
            <div style={{display: "flex", alignItems: "center", justifyContent: "space-evenly"}}>
                <div className={s.wrapper}>

                    {error ?
                        <>
                            <FaSearch/>
                            <SuperInputText value={name}
                                            onChange={setNameCallback}/>
                        </>
                        : <>
                            <FaSearch/>
                            <SuperInputText className={s.someClassInput}
                                            value={name}
                                            onChange={setNameCallback}/>
                        </>
                    }
                </div>
                {error ? (<SuperButton red onClick={addUser}>add</SuperButton>)
                    : <SuperButton className={s.someClass}
                                   onClick={addUser}>add</SuperButton>}
                <span>{totalUsers}</span>
            </div>
            {error && (<span className={s.errorMessage}>{error}</span>)}
        </>
    )
}
export default Greeting
