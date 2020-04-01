import axios, { AxiosRequestConfig } from 'axios'

// declare var Promise:any

export class Request {
    static _instance: Request

    static getIntance() {
        this._instance || (this._instance = new Request())
        return this._instance
    }

    constructor() {
        // Add header info
        axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

        // Do something before Request
        axios.interceptors
            .request.use(Config => {
                Config.baseURL = 'http://127.0.0.1:8000/api/'
                Config.timeout = 5000
                return Config
            },
                Error => {
                    console.warn("Something was wrong for this Request.")
                    return Promise.reject(Error);
                })

        // Do something before Respnse
        axios.interceptors
            .response.use(Response => {
                return Response.data
            },
                Error => {
                    console.warn("Something was wrong as this status:" + Error.response.status)
                    return Promise.reject(Error);
                })
    }

    public get(url: string, config?: AxiosRequestConfig) {
        return new Promise((resolve, reject) => {
            axios.get(url, config)
                .then(res => {
                    resolve(res);
                })
                .catch(err => {
                    reject(err)
                })
        });
    }

    public post(url: string, data: any, config?: AxiosRequestConfig) {
        return new Promise((resolve, reject) => {
            axios.post(url, data, config)
                .then(res => {
                    resolve(res);
                })
                .catch(err => {
                    reject(err)
                })
        });
    }
}

const MErequest = new Request()
export default MErequest