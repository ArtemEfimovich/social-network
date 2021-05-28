import {combineReducers, createStore, applyMiddleware} from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk"

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    usersPage: usersReducer,
    auth:authReducer,
})


let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

// @ts-ignore
window.store=store


export type AppStateType= ReturnType<typeof rootReducer>





export default store;