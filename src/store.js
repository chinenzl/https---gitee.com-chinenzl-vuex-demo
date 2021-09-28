import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0
    },
    getters: {
        showNumb(state) {
            return '当前的数是' + state.count
        }
    },
    mutations: {
        increment(state) {
            state.count++
        },
        incrementN(state, step) {
            state.count += step
        },
        sub(state) {
            state.count--
        },
        subN(state, step) {
            state.count -= step
        },
    },
    actions: {
        incrementAsync(context) {
            let timer;
            clearTimeout(timer);
            timer = setTimeout(() => {
                context.commit('increment')
            }, 1000)
        },
        incrementAsyncN(context, wait) {
            setTimeout(() => {
                context.commit('incrementN', 4)
            }, wait)
        },

        subAsync(context) {
            let timer;
            clearTimeout(timer);
            timer = setTimeout(() => {
                context.commit('sub')
            }, 1000)
        },
        subAsyncN(context, wait) {
            setTimeout(() => {
                context.commit('subN', 4)
            }, wait)
        },
    }
})
export default store;