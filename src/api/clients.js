import {db} from '../helpers/firebaseConfig'

var users = db.ref('users')

export default {
  getClients (clientes) {
    users.on('value', function(snapshot) {
      clientes(snapshot.val());
    });             
  },

  addClient (data, cb, errorCb) {
    var keyUser = users.push(data).key;
    cb('Cliente Agregado con exito');
  },

  updateClient (data, cb, errorCb) {
    users.child(data.id).update({"name": data.name,
                                "email":data.email,"telefono":data.telefono}).
                                then(function() {
                                  var ms = 'Cliente modificado con exito';
                                  cb(ms)
                                }).
                                catch(function(error) {
                                  errorCb('No se pudo modificar el cliente')
                                });
  },

  deleteClient (data, cb) {
    users.child(data.id).remove()
  }
}