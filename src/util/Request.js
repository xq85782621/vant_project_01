import axios from 'axios';
import { router } from "../router";

// 这里根据不同ui库,导入不同的提示组件
// import { Message } from 'iview';
// 这里导入了vant的Notify组件,用来对错误请求进行处理
import { Notify } from 'vant';


//超时时间
axios.defaults.timeout = 5000;
//所有的请求都带上/proxyApi,然后被proxy配置代理到后端
axios.defaults.baseURL = '/proxyApi';


/**
 * 请求拦截器
 */
axios.interceptors.request.use(config => {
    return config;
}, err => {
    Notify('请求超时');
    // return Promise.resolve(err);
})


/**
 * 响应拦截器
 */
axios.interceptors.response.use(response => {
    // 如果响应内容的success为false ,这说明请求错误,这里要和后端约定好
    if (!response.data.success) {
        Notify(response.data.message)
        return Promise.reject(response)
    }
    // 返回response.data 这样所有的回调函数不需要再.data来获取实际内容了
    return response.data;
}, err => {
    if (err && err.response) {
        switch (err.response.status) {
            case 400:
                Notify('错误请求')
                break;
            case 401:
                Notify('未授权，请重新登录')
                break;
            case 403:
                Notify('拒绝访问')
                break;
            case 404:
                Notify('请求错误,未找到该资源')
                break;
            case 405:
                Notify('请求方法未允许')
                break;
            case 408:
                Notify('请求超时')
                break;
            case 500:
                Notify('服务器端出错')
                break;
            case 501:
                Notify('网络未实现')
                break;
            case 502:
                Notify('网络错误')
                break;
            case 503:
                Notify('服务不可用')
                break;
            case 504:
                Notify('网络超时')
                break;
            case 505:
                Notify('http版本不支持该请求')
                break;
            default:
                Notify(`连接错误${err.response.status}`)
        }
    } else {
        Notify('连接到服务器失败')
    }
    return Promise.reject(err.response)
})



/**
 * post请求
 * @param {*} url 
 * @param {*} params 
 */
export const postRequest = (url, params) => {
    return axios({
        method: 'post',
        url: `${url}`,
        data: params,
        transformRequest: [function(data) {
            let ret = '';
            for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            }
            return ret
        }],
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
}
export const uploadFileRequest = (url, params) => {
    return axios({
        method: 'post',
        url: `${url}`,
        data: params,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}


/**
 * put请求
 * @param {*} url 
 * @param {*} params 
 */
export const putRequest = (url, params) => {
    return axios({
        method: 'put',
        url: `${url}`,
        data: params,
        transformRequest: [function(data) {
            let ret = ''
            for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            }
            return ret
        }],
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
}

/**
 * delete 请求
 * @param {*} url 
 */
export const deleteRequest = (url) => {
    return axios({
        method: 'delete',
        url: `${url}`
    });
}

/**
 * get请求
 * @param {*} url 
 * @param {*} params  会自动把该对象变成url后面的 ?name='xuqiang'&age=18 这种形式
 */
export const getRequest = (url, params) => {
    return axios({
        method: 'get',
        // 注意get请求这里是params
        params: params,
        url: `${url}`
    });
}