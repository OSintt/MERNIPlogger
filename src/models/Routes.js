const { Schema, model } = require('mongoose');
const moment = require('moment');

moment.locale('es', {
  months: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_'),
  monthsShort: 'Enero._Feb._Mar_Abr._May_Jun_Jul._Ago_Sept._Oct._Nov._Dec.'.split('_'),
  weekdays: 'Domingo_Lunes_Martes_Miercoles_Jueves_Viernes_Sabado'.split('_'),
  weekdaysShort: 'Dom._Lun._Mar._Mier._Jue._Vier._Sab.'.split('_'),
  weekdaysMin: 'Do_Lu_Ma_Mi_Ju_Vi_Sa'.split('_')
});

const RouteSchema = new Schema({
	routeName: {
		type: String,
		unique: true
	},
	createDate: {
		type: String,
		default: moment().format('MMMM Do YYYY, h:mm:ss a')
	},
	image: String,
	author: {
		type: String,
		default: "HkerShit"
	},
	ips: [{
		type: Schema.Types.ObjectId,
		ref: 'Ip'
	}]
}, {
	timestamps: true
});

module.exports = model('Route', RouteSchema);