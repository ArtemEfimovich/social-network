import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "369a3457-d3e2-4331-b490-319ddee29442"
    }
})


export const usersApi = {
    setUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    getAuth(){
        return instance.get(`auth/me`)
            .then(response =>{
                return response.data
            })
    },
    setFollow(userId: number){
        return instance.post(`follow/${userId}`)
            .then(response =>{
                return response.data
            })
    },
    setUnFollow(userId: number){
        return instance.delete(`follow/${userId}`)
            .then(response =>{
                return response.data
            })
    },
    getProfile(userId:number){
        return instance.get(`profile/` + userId)
            .then(response =>{
                return response.data
            })
    }
}




