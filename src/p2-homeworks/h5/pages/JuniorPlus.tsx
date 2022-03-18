import React from 'react'
import HW6 from '../../h6/HW6'
import s from "./Junior.module.css";

function PreJunior() {
    return (
        <div style={{marginLeft: "20px"}}>
            <h1>JUNIORPLUS</h1>
            <div className={s.wrap}>
                <img
                    src="https://office-guru.ru/wp-content/uploads/2020/08/it-2-1.jpg"
                    alt="ava"/>
                {/*<HW1/>*/}
                {/*<HW2/>*/}
                {/*<HW3/>*/}
                {/*<HW4/>*/}
                <HW6/>
            </div>
        </div>
    )
}

export default PreJunior

// сделайте по аналогии пустые страницы джун и джун+
// туда будут добавляться следующие дз