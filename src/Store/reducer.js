const initialState = {
    age: 21
}

const reducer = (state=initialState, action) => {
    const newState = {...state};

    if(action.type === 'ADD'){
        newState.age += 1
    }
    if(action.type === 'SUBTRACT'){
        newState.age -= 1
    }

    return newState;
}

export default reducer;