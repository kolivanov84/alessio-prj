import Vue from "vue";

const state = {
    categories:[]
};
const getters = {
    getCategories(state){
        return state.categories;
    },
    getCategory : (state, getters) => (paramKey) => {
        if(getters.getCategories){

        }else{
            return null;
        }
    }
};
const mutations = {
    setCategories(state, payload){
        state.categories = payload;
    }
};
const actions = {
    fetchCategories(context, payload){
        console.log(' SEARCH CATEGORIES API')
    }
};


export default {
    namespaced : true,
    state,
    getters,
    mutations,
    actions
}