import React from 'react'
// import HW1 from '../../h1/HW1'
// import HW2 from '../../h2/HW2'
// import HW3 from '../../h3/HW3'
// import HW4 from '../../h4/HW4'
import HW6 from '../../h6/HW6'
import s from "./Junior.module.css";

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
            </div>
        </div>
    )
}

export default PreJunior

// сделайте по аналогии пустые страницы джун и джун+
// туда будут добавляться следующие дз