import React from 'react'
import styles from './Affair.module.css'
import {AffairType} from "./HW2";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from './HW2.module.css'


type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}


function Affair(props: AffairPropsType) {


    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)

    }// need to fix

    return (
        <div>
            <div className={styles.removeBtn}>
                <SuperButton className={s.btn}
                    onClick={deleteCallback}>X
                </SuperButton>
                {props.affair.name}
            </div>
        </div>
    )
}

export default Affair
