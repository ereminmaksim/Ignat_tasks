const initialState = {
    loading: false,
    name:"roma",
    age:26
}

interface ActionLoading {
    type: 'LOADING'
    loading: boolean
}
// interface ActionSetName {
//     type: 'SetName'
//     name:string
//     age:number
// }

export interface StateLoading {
    loading: boolean
    // name:string
    // age:number
    // user:{
    //     name:string,
    //     local: {
    //         address:string
    //     }
    // }
}

export const loadingReducer = (state: StateLoading = initialState, action: ActionLoading): StateLoading => { // fix any
    switch (action.type) {
        case 'LOADING':
            return {
                ...state,
                loading: action.loading
            }
        // case 'SetName':
        //     return {
        //         ...state,
        //        name: action.name,
        //         age:action.age
        //         user:{...user, name:action.name,
        //         local:{...user.local,address:action.address}}
        //
        //     }
        default:
            return state
    }
}

export const LoadingAC = (loading: boolean): ActionLoading => {
    return {
        type: 'LOADING',
        loading: loading
    } as const
}
// export const NameAC = (name:string,age:number): ActionSetName => {
//     return {
//         type: 'SetName',
//         name,
//         age,
//     } as const
// }

