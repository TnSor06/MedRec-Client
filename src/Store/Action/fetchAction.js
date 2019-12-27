import axios from 'axios'
import { axiosData } from '../../axiosData'
export const fetchRegion = (data) => {
    const name = data
    let query = `
    query{
        getRegion(name:"${name}",skip:0){
            pincode
            region
        }}`
    return (dispatch, getState) => {
        axios({
            url: `${axiosData.URL}:${axiosData.PORT}/`,
            method: 'post',
            data: {
                query: query
            }
        }).then((result) => {
            if (result.data.data) {
                dispatch({
                    type: "FETCHREGION_SUCCESS",
                    data: result.data.data
                })
            }
            if (result.data.errors) {
                dispatch({
                    type: "FETCHREGION_ERROR",
                    err: result.data.errors[0].message
                })
            }
        }).catch((err) => {
            dispatch({
                type: "FETCHREGION_ERROR",
                err: "Network Error"
            })
        });
    }
}
export const fetchCountry = (data) => {
    const name = data
    let query = `
    query{
        getCountry(name:"${name}",skip:0){
            countryCode
            countryName
        }}`
    return (dispatch, getState) => {
        axios({
            url: `${axiosData.URL}:${axiosData.PORT}/`,
            method: 'post',
            data: {
                query: query
            }
        }).then((result) => {
            if (result.data.data) {
                dispatch({
                    type: "FETCHCOUNTRY_SUCCESS",
                    data: result.data.data
                })
            }
            if (result.data.errors) {
                dispatch({
                    type: "FETCHCOUNTRY_ERROR",
                    err: result.data.errors[0].message
                })
            }
        }).catch((err) => {
            dispatch({
                type: "FETCHCOUNTRY_ERROR",
                err: "Network Error"
            })
        });
    }
}
export const fetchHospital = (data) => {
    const name = data
    let query = `
    query{
        getHospital(name:"${name}",skip:0){
            hospitalId
            name
        }}`
    return (dispatch, getState) => {
        axios({
            url: `${axiosData.URL}:${axiosData.PORT}/`,
            method: 'post',
            data: {
                query: query
            }
        }).then((result) => {
            if (result.data.data) {
                dispatch({
                    type: "FETCHHOSPITAL_SUCCESS",
                    data: result.data.data
                })
            }
            if (result.data.errors) {
                dispatch({
                    type: "FETCHHOSPITAL_ERROR",
                    err: result.data.errors[0].message
                })
            }
        }).catch((err) => {
            dispatch({
                type: "FETCHHOSPITAL_ERROR",
                err: "Network Error"
            })
        });
    }
}