import {ArticlesType, newsAPI} from "../api/news_api";
import {AppStateType} from "./redux-store";
import {Dispatch} from "redux";
import {AxiosError} from "axios";


type ActionsTypes =
    ReturnType<typeof setNewsAC> |
    ReturnType<typeof setErrorAC>


export type NewsReducerType = {
    articles: ArticlesType[]
    error: string | null
}

type GetStateType = () => AppStateType
type DispatchType = Dispatch<ActionsTypes>


let initialState: NewsReducerType = {
    articles: [
        {
            source: {
                id: "the-verge",
                name: "The Verge"
            },
            author: "Jay Peters",
            title: "You can see Netflix’s new AV1 streaming tech on select TVs and the PS4 Pro",
            description: "Netflix now supports the AV1 codec when streaming to some TVs. It’s only available on a select number of devices to start, though that list includes any TV connected to the PS4 Pro.",
            url: "https://www.theverge.com/2021/11/10/22775150/netflix-av1-codec-tv-streaming-ps4-pro",
            urlToImage: "https://cdn.vox-cdn.com/thumbor/z7NKhXwT3kSZUT8D0tQmI_Moz74=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/13370033/acastro_181101_1777_netflix_0001.jpg",
            publishedAt: "2021-11-11T01:47:49Z",
            content: "Netflix first used AV1 on Android\r\nIllustration by Alex Castro / The Verge\r\nNetflix now supports the AV1 codec when streaming to some TVs, the company announced on Tuesday. Its only available on a se… [+2046 chars]",
        }
    ],
    error: null
}


export const newsReducer = (state: NewsReducerType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case "SET-NEWS":
            return {
                ...state,
                articles: action.articles
            }
        case "SET-ERROR":
            return {
                ...state,
                error: action.error
            }
        default:
            return state
    }
}


export const setNewsAC = (articles: ArticlesType[]) => {
    return {
        type: 'SET-NEWS',
        articles
    } as const
}

export const setErrorAC = (error: string) => {
    return {
        type: 'SET-ERROR',
        error
    } as const
}


export const getNewsTC = () => {
    return (dispatch: DispatchType, getState: GetStateType) => {
        newsAPI.getNews().then(data => {
            if (data.status === 'ok') {
                dispatch(setNewsAC(data.articles))
            }
        })
            .catch((error: AxiosError) => {
                dispatch(setErrorAC(error.message))
            })
    }
}


