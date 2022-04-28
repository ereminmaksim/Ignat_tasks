import {UserType} from "../HW8";

interface UpDownType {
    type: 'SORT'
    payload: 'up' | 'down'
}
interface CheckType {
    type: 'CHECK'
    payload: number
}


type CollectionType = UpDownType | CheckType



export const homeWorkReducer = (state: UserType[], action: CollectionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'SORT': {
            let people = [...state].sort((oneElem, twoElem) => {
                if (oneElem.name > twoElem.name) {
                    return 1
                } else if (oneElem.name < twoElem.name) {
                    return -1
                } else {
                    return 0
                }
            })
            return action.payload === 'up' ? people : people.reverse()
        }
        case 'CHECK': {
            // need to fix
            return state.filter(el => el.age > action.payload)
        }
        default:
            return state
    }
}


export const SortUpAC = (payload: string): UpDownType => {
    return {
        type: "SORT",
        payload: 'up'
    }
}
export const SortDownAC = (payload: string): UpDownType => {
    return {
        type: "SORT",
        payload: 'down'
    }
}
export const CheckAC = (payload: number): CheckType => {
    return {
        type: "CHECK",
        payload: 18
    }
}
