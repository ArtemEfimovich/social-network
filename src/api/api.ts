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
    setFollow(userId: number) {
        return instance.post(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },
    setUnFollow(userId: number) {
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },
}


export const profileApi = {
    getProfile(userId: number) {
        return instance.get(`profile/` + userId)
            .then(response => {
                return response.data
            })
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/` + userId)
            .then(response => {
                return response.data
            })
    },
    updateStatus(status: string){
        return instance.put(`profile/status`, {status})
            .then(response =>{
                return response.data
            }
        )
    }

}
export const authApi = {
    getAuth() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    }
}




