import Vue from 'vue'
import SecureLS from "secure-ls";

import Titulo          from 'components/Utils/Titulo'
import Subtitulo       from 'components/Utils/Subtitulo'
import TituloCheckBox  from 'components/Utils/TituloCheckBox'
import CancelButton    from 'components/Utils/CancelButton'
import DoneButton      from 'components/Utils/DoneButton'
import EditButton      from 'components/Utils/EditButton'
import InputForm       from 'components/Utils/InputForm'
import Page            from 'components/Utils/Page'
import Container       from 'components/UtilsKodigos/Container'
import ContainerForm   from 'components/Utils/ContainerForm'
import ContainerInForm from 'components/Utils/ContainerInForm'
import DialogErro      from 'components/Utils/DialogErro'
import DialogSucesso   from 'components/Utils/DialogSucesso'
import DialogInfo      from 'components/Utils/DialogInfo'
import Erro            from 'components/UtilsKodigos/DialogErro'
import Sucesso         from 'components/UtilsKodigos/DialogSucesso'
import Info            from 'components/UtilsKodigos/DialogInfo'
import Row             from 'components/UtilsKodigos/Row'
import Pesquisar       from 'components/UtilsKodigos/Pesquisar'
import UploadFiles     from 'components/Utils/UploadFiles'
import SaveCancel      from 'components/Utils/ButtonsSaveCancel'
import ButtonBack      from 'components/Utils/ButtonBack'
import ButtonAction    from 'components/Utils/ButtonAction'
import StatusBadge     from 'components/Utils/StatusBadge'
import Input           from 'components/Utils/Input'
import Table           from 'components/UtilsKodigos/Table'
import ConfirmarDelete from 'components/UtilsKodigos/DialogDelete'
import Select          from 'components/UtilsKodigos/Select'


import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'

let ls = new SecureLS({ isCompression: false });

Vue.mixin({
  components: {
    Titulo,
    Subtitulo,
    TituloCheckBox,
    CancelButton,
    DoneButton,
    EditButton,
    InputForm,
    Page,
    Container,
    ContainerForm,
    ContainerInForm,
    Row,
    Pesquisar,
    UploadFiles,
    DialogErro,
    DialogSucesso,
    DialogInfo,
    Erro,
    Sucesso,
    Info,
    SaveCancel,
    ButtonBack,
    ButtonAction,
    StatusBadge,
    Input,
    Table,
    ConfirmarDelete,
    Select,
  },
  data() {
    return {
    }
  },

  watch: {

  },
  computed: {
    // ...mapGetters('Permissao', ['podeVisualizarTela', 'podeEditarTela', 'podeAprovarTela', 'getPermissaoTela']),
    // ...mapState  ('Login'    , ['logado']),
  },
  methods: {

    showNotif () {
      this.$q.notify({
        message: 'Registro feito com sucesso!',
        icon: 'save',
        color: 'secondary',
        position: 'center',
      })
    },

    notificar(msg, color = 'secondary', icon = null, position = 'center') {
      this.$q.notify({
        message  : msg,
        color    : color,
        icon     : icon,
        position : position
      })
    },    

    showNegativeNotif (msgErro) {
      this.$q.notify({
        message: msgErro,
        icon: 'announcement',
        color: 'negative',
        position: 'center',
      })
    },

    blockAcessoTela() {
      this.$q.notify({
        message: 'Você não possui acesso para visualizar esta tela',
        color: 'orange-9',
        position: 'center'
      })
      this.$router.go(-1);
    },
    
  }
})
