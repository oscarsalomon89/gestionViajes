import {db} from '../helpers/firebaseConfig'

var eventos = db.ref('eventos')

export default {
  getEventos (func) {
    eventos.on('value', function(snapshot) {
      func(snapshot.val());
    });             
  },

  getEventosFilter(data,func) {
    eventos.orderByChild('estado').equalTo(0).on('value', function (snapshot) {
      func(snapshot.val());
    }); 

    /*eventos.on('value', function (snapshot) {
      func(snapshot.val());
    });*/
  },

  addEvento (data, cb, errorCb) {
    var keyUser = eventos.push(data).key;
    cb('Evento Agregado con exito');
  },

  updateEvento (data, cb, errorCb) {
    eventos.child(data.id).update({"tipoEvento": data.tipoEvento,
                                  "primerEquipo": data.primerEquipo,
                                  "segundoEquipo": data.segundoEquipo,
                                  "monto": data.monto,
                                  "tipoTransporte": data.tipoTransporte,
                                  "estado": data.estado})
                          .then(function() {
                            var ms = 'Evento modificado con exito';
                            cb(ms)
                          }).
                          catch(function(error) {
                            errorCb('No se pudo modificar el Evento')
                          });
  },

  deleteEvento (data, cb) {
    eventos.child(data.id).remove()
  }
}