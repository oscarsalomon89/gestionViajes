<template>
    <form v-on:submit.prevent class="form-horizontal">
        <input type="hidden" v-bind:value="reserva.id" id="idreserva" name="idreserva">
        <input type="hidden" v-bind:value="userSelected.idcliente" id="idcliente" name="idcliente">
        <div class="form-group row">
            <label class="col-sm-4 control-label">D.N.I</label>
            <div class="col-sm-8">
                <input type="text" v-model="dni" @keyup.enter="buscarDni()" id="inputDni" class="form-control" placeholder="DNI">
            </div>
        </div>
        <div class="form-group row">
            <label class="col-sm-4 control-label">Nombre Completo</label>
            <div class="col-sm-8">
                <input type="text" v-bind:value="userSelected.name" class="form-control" id="inputName" placeholder="Nombre completo">
            </div>
        </div>        
        <div class="form-group row">
            <label class="col-sm-4 control-label">Telefono</label>
            <div class="col-sm-8">
                <input type="text" v-bind:value="userSelected.telefono" id="inputTelefono" class="form-control" placeholder="Telefono">
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
    props: ['reserva'],
    computed: mapGetters({
        userSelected: 'userSelected',
        reservaSelected: 'userSelected'
      }),
    data() {
          return {
              dni: this.reserva.dni,
          }
      },
    methods: {
      buscarDni(){
          this.$store.dispatch('buscarCliente',{dni: this.dni});
        }
    }
 }
 </script>