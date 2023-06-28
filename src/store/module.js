import {
    fileAPI,
    sendAPI,
    executeAPI,
    topologyTestAPI,
    updateAPI,
    clearAPI
} from "@/api/index";

const module = {
    state: {
        userType: null
    },
    mutations: {
        set_userType: (state, data) => {
            state.userType = data
        },
    },
    actions: {
        login: async ({dispatch, commit}, userData) => {
            commit('set_userType', userData)
            localStorage.setItem("userType", userData);
        },
        file({}, data) {
            return new Promise((resolve, reject) => {
                fileAPI(data).then(response => {
                    // console.log(response)
                    if (response.data.success) {
                        resolve(response.data.content)
                    } else {
                        reject(response.data.message)
                    }
                }).catch(error => {
                    reject(error)
                })
            });
        },
        send({}, data) {
            return new Promise((resolve, reject) => {
                sendAPI(data).then(response => {
                    // console.log(response)
                    if (response.data.success) {
                        resolve(response.data.content)
                    } else {
                        reject(response.data.message)
                    }
                }).catch(error => {
                    reject(error)
                })
            });
        },
        execute({}, data) {
            return new Promise((resolve, reject) => {
                executeAPI(data).then(response => {
                    // console.log(response)
                    if (response.data.success) {
                        resolve(response.data.content)
                    } else {
                        reject(response.data.message)
                    }
                }).catch(error => {
                    reject(error)
                })
            });
        },
        topologyTest({}, data) {
            return new Promise((resolve, reject) => {
                topologyTestAPI(data).then(response => {
                    // console.log(response)
                    if (response.data.success) {
                        resolve(response.data.content)
                    } else {
                        reject(response.data.message)
                    }
                }).catch(error => {
                    reject(error)
                })
            });
        },
        update({}, data) {
            return new Promise((resolve, reject) => {
                updateAPI(data).then(response => {
                    // console.log(response)
                    if (response.data.success) {
                        resolve(response.data.content)
                    } else {
                        reject(response.data.message)
                    }
                }).catch(error => {
                    reject(error)
                })
            });
        },
        clear({}) {
            return new Promise((resolve, reject) => {
                clearAPI().then(response => {
                    // console.log(response)
                    if (response.data.success) {
                        resolve(response.data.content)
                    } else {
                        reject(response.data.message)
                    }
                }).catch(error => {
                    reject(error)
                })
            });
        },
    }
};
export default module;
