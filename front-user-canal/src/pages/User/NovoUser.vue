<template>
  <div class="q-pa-md">
    <q-card-section>
      <div class="row">
        <div class="col-6">
          <Titulo titulo="Novo Usuário" subtitulo="Criar um novo Usuário" />
        </div>
      </div>
      <ContainerForm>
        <Titulo titulo="Usuário" />
        <ContainerInForm>
          <Row>
            <div class="col-2">
              <InputForm>
                <q-radio label="CPF" v-model="user.tipo_doc" :val="0" />
                <q-radio label="CNPJ" v-model="user.tipo_doc" :val="1" />
              </InputForm>
            </div>
          </Row>
          <Row>
            <div class="col-6">
              <InputForm>
                <q-input outlined label="Primeiro Nome" v-model="user.nome" lazy-rules :rules="[ val => !!val            || '* Obrigatório',
                    val => val.length <= 120 || 'Máximo de 120 caracteres']" v-show="user.tipo_doc == 0"/>
              </InputForm>
            </div>
            <div class="col-6">
              <InputForm>
                <q-input outlined label="Sobrenome" v-model="user.sobrenome" lazy-rules :rules="[ val => !!val            || '* Obrigatório',
                    val => val.length <= 120 || 'Máximo de 120 caracteres']" v-show="user.tipo_doc == 0" />
              </InputForm>
            </div>
            <div class="col-12">
              <InputForm>
                <q-input outlined label="Razão Social" v-model="user.razao_social" lazy-rules :rules="[ val => !!val            || '* Obrigatório',
                    val => val.length <= 120 || 'Máximo de 120 caracteres']" v-show="user.tipo_doc == 1" />
              </InputForm>
            </div>
          </Row>
          <Row>
            <div class="col-4">
              <InputForm>
                <q-input outlined label="CPF" v-model="cpf" lazy-rules :rules="[ val => !!val            || '* Obrigatório',
                    val => val.length <= 120 || 'Máximo de 120 caracteres']"
                    mask="###.###.###-##" v-show="user.tipo_doc == 0" />
                <q-input outlined label="CNPJ" v-model="cnpj" lazy-rules :rules="[ val => !!val            || '* Obrigatório',
                    val => val.length <= 120 || 'Máximo de 120 caracteres']"
                    mask="##.###.###/####-##" v-show="user.tipo_doc == 1" />
              </InputForm>
            </div>
            <div class="col-4">
              <InputForm>
                <q-input label="Data Nascimento" v-model="user.data_nascimento" outlined
                  mask="##/##/####" :rules="['date:DD/MM/YYYY', val => !!val || '* Obrigatório']"
                  v-show="user.tipo_doc == 0">
                  <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer text-primary" color="primary">
                      <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                        <q-date v-model="user.data_nascimento" mask="DD/MM/YYYY"
                          @input="() => $refs.qDateProxy.hide()" />
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-input>
              </InputForm>
            </div>
            <div class="col-4">
              <InputForm>
                <q-select
                  label="Sexo"
                  :rules="['date:DD/MM/YYYY', val => !!val || '* Obrigatório']"
                  v-show="user.tipo_doc == 0"
                  v-model="listaSexo_sel"
                  outlined
                  :options="listaSexo_filter"
                  input-debounce="0"
                  map-options
                />
              </InputForm>
            </div>
          </Row>

          <Row>
            <div class="col-3">
              <InputForm>
                <q-input outlined label="RG" v-model="user.rg" lazy-rules :rules="[ val => !!val            || '* Obrigatório',
                    val => val.length <= 11 || 'Máximo de 11 caracteres']"
                    mask="###########" v-show="user.tipo_doc == 0" />
                <q-input outlined label="Inscrição Estadual" v-model="user.inscricao_estadual" lazy-rules :rules="[ val => !!val            || '* Obrigatório',
                    val => val.length <= 9 || 'Máximo de 9 caracteres']"
                    mask="#########" v-show="user.tipo_doc == 1" />
              </InputForm>
            </div>
            <div class="col-3">
              <InputForm>
                <q-input outlined label="Telefone Celular" v-model="user.tel_cel"
                  :rules="[ val => !!val            || '* Obrigatório']"
                  mask="(##) #####-####" />
              </InputForm>
            </div>
            <div class="col-3">
              <InputForm>
                <q-input outlined label="Telefone Fixo" v-model="user.tel_fixo" counter
                  mask="(##) #### - ####" />
              </InputForm>
            </div>
          </Row>
          <Row>
            <div class="col-4">
              <InputForm>
                <q-input outlined label="E-mail" v-model="user.email" lazy-rules :rules="[ val => !!val            || '* Obrigatório',
                    val => val.length <= 120 || 'Máximo de 120 caracteres']" type="email"/>
              </InputForm>
            </div>
            <div class="col-4">
              <InputForm>
                <q-input outlined label="Login" v-model="user.login" lazy-rules :rules="[ val => !!val            || '* Obrigatório',
                    val => val.length <= 120 || 'Máximo de 120 caracteres']"/>
              </InputForm>
            </div>
            <div class="col-4">
              <InputForm>
                <q-input outlined label="Senha" v-model="user.password" lazy-rules :rules="[ val => !!val            || '* Obrigatório',
                    val => val.length <= 120 || 'Máximo de 120 caracteres']" type="password"/>
              </InputForm>
            </div>
          </Row>
        </ContainerInForm>
        <Titulo titulo="Endereço" />
        <ContainerInForm>
          <Row>
            <div class="col-2">
              <InputForm>
                <q-input outlined label="CEP" v-model="cep" mask="#####-###"
                         :rules="[ val => !!val            || '* Obrigatório']"/>
              </InputForm>
            </div>
            <div class="col-4">
              <InputForm>
                <q-input outlined counter label="Rua" v-model="endereco.rua"
                         :rules="[ val => !!val            || '* Obrigatório']" />
              </InputForm>
            </div>
            <div class="col-2">
              <InputForm>
                <q-input outlined label="Número" v-model="endereco.numero" 
                         :rules="[ val => !!val            || '* Obrigatório']"/>
              </InputForm>
            </div>
            <div class="col-4">
              <InputForm>
                <q-input outlined counter label="Complemento" v-model="endereco.complemento" />
              </InputForm>
            </div>
          </Row>
          <Row>
            <div class="col-3">
              <InputForm>
                <q-input outlined counter label="Ponto de Referência" v-model="endereco.referencia" />
              </InputForm>
            </div>
            <div class="col-3">
              <InputForm>
                <q-input outlined counter label="Bairro" v-model="endereco.bairro" 
                         :rules="[ val => !!val            || '* Obrigatório']" />
              </InputForm>
            </div>
            <div class="col-3">
              <InputForm>
                <q-input outlined counter label="Cidade" v-model="endereco.cidade" 
                         :rules="[ val => !!val            || '* Obrigatório']"/>
              </InputForm>
            </div>
            <div class="col-3">
              <InputForm>
                <q-input outlined counter label="Estado" v-model="endereco.uf" mask="AA"
                         :rules="[ val => !!val            || '* Obrigatório']"/>
              </InputForm>
            </div>
          </Row>

        </ContainerInForm>

        <div class="row justify-end">
          <CancelButton label="Cancelar" in_rota="/users" />
          <DoneButton label="Salvar" @saveClick="save()" />
        </div>
      </ContainerForm>
    </q-card-section>
  </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'

