<template>
  <div>
    <Navbar></Navbar>
  <div class="page-header">
    <h1>Clientes <small>Subtext for header</small></h1>
    <button type="button" class="btn btn-primary" v-on:click="openAddUser()" data-target="#myModal">
  Add User modal
</button>

<!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel"></h4>
      </div>
      <div class="modal-body">
             
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" v-show="addStatus == null" @click="addUser()" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

    <div class="row">
      <div class="col-md-3">

      </div>
      <div class="col-md-6 jumbotron">
          <table class="table table-striped">
            <tr>
                <th>#</th>
                <th>User</th>
                <th>Email</th>
                <th>Auth</th>
                <th></th>
            </tr>           
          </table>
        </div>
    </div>
  </div>  
  </div>
</template>
<script>
import Navbar from './Navbar.vue'
export default {
    components: { 'Navbar': Navbar }
  }
</script>
