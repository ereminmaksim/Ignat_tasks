import React, {useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'

function HW6() {
    const [value, setValue] = useState<string>('')

    const save = () => {
        saveState<string>('editable-span-value', value)
    }
    const restore = () => {
        setValue(restoreState('editable-span-value',value))

        // setValue(value)
        // 7. Используйте функцию restoreState чтоб получить
        // сохранённое и запишите в value
    }


    return (
        <>
            <hr/>
            <div style={{marginLeft: '30px'}}>
                <h2>homeworks 6</h2>
                <div>
                    <SuperEditableSpan
                        value={value}
                        onChangeText={setValue}
                        spanProps={{children: value ? undefined : 'enter text...'}}
                    />
                </div>
                <SuperButton onClick={save}>save</SuperButton>
                <SuperButton onClick={restore}>restore</SuperButton>

                <hr/>
            </div>
            <hr/>
        </>
    )
}

export default HW6
