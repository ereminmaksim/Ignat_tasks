import React from 'react'
import HW6 from '../../h6/HW6'
import s from "./Junior.module.css";
import HW7 from "../../h7/HW7";

function PreJunior() {
    return (
        <div style={{marginLeft: "20px"}}>
            <h1>JUNIOR</h1>
            <div className={s.wrap}>
                <img
                    src="https://www.coderspassion.com/wp-content/uploads/2019/08/10-best-tips-to-become-successful-web-designer.jpg"
                    alt="ava"/>
                {/*<HW1/>*/}
                {/*<HW2/>*/}
                {/*<HW3/>*/}
                {/*<HW4/>*/}
                <HW6/>
                <HW7/>
            </div>
        </div>
    )
}

export default PreJunior

// сделайте по аналогии пустые страницы джун и джун+
// туда будут добавляться следующие дз