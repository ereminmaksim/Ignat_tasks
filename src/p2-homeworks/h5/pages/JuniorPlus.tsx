import React from 'react'
import s from "./Junior.module.css";
import HW9 from "../../h9/HW9";
import HW10 from "../../h10/HW10";

function PreJunior() {
    return (
        <div style={{marginLeft: "20px"}}>
            <h1>JUNIORPLUS</h1>
            <div className={s.wrap}>
                <img
                    src="https://office-guru.ru/wp-content/uploads/2020/08/it-2-1.jpg"
                    alt="ava"/>
                <HW9/>
                <HW10/>
                {/*<HW11/>*/}
                {/*<HW12/>*/}

            </div>
        </div>
    )
}

export default PreJunior

// сделайте по аналогии пустые страницы джун и джун+
// туда будут добавляться следующие дз