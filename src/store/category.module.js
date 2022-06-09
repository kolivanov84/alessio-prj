
import axios from "axios";

const state = {
    categories:[],
    category: {}
};
const getters = {
    getCategories(state){
        return state.categories;
    },
    getCategory(state){
        return state.category;
    }
};
const mutations = {
    setCategories(state, payload){
        state.categories = payload;
    },
    setCategory(state, payload){
        state.category = payload;
    }
};
const actions = {
    fetchCategories(context){
        var endpoint = 'category/';
       axios.get(endpoint).then((res) => {
           console.log("GET CATEGORIES RESPONSE: "+res.data);
           context.commit('setCategories', res.data);
       }).catch(res => console.log(res));
    },
    fetchCategory(context, id){
        var endpoint = 'category/'+id;
       axios.get(endpoint).then((res) => {
           console.log("GET CATEGORY RESPONSE: "+res.data);
           context.commit('setCategory', res.data);
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