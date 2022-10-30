export function currentUserLoginReducer(state={},action) {
    if(action.type === 'edit-current-user-name'){
        return {
            ...state,
            currentUser: {
                name: action.playload.name
            }
        };
    }
    return state;
}


// const currentUserLogin  = {
//     email: "",
//     password: 'ddd'
// }