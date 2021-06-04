const initialState = { 
    username: '',
    profile_pic: ''
}
// const ACTION_TYPE = ACTION_TYPE
// const LOGOUT = LOGOUT

export function updateUser(userObj) {
    return  {
        type: "ACTION_TYPE",
        payload: userObj
    }
}

export function logout(initialState) {
    return {
        type: "LOGOUT",
        payload: initialState
    }
}

export default function reducer (state = initialState, action) {
    console.log(action)
    switch(action.type) {
        case "ACTION_TYPE": {
            return {...state};
        }
        case "LOGOUT": {
            return {...state, state: state = ''}
        }
        default:
    return state
}

}
