const initialState = { 
    username: '',
    profile_pic: ''
}
// const ACTION_TYPE = ACTION_TYPE
// const LOGOUT = LOGOUT

export default function reducer (state = initialState, action) {
    console.log(action)
    const {payload} = action;
    switch(action.type) {
        case "ACTION_TYPE": {
            return {...state, username: payload.username, profile_pic: payload.profile_pic};
        }
        case "LOGOUT": {
            return initialState
        }
        default:
    return state
}

}

export function updateUser(user) {
    return  {
        type: "ACTION_TYPE",
        payload: user
    }
}

export function logout() {
    return {
        type: "LOGOUT",
    }
}
