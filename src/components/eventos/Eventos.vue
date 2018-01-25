<template>
    <div>
        <Navbar></Navbar>
        <div class="page-header">
    <h1>Modulo Eventos</h1>
    <button type="button" class="btn btn-primary" v-on:click="openAddEvento()" data-target="#myModal">
  Nuevo Evento
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
          <form v-on:submit.prevent class="form-horizontal">
            <input type="hidden" v-bind:value="evento.id" id="idevento" name="idevento">
            <div class="form-group row">
                <label class="col-sm-4 control-label">Tipo de evento</label>
                <div class="col-sm-8">
                    <select v-model="tipoEvento" class="form-control">
                        <option value="partido" selected>Partido de Futbol</option>
                        <option value="espectaculo">Espectaculo</option>
                        <option value="otro">Otro</option>
                    </select>                    
                </div>
            </div> 
            <div class="form-group row">
                <label class="col-sm-4 control-label">Primer equipo</label>
                <div class="col-sm-8">
                    <input type="text" v-model="primerEquipo" value="" class="form-control" placeholder="equipo 1">
                </div>
            </div>       
            <div class="form-group row">
                <label class="col-sm-4 control-label">Segundo equipo</label>
                <div class="col-sm-8">
                    <input type="text" id="segundoEquipo" v-model="segundoEquipo" class="form-control" placeholder="Equipo 2">
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-4 control-label">Transporte</label>
                <div class="col-sm-8">
                    <select v-model="tipoTransporte" class="form-control">
                        <option value="colectivo" selected>Colectivo</option>
                    </select>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-4 control-label">Costo Total</label>
                <div class="col-sm-6">
                    <input type="number" v-model="monto" class="form-control" placeholder="costo total">
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-4 control-label">Estado</label>
                <div class="col-sm-6">
                    <select v-model="estado" class="form-control">
                        <option value="0" selected>Abierto</option>
                        <option value="1" selected>Finalizado</option>
                    </select>
                </div>
            </div>                     
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
        <button type="button" @click="addEvento()" class="btn btn-primary">Guardar</button>
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
                  <th>Tipo</th>
                  <th>Detalle</th>
                  <th>Monto</th>
                  <th></th>
              </tr>
              </thead>
              <tr v-for="(evento,key,index) in listEventos" :key="key">
                <td>{{index}}</td>
                <th scope="row">{{evento.tipo}}</th>
                <td>{{evento.primerEquipo}} VS {{evento.segundoEquipo}}</td>
                <td>{{evento.monto}}</td>
                <td>
                <button @click="deleteEvento(key)" class="btn btn-danger btn-sm">
                    eliminar
                </button>
                <button @click="editarEvento(reserva,key)" class="btn btn-success btn-sm">
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

export default {
    components: { 'Navbar': Navbar },
      computed: mapGetters({
        listEventos: 'allEventos',
        eventoSelected: 'eventoSelected'
      }),
      data() {
          return {
              evento: [],
              primerEquipo: 'River Plate',
              tipoEvento: 'partido',
              segundoEquipo: '',
              tipoTransporte: 'colectivo',
              monto: '',
              estado: 0
          }
      },
      created () {
        this.$store.dispatch('getAllEventos')
      },
    methods: {
        openAddEvento(){
          //this.$store.dispatch('selectEvento',[]);
          document.getElementById('myModalLabel').innerHTML = 'Nuevo Evento';
          document.getElementById('segundoEquipo').focus();
          $('#myModal').modal('show');
        },
        addEvento(){          
            let vm = this;       

            if (this.monto =='' || this.tipoEvento == '' || this.primerEquipo == '' || 
                this.segundoEquipo == '' || this.tipoTransporte == '' || this.estado == '') {
              var msgError = 'Datos incompletos';
              this.$store.dispatch('mensajeFalla', msgError)
            } else {

              var data = {
                tipoEvento: this.tipoEvento,
                primerEquipo: this.primerEquipo,
                segundoEquipo: this.segundoEquipo,
                monto: this.monto,
                tipoTransporte: this.tipoTransporte,
                estado: this.estado
              };

              if(id != ''){
                this.updateEvento(data,id);
                return;
              }

              this.$store.dispatch('addEvento', data)
                  .then(function(res){
                                                       
                    }, function(response){
                      alert('error');
                })
            }
        },
        updateEvento(evento,id){
            let vm = this;
            evento.id = id;
            this.$store.dispatch('updateEvento', evento)
                .then(function(res){
                             
                  }, function(response){
                    alert('error');
              })
        },
        deleteEvento(evento){
              confirm = confirm('Esta seguro que desea eliminar la reserva?');
              if(confirm){
                var data = { id: evento };
                this.$store.dispatch('deleteEvento',data)
              }     
          },
          editarEvento(evento,key){  
              evento.id = key;           
              this.disabled = true;
              this.$store.dispatch('selectEvento',evento);
              document.getElementById('myModalLabel').innerHTML = 'Editar Evento';

              $('#myModal').modal('show');
          }      
      }
  }
</script>