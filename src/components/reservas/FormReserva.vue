<template>
    <form v-on:submit.prevent class="form-horizontal">
        <input type="hidden" v-bind:value="reserva.id" id="idreserva" name="idreserva">
        <input type="hidden" v-bind:value="reserva.idcliente" id="idcliente" name="idcliente">
        <div class="form-group row">
            <label class="col-sm-4 control-label">Seleccionar evento</label>
            <div class="col-sm-8">
                <select id="eventoSeleccionado" class="form-control">
                    <option v-for="(evento,key) in listEventos" :key="key"
                        :value="key">
                        {{evento.primerEquipo}} VS {{evento.segundoEquipo}}
                    </option>
                </select>
            </div>
        </div>  
        <div class="input-group mb-3">
            <input type="text" :disabled="disabled" v-bind:value="reserva.dni" @keyup.enter="buscarDni()" id="inputDni" class="form-control" placeholder="DNI">
            <div class="input-group-append">
                <button :disabled="disabled" class="btn btn-outline-secondary" @click="buscarDni()" type="button">Buscar</button>
            </div>
        </div>
        <div class="form-group row">
            <label class="col-sm-4 control-label">Nombre Completo</label>
            <div class="col-sm-8">
                <input type="text" :disabled="disabled" v-bind:value="reserva.name" class="form-control" id="inputName" placeholder="Nombre completo">
            </div>
        </div>        
        <div class="form-group row">
            <label class="col-sm-4 control-label">Telefono</label>
            <div class="col-sm-8">
                <input type="text" :disabled="disabled" v-bind:value="reserva.telefono" id="inputTelefono" class="form-control" placeholder="Telefono">
            </div>
        </div>
        <div class="form-group row">
            <label for="inputMonto" class="col-sm-4 control-label">Monto</label>
            <div class="col-sm-8">
                <input type="number" v-bind:value="reserva.monto" class="form-control" id="inputMonto" placeholder="seña">
            </div>
        </div>                     
    </form>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

 export default {
    props: ['reserva','disabled'],
    computed: mapGetters({
        reservaSelected: 'reservaSelected',
        listEventos: 'allEventos'
      }),
      created () {
        this.$store.dispatch('getEventosFilter', null)
      },
    methods: {
      buscarDni(){
          document.getElementById('idcliente').value = '';
          document.getElementById('inputName').value = ''; 
          document.getElementById('inputTelefono').value = '';

          var dni = document.getElementById('inputDni').value;
          this.$store.dispatch('buscarCliente',{dni: dni});
        }
    }
 }
 </script>