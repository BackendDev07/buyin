import axios from 'axios'
import { domain, APP_MODE, APP_VERSION, refreshUrl } from './url'

const Axios = axios.create({
    baseURL: `${domain}${APP_MODE}${APP_VERSION}`,
})

Axios.interceptors.request.use(
    function (config) {
        const accessToken = localStorage.getItem('accessToken')

        if (accessToken) {
            config.headers = {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            }
        }

        return config
    },
    function (error) {
        return Promise.reject(error)
    }
)

Axios.interceptors.response.use(
    function (response) {
        return response
    },
    function (error) {
        const refreshToken = localStorage.getItem('refreshToken')
        const originalrequest = error.config
        if (
            error.response.status === 401 &&
            refreshToken &&
            !originalrequest._retry
        ) {
            originalrequest._retry = true
            Axios.post(refreshUrl, { refreshToken })
                .then(function (response) {
                    if (response.data.isOk) {
                        localStorage.setItem(
                            'accessToken',
                            response.data.accessToken
                        )
                        Axios(originalrequest)
                    }
                })
                .catch(function (error) {})
        }
        return Promise.reject(error)
    }
)

export default Axios
