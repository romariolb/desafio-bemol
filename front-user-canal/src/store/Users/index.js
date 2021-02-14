import Vue from 'vue'

export default {
  namespaced: true,
  state: () => {
    return{
      users: [],
      loading: false,
      updating: false,
      creating: false,
      user: {},
    }
  },

  mutations:{
    setUsers(state, listaUsers){
      state.users = listaUsers
    },

    setUser(state, user){
      state.user = user
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

    async loadUsers({dispatch, commit, rootGetters}){
      commit('setLoading', true);
      commit('setUpdating', false);

      try{
        const response = await Vue.prototype.$axios.get(`/users`);
        commit('setUsers', response.data);
        commit('setLoading', false);
      } catch (error){
        commit('setUsers', []);
        if(error.response.status == 401){
          dispatch('Login/changeToken', null, {root:true});
        }
        commit('setLoading', false);
      }
    },

    async loadUser({commit, dispatch, rootGetters, state}, user_id)
    {
      commit('setLoading', true);
      commit('setUpdating', false);

      try{
        const response = await Vue.prototype.$axios.get(`/users/${user_id}`);
        commit('setLoading', false);
        commit('setUser', response.data);
      } catch (error){
        commit('setUser', state.userEmpty);
        if(error.response.status == 401){
          dispatch('Login/changeToken', null, {root:true});
        }
        commit('setLoading', false);
      }
    },

    async atualizaUser({commit, dispatch, rootGetters}, user)
    {
      commit('setLoading', false);
      commit('setUpdating', true);

      const token  = rootGetters["Login/getToken"];
      const config = { headers: { Authorization: `Bearer ${token}`} };
      const data   = { 
        ...user,
        data_nascimento : user.data_nascimento ? Vue.prototype.$moment(user.data_nascimento, 'DD/MM/YYYY').format('YYYY-MM-DD') : null,
      };

      try {
        const response = await Vue.prototype.$axios.put(`/users/${user.id}`, data, config);
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

    async addUser({commit, dispatch, rootGetters}, user)
    {
      commit('setLoading', false);
      commit('setCreating', true);

      // const token  = rootGetters["Login/getToken"];
      // const config = { headers: {Authorization: `Bearer ${token}`} };
      const data   = { 
        ...user,
        data_nascimento : user.data_nascimento ? Vue.prototype.$moment(user.data_nascimento, 'DD/MM/YYYY').format('YYYY-MM-DD') : null,
      };

      try {
        const response = await Vue.prototype.$axios.post(`/users`, data);
        // const response = await Vue.prototype.$axios.post(`/users`, data, config);
        if (response.status == 201) {
          dispatch('loadUsers');
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

    async deleteUser({commit, dispatch, rootGetters, state}, user_id)
    {
      commit('setLoading', true);
      commit('setUpdating', false);

      try{
        const response = await Vue.prototype.$axios.delete(`/users/${user_id}`);
        commit('setLoading', false);
        dispatch('loadUsers');
      } catch (error){
        commit('setUser', state.userEmpty);
        if(error.response.status == 401){
          dispatch('Login/changeToken', null, {root:true});
        }
        commit('setLoading', false);
      }
    },
  },

  getters: {
    listaUsersToTable(state){
      let lstClone = Vue.prototype.$_.cloneDeep(state.users);
      let lista = lstClone.map(user => {
        return {
          ...user,
        }
      });
      return [...lista];
    },

    getUser({user}) {
      let usuario = {
        ...user,
        data_nascimento: user.data_nascimento ? Vue.prototype.$moment(user.data_nascimento).format('DD/MM/YYYY') : null,
      };
      return usuario;
    },

  }

}
