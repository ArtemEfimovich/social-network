import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "369a3457-d3e2-4331-b490-319ddee29442"
    }
})


export type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    data: D
}

export type LoginParamsType={
    email: string
    password: string
    rememberMe: boolean | false
    captcha?: string
}



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
    },
    savePhoto(photoFile:any){
        const formData= new FormData()
        formData.append("image",photoFile)
        return instance.put(`profile/photo`,formData,{
            headers:{
                'Content-Type':'multipart/form-data'
            }
        }).then(response => {
            return response.data
        })
    },
    saveProfile(profile:any){
        return instance.put(`profile`, profile)
            .then(response => {
                return response.data
            })
    }

}
export const authApi = {
    getAuth() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    },
    login(email: string, password: string,rememberMe: boolean= false ){
        return instance.post('auth/login',{email,password,rememberMe})
    },
    logout(){
        return instance.delete('auth/login')
    }
}


export const securityApi = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`)
            .then(response => {
                return response.data
            })

    }
}




