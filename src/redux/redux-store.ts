import {createStore, combineReducers} from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialogs-reducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer
})


let store = createStore(rootReducer)

export type AppStateType= ReturnType<typeof rootReducer>

export default store;