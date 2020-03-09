export default function incrementAge(age){
    return function (dispatch) {
        dispatch(
            incrementAgeSuccess()
        )
    }
}