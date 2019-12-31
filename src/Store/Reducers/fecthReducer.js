const initState = {
    fetchCountryDetails: null,
    fetchCountryError: null,
    fetchRegionDetails: null,
    fetchRegionError: null,
    fetchHospitalDetails: null,
    fetchHospitalError: null
}

const fetchReducer = (state = initState, action) => {
    switch (action.type) {
        case "FETCHREGION_ERROR":
            return {
                ...state,
                fetchRegionDetails: null,
                fetchRegionError: action.err
            }
        case "FETCHREGION_SUCCESS":
            return {
                ...state,
                fetchRegionDetails: action.data,
                fetchRegionError: null
            }
        case "FETCHCOUNTRY_ERROR":
            return {
                ...state,
                fetchCountryDetails: null,
                fetchCountryError: action.err
            }
        case "FETCHCOUNTRY_SUCCESS":
            return {
                ...state,
                fetchCountryDetails: action.data,
                fetchCountryError: null
            }
        case "FETCHHOSPITAL_ERROR":
            return {
                ...state,
                fetchHospitalDetails: null,
                fetchHospitalError: action.err
            }
        case "FETCHHOSPITAL_SUCCESS":
            return {
                ...state,
                fetchHospitalDetails: action.data,
                fetchHospitalError: null
            }
        default:
            return state
    }
}
export default fetchReducer