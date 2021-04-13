"use strict";

var _require = require('mongoose'),
    Schema = _require.Schema,
    model = _require.model;

var moment = require('moment');

moment.locale('es', {
  months: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_'),
  monthsShort: 'Enero._Feb._Mar_Abr._May_Jun_Jul._Ago_Sept._Oct._Nov._Dec.'.split('_'),
  weekdays: 'Domingo_Lunes_Martes_Miercoles_Jueves_Viernes_Sabado'.split('_'),
  weekdaysShort: 'Dom._Lun._Mar._Mier._Jue._Vier._Sab.'.split('_'),
  weekdaysMin: 'Do_Lu_Ma_Mi_Ju_Vi_Sa'.split('_')
});
var IpSchema = new Schema({
  hostName: {
    type: String
  },
  loggedDate: {
    type: String,
    "default": moment().format('MMMM Do YYYY, h:mm:ss a')
  },
  routeFound: {
    type: Schema.Types.ObjectId,
    ref: 'Route'
  }
}, {
  timestamps: true
});
module.exports = model('Ip', IpSchema);