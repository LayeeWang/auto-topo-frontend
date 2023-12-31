import Vue from 'vue'
import Vuex from 'vuex'
import module from "@/store/module";
import getters from "@/store/getters";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    getters,
    mutations: {},
    actions: {},
    modules: {
        module
    }
})
