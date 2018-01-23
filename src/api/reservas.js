import {db} from '../helpers/firebaseConfig'

var reservas = db.ref('reservas')
var users = db.ref('users')

export default {
  getReservas (clientes) {
    reservas.on('value', function(snapshot) {
      clientes(snapshot.val());
    });             
  },

  addReserva (data, cb, errorCb) {
    var keyUser = reservas.push(data).key;
    cb('Cliente Agregado con exito');
  },

  updateReserva (data, cb, errorCb) {
    reservas.child(data.id).update({"name": data.name,
                                "email":data.email,"telefono":data.telefono}).
                                then(function() {
                                  var ms = 'Cliente modificado con exito';
                                  cb(ms)
                                }).
                                catch(function(error) {
                                  errorCb('No se pudo modificar el cliente')
                                });
  },

  deleteReserva (data, cb) {
    reservas.child(data.id).remove()
  }
}