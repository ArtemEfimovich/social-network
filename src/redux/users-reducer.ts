import {usersApi} from "../api/api";
import {AppStateType} from "./redux-store";
import {Dispatch} from "redux";
import {updateObjectInArray} from "../utils/objects-helper";

type ActionsTypes =
    | ReturnType<typeof followSuccess>
    | ReturnType<typeof unFollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUserCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleFollowingProgress>


export type UsersPageType = {
    users: Array<UsersType>
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

export type UsersType = {
    id: number
    photos: PhotosType
    followed: boolean
    name: string
    status: string
    location: LocationType
}

type PhotosType = {
    small: string
    large: string
}
type LocationType = {
    city: string
    country: string
}


let initialState: UsersPageType = {
    users: [],
    pageSize: 5,
    totalUserCount: 10,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []

}

export const usersReducer = (state: UsersPageType = initialState, action: ActionsTypes): UsersPageType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users:updateObjectInArray(state.users,action.userId,"id",{followed:true})
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: updateObjectInArray(state.users,action.userId,"id",{followed:false})
            }
        case "SET_USERS":
            return {
                ...state,
                users: [...action.users]
            }
        case "SET_CURRENT_PAGE":
            return {
                ...state,
                currentPage: action.currentPage
            }
        case "SET_TOTAL_USER_COUNT":
            return {
                ...state,
                totalUserCount: action.totalUserCount
            }
        case "TOGGLE_IS_FETCHING":
            return {
                ...state,
                isFetching: action.isFetching
            }
        case "TOGGLE_IS_FOLLOWING_PROGRESS":
            return {
                ...state,
                followingInProgress: action.isFetching ?
                    [...state.followingInProgress, action.userId]
                    : [...state.followingInProgress.filter(id => id !== action.userId)]
            }
        default:
            return state
    }
}


export const followSuccess = (userId: number) => {
    return {
        type: 'FOLLOW',
        userId
    } as const
}

export const unFollowSuccess = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        userId
    } as const
}

export const setUsers = (users: Array<UsersType>) => {
    return {
        type: 'SET_USERS',
        users
    } as const
}

export const setCurrentPage = (currentPage: number) => {
    return {
        type: 'SET_CURRENT_PAGE',
        currentPage
    } as const
}

export const setTotalUserCount = (totalUserCount: number) => {
    return {
        type: 'SET_TOTAL_USER_COUNT',
        totalUserCount
    } as const
}

export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: 'TOGGLE_IS_FETCHING',
        isFetching
    } as const
}

export const toggleFollowingProgress = (isFetching: boolean, userId: number) => {
    return {
        type: 'TOGGLE_IS_FOLLOWING_PROGRESS',
        isFetching, userId
    } as const
}

type GetStateType = () => AppStateType
type DispatchType = Dispatch<ActionsTypes>


export const getUsers = (page: number, pageSize: number) => {
    return async (dispatch: DispatchType, getState: GetStateType) => {
        dispatch(setCurrentPage(page))
        dispatch(toggleIsFetching(true))
        let response = await usersApi.setUsers(page, pageSize)

        dispatch(toggleIsFetching(false))
        dispatch(setUsers(response.items))
        dispatch(setTotalUserCount(response.totalCount))

    }
}


const followUnfollowFlow = async (dispatch: DispatchType, userId: number, apiMethod: any, actionCreator: any) => {
    dispatch(toggleFollowingProgress(true, userId))
    let response = await apiMethod(userId)
    if (response.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))
}


export const follow = (userId: number) => {
    return async (dispatch: DispatchType, getState: AppStateType) => {
        await followUnfollowFlow(dispatch, userId, usersApi.setFollow.bind(usersApi), followSuccess)
    }
}

export const unFollow = (userId: number) => {
    return async (dispatch: DispatchType, getState: AppStateType) => {
        await followUnfollowFlow(dispatch, userId, usersApi.setUnFollow.bind(usersApi), unFollowSuccess)
    }
}


export default usersReducer;