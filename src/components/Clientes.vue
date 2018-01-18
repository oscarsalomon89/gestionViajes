<template>
  <div>
    <Navbar></Navbar>
  <div class="page-header">
    <h1>Modulo Clientes</h1>
    <button type="button" class="btn btn-primary" v-on:click="openAddUser()" data-target="#myModal">
  Add User modal
</button>

<!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="myModalLabel"></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
          <FormCliente v-show="addStatus == null" :user="userSelected"></FormCliente>
          <p v-show="addFailure != null">{{ addFailure }}</p>
          <p v-show="addStatus != null">{{ addStatus }}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" @click="addUser()" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
<hr>
    <div class="row">
      <div class="col-md-1">

      </div>
      <div class="col-md-10 jumbotron">
            <table class="table">
            <thead class="thead-dark">
              <tr>
                  <th>#</th>
                  <th>Nombre</th>
                  <th>Telefono</th>
                  <th>Email</th>
                  <th>Acciones</th>
              </tr>
              </thead>
              <tr v-for="(user,key,index) in listUsers" :key="key">
                <th scope="row">{{user.dni}}</th>
                <td>{{user.name}}</td>
                <td>{{user.telefono}}</td>
                <td>{{ user.email }}</td>
                <td>
                <button @click="deleteUser(key)" class="btn btn-danger btn-sm">
                    eliminar
                </button>
                <button @click="editarUsuario(user,key)" class="btn btn-success btn-sm">
                    editar
                </button>
                </td>
            </tr>            
          </table>
        </div>
    </div>
  </div>  
  </div>
</template>
<script>
import Navbar from './Navbar.vue'
import { mapGetters, mapActions } from 'vuex'
import FormCliente from './FormCliente.vue'

export default {
    components: {Navbar, FormCliente},
      computed: mapGetters({
        listUsers: 'allClients',
        addStatus: 'addStatus',
        addFailure: 'addFailure',
        userSelected: 'userSelected'
      }),
      data() {
          return {
              showForm: true,
              titulo: 'Nuevo Usuario'
          }
      },
      created () {
        this.$store.dispatch('getAllClients')
      },
    methods: {
      openAddUser(){
        this.showForm = true;
        this.$store.dispatch('selectClient',[]);
        //this.$store.dispatch('mensajeExito','');
        //this.$store.dispatch('mensajeFalla','');
        document.getElementById('myModalLabel').innerHTML = 'Nuevo Cliente';

        $('#myModal').modal('show');
      },
      addUser(){          
          let vm = this;
          var id   = document.getElementById('iduser').value;
          var user = document.getElementById('inputUser').value;
          var email = document.getElementById('inputEmail').value;
          var dni = document.getElementById('inputDni').value; 
          var tel = document.getElementById('inputTelefono').value;          

          if (user =='' || dni == '') {
            var msgError = 'Datos incompletos';
            this.$store.dispatch('mensajeFalla', msgError)
          } else {
            var data = {
                name: user,
                email: email,
                dni: dni,
                telefono: tel
                };

                if(id != ''){
                  this.updateUser(data,id);
                  return;
                }

                this.$store.dispatch('addClient', data)
                    .then(function(res){
                        //vm.$store.dispatch('getAllClients')
                        vm.showForm = false;                                  
                      }, function(response){
                        alert('error');
                  })
          }
      },
      updateUser(user,id){
          let vm = this;
          user.id = id;
          this.$store.dispatch('updateClient', user)
              .then(function(res){
                  //vm.$store.dispatch('getAllClients')
                  vm.showForm = false;//oculta el form                              
                }, function(response){
                  alert('error');
            })
      },
      deleteUser(user){
            var data = { id: user };
            this.$store.dispatch('deleteClient',data)
            //this.$store.dispatch('getAllClients')      
        },
        editarUsuario(user,key){  
            user.id = key;           
            this.showForm = true;
            this.$store.dispatch('selectClient',user);
            this.$store.dispatch('failMensaje', '');
            document.getElementById('myModalLabel').innerHTML = 'Editar Usuario';

            $('#myModal').modal('show');
        }      
    }
  }
</script>
