import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    usersPage: usersReducer,
    auth:authReducer,
})


let store = createStore(rootReducer)

// @ts-ignore
window.store=store


export type AppStateType= ReturnType<typeof rootReducer>





export default store;