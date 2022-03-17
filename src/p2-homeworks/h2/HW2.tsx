import React, {useState} from 'react'
import Affairs from './Affairs'
import styles from './HW2.module.css'


export type AffairPriorityType = 'all' | 'high' | 'middle' | 'low'

export type AffairType = {
    _id: number
    name: string
    priority: string
}


export const filterAffairs = (name: AffairType[], filter: AffairPriorityType): AffairType[] => { // need to fix any
    if (filter === 'all') {
        return name
    } else if (filter === 'high') {
        return name.filter(e => e.priority === 'high')
    } else if (filter === 'middle') {
        return name.filter(e => e.priority === 'middle')
    } else if (filter === 'low') {
        return name.filter(e => e.priority === 'low')
    }
    return name
}







export const deleteAffair = (affairs: AffairType[], _id: number): AffairType[] => { // need to fix any
    // return ''// need to fix
    return affairs.filter(e => e._id !== _id)
}


function HW2() {
    const defaultAffairs = [
        {_id: 1, name: 'React', priority: 'high'},
        {_id: 2, name: 'anime', priority: 'low'},
        {_id: 3, name: 'games', priority: 'low'},
        {_id: 4, name: 'work', priority: 'high'},
        {_id: 5, name: 'html & css', priority: 'middle'},
    ]

    const [name, setName] = useState<AffairType[]>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<AffairPriorityType>('all')

    // pure helper functions

    const deleteAffairCallback = (_id: number): void => setName(deleteAffair(name, _id)) // need to fix any

    const filteredAffairs = filterAffairs(name, filter)

    return (

        <div className={styles.parent}>
            <div className={styles.block}>
                <h2>homeworks 2</h2>
                {/*should work (должно работать)*/}
                <Affairs
                    data={filteredAffairs}
                    setFilter={setFilter}
                    deleteAffairCallback={deleteAffairCallback}
                />

                {/*для личного творчества, могу проверить*/}
                {/*<AlternativeAffairs/>*/}
            </div>
            <hr/>
        </div>
    )
}

export default HW2
