import React from 'react'
import styles from './Affair.module.css'
import {AffairType} from "./HW2";


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
                <button
                    onClick={deleteCallback}>X
                </button>
                {props.affair.name}
            </div>
        </div>
    )
}

export default Affair
