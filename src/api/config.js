import axios from 'axios'
export const baseUrl="http://localhost:4000"
const axiosInstance = axios.create(
    {
        baseURL:baseUrl
    }
)

axiosInstance.interceptors.response.use(
    
        res=>res.data,//成功回调
        err=>{
            console.log(`${err}`)
        }
    
)


export {
    axiosInstance
}