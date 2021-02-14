<template>
  <div class="q-pa-md">
    <DialogErro label="Deletar essa empresa?" :show="showDialogDelete" @close="showDialogDelete = false"
      @saveClick="deleteUser(user_id)">
    </DialogErro>
    <q-card-section>
      <Container>
        <Row>
          <div class="col-7">
            <Titulo titulo="Equipe" subtitulo="Administre sua equipe" />
          </div>
        </Row>

        <q-table class="my-sticky-header-table" :data="listaUsers" :columns="columns" row-key="id" flat bordered
          :loading="loading">
          <template v-slot:loading>
            <q-inner-loading showing color="primary" />
          </template>
          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td class="text-center">{{ props.row.id }}</q-td>
              <q-td class="text-center">{{ props.row.login }}</q-td>
              <q-td class="text-center" v-show="props.row.nome != null" >{{ props.row.nome }}</q-td>
              <q-td class="text-center" v-show="props.row.razao_social != null" >{{ props.row.razao_social }}</q-td>
              <q-td class="text-center">{{ props.row.email }}</q-td>
              <!-- <q-td class="text-center">--</q-td> -->
              <q-td class="text-center">
                <ButtonAction icon='edit' tooltip='Editar' :to="`/users/editar-user/${props.row.id}`"/>
                <ButtonAction icon='delete' tooltip='Deletar' @click="DialogDelete(props.row.id)"/>
              </q-td>
            </q-tr>
          </template>
        </q-table>
      </Container>
    </q-card-section>
  </div>
</template>

<script>

import EditButton     from  'components/Utils/EditButton'
import Filtro         from  'components/Utils/Filtro'
import Titulo         from  'components/Utils/Titulo'
import Container      from  'components/UtilsKodigos/Container'
import InputFilter    from  'components/Utils/InputFilter'
import DialogErro     from  'components/Utils/DialogErro'
import DialogSucesso  from  'components/UtilsKodigos/DialogSucesso'

import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'

export default {
  name: 'EquipeIndex',
  components:{
    Titulo,
    EditButton,
    Filtro,
    Container,
    InputFilter,
    DialogErro,
    DialogSucesso
  },
  data() {
    return {

      user:{},
      user_id: '',
      
      columns: [
        { name: 'Código' , align: 'center', label: 'Código' , align: 'center' , field: 'id'    , sortable: true },
        { name: 'Login'  , align: 'center', label: 'Login'  , align: 'center' , field: 'login' , sortable: true },
        { name: 'Nome'   , align: 'center', label: 'Nome'   , align: 'center' , field: 'nome'  , sortable: true },
        { name: 'E-mail' , align: 'center', label: 'E-mail' , align: 'center' , field: 'email' , sortable: true },
        { name: 'Ações'  , label: 'Ações' , align: 'center' }
      ],
      listaUsers        : [],
      showDialogErro    : false,
      showDialogDelete : false,
      showLembrete      : false,
      msgSucesso        : '',
      msgErro           : '',
    }

  },
  
  async mounted(){
    await this.loadUsers();
  },

  watch: {
    listaUsersToTable(){
      this.listaUsers = this.listaUsersToTable;
    }
  },

  computed: {
    ...mapState  ('User'  , ['loading', 'updating', 'users']),

    ...mapGetters('User'  , ['listaUsersToTable', 'getUser']),
  },

  methods:{
    ...mapActions ('User'   , ['loadUsers', 'loadUser', 'deleteUser']),

    DialogDelete(user_id){
      this.showDialogDelete = true
      this.user_id = user_id
    },

    async delete(user_id){
      await this.deleteUser(user_id);
      await this.loadUsers();
      this.showNotif();
    }
  }

}
</script>
<style scoped>
.title-bar {
    margin-left: 5rem;
    font-family: sans-serif;
    font-size: 22px;
  }
</style>

