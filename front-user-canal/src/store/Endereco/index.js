import Vue from 'vue'

export default {
  namespaced: true,
  state: () => {
    return{
      enderecos: [],
      loading: false,
      updating: false,
      creating: false,
      endereco: {},
    }
  },

  mutations:{
    setEnderecos(state, listaEnderecos){
      state.enderecos = listaEnderecos
    },

    setEndereco(state, endereco){
      state.endereco = endereco
    },

    setLoading(state, booleanValue){
      state.loading = booleanValue
    },

    setUpdating(state, booleanValue){
      state.updating = booleanValue
    },

    setCreating(state, booleanValue){
      state.creating = booleanValue
    }
  },

  actions: {

    async loadEnderecos({dispatch, commit, rootGetters}){
      commit('setLoading', true);
      commit('setUpdating', false);

      // const token  = rootGetters["Login/getToken"];
      // const config = { headers: {Authorization: `Bearer ${token}`} };

      try{
        const response = await Vue.prototype.$axios.get(`/enderecos`);
        commit('setEnderecos', response.data);
        commit('setLoading', false);
      } catch (error){
        commit('setEnderecos', []);
        if(error.response.status == 401){
          dispatch('Login/changeToken', null, {root:true});
        }
        commit('setLoading', false);
      }
    },

    async loadEndereco({commit, dispatch, rootGetters, state}, endereco_id)
    {
      commit('setLoading', true);
      commit('setUpdating', false);

      // const token  = rootGetters["Login/getToken"];
      // const config = { headers: {Authorization: `Bearer ${token}`} };

      try{
        const response = await Vue.prototype.$axios.get(`/enderecos/${endereco_id}`);
        commit('setLoading', false);
        commit('setEndereco', response.data);
      } catch (error){
        commit('setEndereco', state.userEmpty);
        if(error.response.status == 401){
          dispatch('Login/changeToken', null, {root:true});
        }
        commit('setLoading', false);
      }
    },

    async atualizaEndereco({commit, dispatch, rootGetters}, endereco)
    {
      commit('setLoading', false);
      commit('setUpdating', true);

      // const token  = rootGetters["Login/getToken"];
      // const config = { headers: { Authorization: `Bearer ${token}`} };
      const data   = { 
        ...endereco
      };

      try {
        const response = await Vue.prototype.$axios.put(`/enderecos/${endereco.id}`, data);
        if (response.status == 200){
          commit('setUpdating', false);
          dispatch('loadUsers');
          return { status: true, response };
        }
      } catch (error) {
        commit('setUpdating', false);
        if(error.response.status == 401){
          dispatch('Login/changeToken', null, {root:true});
        }
        return { status: false, error }
      }
    },

    async addEndereco({commit, dispatch, rootGetters}, endereco)
    {
      commit('setLoading', false);
      commit('setCreating', true);

      // const token  = rootGetters["Login/getToken"];
      // const config = { headers: {Authorization: `Bearer ${token}`} };
      const data   = { 
        ...endereco,
      };

      try {
        const response = await Vue.prototype.$axios.post(`/enderecos`, data);
        // const response = await Vue.prototype.$axios.post(`/users`, data, config);
        if (response.status == 201) {
          dispatch('loadEnderecos');
          commit('setCreating', false);
          return { status: true, response };
        }
      } catch (error) {
        commit('setCreating', false);
        if (error.response.status == 401) {
          dispatch('Login/changeToken', null, {root:true});
        }
        return { status: false, error }
      }
    },
  },

  getters: {

    getEndereco({endereco}) {
      let end = {
        ...endereco,
      };
      return end;
    },

  }

}
