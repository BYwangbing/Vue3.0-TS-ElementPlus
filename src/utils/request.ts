import axios from 'axios';
import Message from 'element-plus/lib/el-message';
import { get } from 'lodash';
import { isPlainObject, dropWhileNull } from './type';

export const API_ATTR = '/admin';

const transformData = (obj: any): string => {
  // 存在 obj 是 array 的情况，不处理
  const data = isPlainObject(obj) ? dropWhileNull(obj) : obj;
  return JSON.stringify(data);
};
// transformRequest在向服务器发送前，修改请求数据（图文详情）
// 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
const service = axios.create({
  baseURL: '/api', // url = base url + request url
  timeout: 5000,
  responseType: 'json',
  withCredentials: true,
  transformRequest: [
    // PUT, POST, PAtch
    transformData
  ],
  headers: {
    'Cache-Control': 'no-cache',
    Pragma: 'no-cache',
    'Content-Type': 'application/json;charset=utf-8'
  }
});

service.interceptors.request.use(
  config => {
    if (config.method === 'post') {
      config.data = JSON.stringify(config.data);
    }
    // config.headers['Authorization'] = 'tokentokentokentokentokentokenhhh'
    return config;
  },
  error => {
    Message({
      type: 'error',
      message: error,
      showClose: true
    });
    console.error(error);
    return Promise.reject(error);
  }
);

// 响应状态的处理
service.interceptors.response.use(
  res => {
    if (res && Number(res.data.code) !== 0 && res.data.msg) {
      Message({
        type: 'error',
        showClose: true,
        message: res.data.msg
      });
      console.error(res);
      return Promise.reject(res.data.msg);
    }
    // 未登陆
    if (res?.data?.code === 401) {
      // 跳转登陆页
    }
    // 未绑定
    if (res?.data?.code === 302) {
      window.open(res.data, '_blank');
    }
    return res?.data;
  },
  error => {
    const message = get(error, 'response.msg') || get(error, 'message');
    if (message) Message({ type: 'error', message });
    return Promise.reject(message);
  }
);
export async function request({
  method,
  url,
  data = {}
}: {
  method: string;
  url: string;
  data?: any;
}): Promise<any> {
  const reqMethod: string = method.toLocaleLowerCase();
  const fullUrl = `${API_ATTR}${url}`;
  if (reqMethod === 'get') {
    /*  let dataStr = '';
    Object.keys(data).forEach(key => {
      dataStr += key + '=' + data[key] + '&';
    });
    if (dataStr !== '') {
      dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'));
      fullUrl = fullUrl + '?' + dataStr;
    }
    return await service.get(fullUrl); */
    let params = data;
    const keys = Object.keys(params);
    // 兼容传入参数{params:{}}
    if (
      keys.length === 1 &&
      keys[0] === 'params' &&
      typeof params['params'] === 'object'
    ) {
      params = data.params;
    }
    return await service.get(fullUrl, { params });
  } else if (reqMethod === 'post') {
    return await service.post(fullUrl, reqMethod);
  } else if (reqMethod === 'put') {
    return await service.put(fullUrl, data);
  } else if (reqMethod === 'delete') {
    return await service.delete(fullUrl, data);
  }
  return null;
}

export default {
  get: (url: string, data: any) => request({ method: 'get', url, data }),
  post: (url: string, data: any) => request({ method: 'post', url, data }),
  put: (url: string, data: any) => request({ method: 'put', url, data }),
  delete: (url: string, data: any) => request({ method: 'delete', url, data })
};
