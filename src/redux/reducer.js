initialState: { 
    username: ''
    password: ''
}
const ACTION_TYPE = ACTION_TYPE
const LOGOUT = LOGOUT

export const updateUser = (initialState) => {
    const action = {
        type: ACTION_TYPE,
        payload: initialState
    }
}

export const logoutUser = (initialState) => {
    const action = {
        type: LOGOUT,
        payload: initialState
    }
}

const reducer = (state = initialState, action) => {
    console.log(action)
    switch(action.type) {
        case ACTION_TYPE:
            return [...state];
        case LOGOUT:
            return state = ''
}
}

export default reducer;