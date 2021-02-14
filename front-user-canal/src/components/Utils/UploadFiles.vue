<template>
  <div class="large-12 medium-12 small-12 filezone">
    <input type="file" id="files" ref="files" multiple v-on:change="handleFiles()"/>
      <p>
        Arraste e solte <br>ou click para buscar
      </p>
      <div v-for="(file, key) in files" class="file-listing">
        <Row>
          <div class="col-11">
            <InputForm>
              <q-input  type="text"
                        v-model="file.name"
                        label="" outlined
                        readonly />
              <!-- {{ file.name }} -->
            </InputForm>
          </div>
          <div class="col-6 success-container" v-if="file.id > 0">
              Success
          </div>
          <div class="col-1 remove-container" v-else>
            <InputForm>
              <q-btn flat scratch align="center" color="black" class="center" icon="delete"
                        @click="removeFile(key)" />
            </InputForm>
          </div>
        </Row>
      </div>
      <!-- <a class="submit-button" v-on:click="submitFiles()" v-show="files.length > 0">Submit</a> -->
  </div>
</template>

<script>
import Vue from 'vue'
import {mapGetters} from 'vuex'
export default {
  // name: 'ComponentName',
  props:['lista'],
  data () {
    return {
      files: []
    }

  },

  watch: {
     files: {
      handler: function (newValue) {
        this.$emit('change', this.files);
      },
      deep: true
    }
  },

  computed: {
    ...mapGetters('Login', ['getToken']),
  },

  methods: {
    handleFiles() {
      let uploadedFiles = this.$refs.files.files;

      for(var i = 0; i < uploadedFiles.length; i++) {
          this.files.push(uploadedFiles[i]);
      }
      // this.getImagePreviews();
    },

    getImagePreviews(){
      for( let i = 0; i < this.files.length; i++ ){
          if ( /\.(jpe?g|png|gif)$/i.test( this.files[i].name ) ) {
              let reader = new FileReader();
              reader.addEventListener("load", function(){
                  this.$refs['preview'+parseInt( i )][0].src = reader.result;
              }.bind(this), false);
              reader.readAsDataURL( this.files[i] );
          }else{
              this.$nextTick(function(){
                  this.$refs['preview'+parseInt( i )][0].src = '/img/generic.png';
              });
          }
      }
    },

    removeFile( key ){
      this.files.splice( key, 1 );
      // this.getImagePreviews();
    },

    submitFiles() {
      for( let i = 0; i < this.files.length; i++ ){
          if(this.files[i].id) {
              continue;
          }
          let formData = new FormData();
          formData.append('file', this.files[i]);

          let token = this.getToken;

          const config = {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'multipart/form-data'},
          };


          this.$axios.post('/' + 'arquivos/upload-file', formData, config)
            .then(function(data) {
              this.files[i].id = data['data']['id'];
              this.files.splice(i, 1, this.files[i]);
              console.log('success');
          }.bind(this)).catch(function(data) {
              console.log('error');
          });
      }
    },
  },    
}
</script>
<style scoped>
    input[type="file"]{
        opacity: 0;
        width: 100%;
        height: 200px;
        position: absolute;
        cursor: pointer;
    }
    .filezone {
        outline: 2px dashed #003758;
        outline-offset: -10px;
        background: white;
        color: black;
        padding: 10px 10px;
        min-height: 200px;
        position: relative;
        cursor: pointer;
    }

    .filezone p {
        font-size: 1.2em;
        text-align: center;
        padding: 50px 50px 50px 50px;
    }
    div.file-listing img{
        max-width: 90%;
    }

    div.file-listing{
        margin: auto;
        padding: 10px;
        border-bottom: 1px solid #ddd;
    }

    div.file-listing img{
        height: 100px;
    }
    div.success-container{
        text-align: center;
        color: green;
    }

    div.remove-container{
        text-align: center;
    }

    div.remove-container a{
        color: red;
        cursor: pointer;
    }

    a.submit-button{
        display: block;
        margin: auto;
        text-align: center;
        width: 200px;
        padding: 10px;
        text-transform: uppercase;
        background-color: #CCC;
        color: white;
        font-weight: bold;
        margin-top: 20px;
    }
</style>
