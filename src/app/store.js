import {createStore} from 'redux'


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



const store = createStore(function(state,action){
    if(action.type === 'edit-current-user-name'){
        return {
            ...state,
            currentUserLogin: {
                email:action.payload.email,
                password: action.payload.email
            }
        };
    }
    return state;


},{
    currentUserLogin: {
        email: "",
        password: 'ddd'
    }
});

export default store
