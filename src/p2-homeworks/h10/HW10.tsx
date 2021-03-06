import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {LoadingAC} from "./bll/loadingReducer";
import loader from "../../assets/task_10/loader.gif";

function HW10() {
    // useSelector, useDispatch
    const dispatch = useDispatch()
    const loading = useSelector<AppStoreType, boolean>((state) => state.loading.loading)


    const setLoading = (loading: boolean) => {
        // dispatch
        // setTimeout
        dispatch(LoadingAC(loading))
        if (loading) {
            setTimeout(() => {
                dispatch(LoadingAC(false))
            }, 5000)
        }
        console.log('loading...')
    };


    // console.log(loading)


    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? <>
                    {/*<h3>крутилка...</h3>*/}
                    <img src={loader} alt="loader"/>
                </> : <>
                    <div>
                        <SuperButton onClick={() => setLoading(true)}>set loading...</SuperButton>
                    </div>
                </>
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