import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'

export default {
  name: 'NovoUserPage',
  components: {
    axios,
    Vue
  },
  data () {
    return {

      user: {
        tipo_doc: 0,
      },
      endereco: {},

      msgErro: '',
      cpf: '',
      cnpj: '',
      cep: '',
      listaSexo_sel: 
      {
        label: 'Masculino',
        value: 'Masculino'
      },
      listaSexo_filter: [
        {
          label: 'Masculino',
          value: 'Masculino'
        },
        {
          label: 'Feminino',
          value: 'Feminino'
        },
        {
          label: 'Outro',
          value: 'Outro'
        },

      ]
    }
  },
  
  watch: {
    async cep () {
      this.cep = this.cep.replace(/\.|\-/g, '')
      this.endereco.cep = this.cep
      let response = null;
      
      const config = { headers: {
        'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Headers': '*'
      } };

      response                  = await Vue.prototype.$axios2.get(`/${this.cep}/json`, config);
      this.endereco.rua         = response.logradouro
      this.endereco.complemento = response.complemento
      this.endereco.bairro      = response.bairro
      this.endereco.cidade      = response.localidade
      this.endereco.uf          = response.uf
    }
  },

  // mounted(){
  //   let URI = `https://viacep.com.br/ws`;

  //   const instance = axios.create({
  //     baseURL: URI,
  //     timeout: 30000,
  //     headers: {'Access-Control-Allow-Origin': '*'}
  //   });

  //   Vue.prototype.$axios2 = instance;
  // },

  computed: {
    ...mapState('User', ['creating']),
    ...mapState('Endereco', ['creating']),
    
  },
  methods: {

    ...mapActions('User', ['loadUser', 'addUser']),
    ...mapActions('Endereco', ['loadEndereco', 'addEndereco']),

    async save () {
      if (this.user.tipo_doc == 0) {
        if (this.validarCampos1() == false && this.validarCampos3() == false) {
          this.showNegativeNotif(this.msgErro)
          return false
        } else {
          const result2 = await this.addEndereco(this.endereco)
            if (result2.status == true) {
              this.user.cpf = this.cpf;
              this.user.sexo = this.listaSexo_sel.value;
              this.user.razao_social = null;
              this.user.cnpj = null;
              this.user.inscricao_estadual = null;
              this.user.endereco_id = result2.response.data.id
              const result = await this.addUser(this.user)
              if (result.status == true) {
                this.showNotif()
                this.$router.push('/users')
              } else {
                this.showNegativeNotif('Erro no cadastro de usuário')
                return false
              }
            } else {
              this.showNegativeNotif('Erro no cadastro de endereço')
              return false
            }
          } 
      } else {
          if (this.validarCampos2() == false && this.validarCampos3() == false) {
            this.showNegativeNotif(this.msgErro)
            return false
          } else {
            const result2 = await this.addEndereco(this.endereco)
            if (result2.status == true) {
              this.user.cnpj = this.cnpj;
              this.user.nome = null;
              this.user.sobrenome = null;
              this.user.data_nascimento = null;
              this.user.sexo = null;
              this.user.cpf = null;
              this.user.rg = null;
              this.user.endereco_id = result2.response.data.id
              const result = await this.addUser(this.user)
              if (result.status == true) {
                this.showNotif()
                this.$router.push('/users')
              } else {
                this.showNegativeNotif('Erro no cadastro de usuário')
                return false
              }
            } else {
              this.showNegativeNotif('Erro no cadastro de endereço')
              return false
            }
          } 
        }
    },

    isValidEmail (val) {
      const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/
      return !!emailPattern.test(val)
    },

    isValidEmailCorp (val) {
      // The regex to check it against
      var re = '[a-zA-Z_\\.-]+@((hotmail)|(yahoo)|(gmail)|(live)|(outlook))\\.[a-z]{2,4}';
      if (val.match(re)) {
        return true
      } else {
        return false
      }
    },

    goBack () {
      this.showDialogSucesso = false
      this.$router.go(-1)
    },

    getListaPerfilId () {
      const lista_perfil_id = [{
        id: this.perfil_sel
      }]
      return lista_perfil_id
    },

    validarCampos1 () {
      const vm = this

      if ((vm.user.login == null) || (vm.user.login == undefined) || (vm.user.login.trim().length == 0) || (vm.user.login.trim().length > 60)) {
        vm.msgErro = 'Informe um login válido para o usuário!'
        vm.user.login = null
        return false
      }

      if ((vm.user.nome == null) || (vm.user.nome == undefined) || (vm.user.nome.trim().length == 0) || (vm.user.nome.trim().length > 120)) {
        vm.msgErro = 'Informe um nome válido para o usuário!'
        vm.user.nome = null
        return false
      }

      if ((vm.user.sobrenome == null) || (vm.user.sobrenome == undefined) || (vm.user.sobrenome.trim().length == 0) || (vm.user.sobrenome.trim().length > 60)) {
        vm.msgErro = 'Informe um sobrenome válido para o usuário!'
        vm.user.sobrenome = null
        return false
      }

      if ((vm.user.cpf == null) || (vm.user.cpf == undefined) || (vm.user.cpf.trim().length == 0)) {
        vm.msgErro = 'Informe um CPF válido para o usuário!'
        vm.user.cpf = null
        return false
      }
      
      if ((vm.user.rg == null) || (vm.user.rg == undefined) || (vm.user.rg.trim().length == 0)) {
        vm.msgErro = 'Informe um RG válido para o usuário!'
        vm.user.rg = null
        return false
      }

      if ((vm.user.data_nascimento == null) || (vm.user.data_nascimento == undefined) || (vm.user.data_nascimento.trim().length == 0) || (vm.user.data_nascimento.trim().length > 60)) {
        vm.msgErro = 'Informe uma data nascimento válida para o usuário!'
        vm.user.data_nascimento = null
        return false
      }

      if ((vm.user.tel_cel == null) || (vm.user.tel_cel == undefined) || (vm.user.tel_cel.trim().length == 0)) {
        vm.msgErro = 'Informe um Celular válido para o usuário!'
        vm.user.tel_cel = null
        return false
      }

      if ((vm.user.email == null) || (vm.user.email == undefined) || (vm.user.email.trim().length == 0) || (vm.user.email.trim().length > 120)) {
          vm.msgErro = 'Informe um e-mail para o usuário!'
          vm.user.email = null
          return false
      }

      return true
    },

    validarCampos2 () {
      const vm = this

      if ((vm.user.login == null) || (vm.user.login == undefined) || (vm.user.login.trim().length == 0) || (vm.user.login.trim().length > 60)) {
        vm.msgErro = 'Informe um login válido para o usuário!'
        vm.user.login = null
        return false
      }

      if ((vm.user.razao_social == null) || (vm.user.razao_social == undefined) || (vm.user.razao_social.trim().length == 0) || (vm.user.razao_social.trim().length > 120)) {
        vm.msgErro = 'Informe uma Razão Social válida para o usuário!'
        vm.user.razao_social = null
        return false
      }

      if ((vm.user.cnpj == null) || (vm.user.cnpj == undefined) || (vm.user.cnpj.trim().length == 0)) {
        vm.msgErro = 'Informe um CNPJ válido para o usuário!'
        vm.user.cnpj = null
        return false
      }
      
      if ((vm.user.inscricao_estadual == null) || (vm.user.inscricao_estadual == undefined) || (vm.user.inscricao_estadual.trim().length == 0)) {
        vm.msgErro = 'Informe uma Inscrição Estadual válida para o usuário!'
        vm.user.inscricao_estadual = null
        return false
      }

      if ((vm.user.tel_cel == null) || (vm.user.tel_cel == undefined) || (vm.user.tel_cel.trim().length == 0)) {
        vm.msgErro = 'Informe um Celular válido para o usuário!'
        vm.user.tel_cel = null
        return false
      }

      if ((vm.user.email == null) || (vm.user.email == undefined) || (vm.user.email.trim().length == 0) || (vm.user.email.trim().length > 120)) {
          vm.msgErro = 'Informe um e-mail para o usuário!'
          vm.user.email = null
          return false
        }

      return true
    },

    validarCampos3 () {
      const vm = this

      if ((vm.endereco.cep == null) || (vm.endereco.cep == undefined) || (vm.endereco.cep.trim().length == 0) || (vm.endereco.cep.trim().length > 60)) {
        vm.msgErro = 'Informe um cep válido para o usuário!'
        vm.endereco.cep = null
        return false
      }

      if ((vm.endereco.rua == null) || (vm.endereco.rua == undefined) || (vm.endereco.rua.trim().length == 0) || (vm.endereco.rua.trim().length > 120)) {
        vm.msgErro = 'Informe uma rua válida para o usuário!'
        vm.endereco.rua = null
        return false
      }

      if ((vm.endereco.numero == null) || (vm.endereco.numero == undefined) || (vm.endereco.numero.trim().length == 0)) {
        vm.msgErro = 'Informe um número válido para o usuário!'
        vm.endereco.numero = null
        return false
      }
      
      if ((vm.endereco.bairro == null) || (vm.endereco.bairro == undefined) || (vm.endereco.bairro.trim().length == 0)) {
        vm.msgErro = 'Informe um bairro válido para o usuário!'
        vm.endereco.bairro = null
        return false
      }

      if ((vm.endereco.cidade == null) || (vm.endereco.cidade == undefined) || (vm.endereco.cidade.trim().length == 0)) {
        vm.msgErro = 'Informe uma cidade válida para o usuário!'
        vm.endereco.cidade = null
        return false
      }

      if ((vm.endereco.uf == null) || (vm.endereco.uf == undefined) || (vm.endereco.uf.trim().length == 0) || (vm.endereco.uf.trim().length > 2)) {
          vm.msgErro = 'Informe um estado para o usuário!'
          vm.endereco.uf = null
          return false
        }

      return true
    }

  }

}
</script>
