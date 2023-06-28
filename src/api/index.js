import HttpRequest from '@/axios/api.request';

export const fileAPI = (data) => {
    return HttpRequest.request({
        url: '/file',
        method: 'POST',
        data
    })
};

export const sendAPI = (data) => {
    return HttpRequest.request({
        url: '/send',
        method: 'POST',
        data
    })
};

export const executeAPI = (data) => {
    return HttpRequest.request({
        url: '/execute',
        method: 'POST',
        data
    })
};

export const topologyTestAPI = (data) => {
    return HttpRequest.request({
        url: '/topologyTest',
        method: 'POST',
        data
    })
};

export const updateAPI = (data) => {
    return HttpRequest.request({
        url: '/update',
        method: 'POST',
        data
    })
};

export const clearAPI = () => {
    return HttpRequest.request({
        url: '/clear',
        method: 'GET'
    })
};