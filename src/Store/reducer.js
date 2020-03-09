const initialState = {
    age: 21
}

const reducer = (state=initialState, action) => {
    const newState = {...state};

    switch(action.type) {
        case 'ADD': 
        return {
            ...state,
            age: state.age + action.value
        } 
        case 'SUBTRACT': 
        return {
            ...state,
            age: state.age - action.value
        } 
    }
    return newState;
}

export default reducer;