import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

function Clock() {
    let [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>()
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        // stop
        // setTimerId(timerId)
        clearInterval(timerId)

        console.log("w")
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            // setDate
            setDate(new Date())
            console.log('q')
        }, 1000)
        setTimerId(id)
    }


    const onMouseEnter = () => {
        // show

        setShow(true)
    }
    const onMouseLeave = () => {
        // close
        setShow(false)
    }

    // date.getSeconds()
    // date.toDateString()
    // const stringTime = new Date().toLocaleTimeString()// fix with date
    // const stringDate = new Date().toDateString() // fix with date
    const stringTime = date?.toLocaleTimeString()// fix with date
    const stringDate = date?.toDateString() // fix with date

    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show && (
                <div>
                    {stringDate}
                </div>
            )}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
