<template>
    <form v-on:submit.prevent class="form-horizontal">
        <input type="hidden" v-bind:value="user.id" id="iduser" name="iduser">
        <div class="form-group row">
            <label for="inputUser" class="col-sm-4 control-label">Nombre Completo</label>
            <div class="col-sm-8">
                <input type="text" v-bind:value="user.name" class="form-control" id="inputUser" placeholder="Nombre completo">
            </div>
        </div>
        <div class="form-group row">
            <label for="inputUser" class="col-sm-4 control-label">D.N.I</label>
            <div class="col-sm-8">
                <input type="text" v-bind:value="user.dni" id="inputDni" class="form-control" placeholder="DNI">
            </div>
        </div>
        <div class="form-group row">
            <label class="col-sm-4 control-label">Telefono</label>
            <div class="col-sm-8">
                <input type="text" v-bind:value="user.telefono" id="inputTelefono" class="form-control" placeholder="Telefono">
            </div>
        </div>
        <div class="form-group row">
            <label for="inputEmail" class="col-sm-4 control-label">Email</label>
            <div class="col-sm-8">
                <input type="email" v-bind:value="user.email" class="form-control" id="inputEmail" placeholder="Email">
            </div>
        </div>                     
    </form>
</template>
<script>
 export default {
    name: 'FormCliente',
    props: ['user'],
    methods: {
      
    }
 }
 </script>