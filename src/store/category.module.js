
import axios from "axios";

const state = {
    categories:[]
};
const getters = {
    getCategories(state){
        return state.categories;
    }
};
const mutations = {
    setCategories(state, payload){
        state.categories = payload;
    }
};
const actions = {
    fetchCategories(context){
        var endpoint = 'category/';
       axios.get(endpoint).then((res) => {
           console.log("GET CATEGORIES RESPONSE: "+res.data);
           context.commit('setCategories', res.data);
       }).catch(res => console.log(res));
    }
};


export default {
    namespaced : true,
    state,
    getters,
    mutations,
    actions
}