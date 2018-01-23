<template>
    <div>
    <Navbar></Navbar>
  <div class="page-header">
    <h1>Modulo Reservas</h1>
    <button type="button" class="btn btn-primary" v-on:click="openAddReserva()" data-target="#myModal">
  Nueva Reserva
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
          <FormReserva v-show="addStatus == null" :reserva="reservaSelected"></FormReserva>
          <p v-show="addFailure != null">{{ addFailure }}</p>
          <p v-show="addStatus != null">{{ addStatus }}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" @click="addReserva()" class="btn btn-primary">Save changes</button>
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
                  <th>Dni</th>
                  <th>Telefono</th>
                  <th>Monto</th>
                  <th></th>
              </tr>
              </thead>
              <tr v-for="(reserva,key,index) in listReservas" :key="key">
                <td>{{index}}</td>
                <th scope="row">{{reserva.name}}</th>
                <td>{{reserva.dni}}</td>
                <td>{{reserva.telefono}}</td>
                <td scope="row">{{ reserva.monto }}</td>
                <td>
                <button @click="deleteReserva(key)" class="btn btn-danger btn-sm">
                    eliminar
                </button>
                <button @click="editarReserva(reserva,key)" class="btn btn-success btn-sm">
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
    import Navbar from '../Navbar.vue'
    import { mapGetters, mapActions } from 'vuex'
    import FormReserva from './FormReserva.vue'

    export default {
      components: {Navbar, FormReserva},
      computed: mapGetters({
        listReservas: 'allReservas',
        addStatus: 'addStatus',
        addFailure: 'addFailure',
        reservaSelected: 'reservaSelected'
      }),
      data() {
          return {
              showForm: true,
              titulo: 'Nueva Reserva'
          }
      },
      created () {
        this.$store.dispatch('getAllReservas')
      },
      methods: {
        openAddReserva(){
          this.showForm = true;
          this.$store.dispatch('selectClient',[]);
          //this.$store.dispatch('mensajeExito','');
          //this.$store.dispatch('mensajeFalla','');
          document.getElementById('myModalLabel').innerHTML = 'Nuevo Cliente';

          $('#myModal').modal('show');
        },
        addReserva(){          
            let vm = this;
            var id   = document.getElementById('idreserva').value;
            var idcliente = document.getElementById('idcliente').value;
            var dni = document.getElementById('inputDni').value;
            var name = document.getElementById('inputName').value; 
            var telefono = document.getElementById('inputTelefono').value;
            var monto = document.getElementById('inputMonto').value;          

            if (monto =='' || dni == '' || name == '' || telefono == '') {
              var msgError = 'Datos incompletos';
              this.$store.dispatch('mensajeFalla', msgError)
            } else {
              if(idcliente == ''){                
                var dataClient = {
                    dni: dni,
                    name: name,
                    telefono: telefono
                  };
                this.$store.dispatch('addClient', dataClient);
              }

              var data = {
                  idcliente: idcliente,
                  dni: dni,
                  monto: monto,
                  name: name,
                  telefono: telefono
                  };

                  if(id != ''){
                    this.updateReserva(data,id);
                    return;
                  }

                  this.$store.dispatch('addReserva', data)
                      .then(function(res){
                          //vm.$store.dispatch('getAllClients')
                          vm.showForm = false;                                  
                        }, function(response){
                          alert('error');
                    })
            }
        },
        updateReserva(reserva,id){
            let vm = this;
            reserva.id = id;
            this.$store.dispatch('updateReserva', reserva)
                .then(function(res){
                    //vm.$store.dispatch('getAllClients')
                    vm.showForm = false;//oculta el form                              
                  }, function(response){
                    alert('error');
              })
        },
        deleteReserva(reserva){
              var data = { id: reserva };
              this.$store.dispatch('deleteClient',data)
              //this.$store.dispatch('getAllClients')      
          },
          editarReserva(reserva,key){  
              reserva.id = key;           
              this.showForm = true;
              this.$store.dispatch('selectReserva',reserva);
              document.getElementById('myModalLabel').innerHTML = 'Editar Reserva';

              $('#myModal').modal('show');
          }      
      }
    }
</script>