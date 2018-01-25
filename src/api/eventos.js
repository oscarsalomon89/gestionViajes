import {db} from '../helpers/firebaseConfig'

var eventos = db.ref('eventos')

export default {
  getEventos (func) {
    eventos.on('value', function(snapshot) {
      func(snapshot.val());
    });             
  },

  addEvento (data, cb, errorCb) {
    var keyUser = eventos.push(data).key;
    cb('Cliente Agregado con exito');
  },

  updateEvento (data, cb, errorCb) {
    eventos.child(data.id).update({"name": data.name,
                                "email":data.email,"telefono":data.telefono}).
                                then(function() {
                                  var ms = 'Cliente modificado con exito';
                                  cb(ms)
                                }).
                                catch(function(error) {
                                  errorCb('No se pudo modificar el cliente')
                                });
  },

  deleteEvento (data, cb) {
    eventos.child(data.id).remove()
  }
}