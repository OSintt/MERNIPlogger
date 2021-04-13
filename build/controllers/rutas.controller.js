"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var routeCtrl = {};

var Route = require('../models/Routes');

var Ip = require('../models/Ip');

routeCtrl.getRoutes = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var findUs;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Route.find().populate('ips');

          case 2:
            findUs = _context.sent;
            res.status(200).json(findUs);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
/*routeCtrl.createRoute = async (req, res) => {
	const { routeName, author, image, ip } = req.body; 
	let newRoute = new Route({
		routeName: routeName,
		author: author,
		image: image
	})
	await newRoute.save()
	/*let ruta = await Route.findOne({routeName: routeName});
	let newIp = new Ip({
        hostName: ip
    });
    newIp.routeFound = ruta;
	await newIp.save();
	console.log(newIp);
	ruta.ips.push(newIp);
	await ruta.save();
	res.status(204).json({"message": "job done correctly"});
} */


routeCtrl.getRoute = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var findRoute;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return Route.findById(req.params.id);

          case 2:
            findRoute = _context2.sent;
            res.status(200).json(findRoute);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

module.exports = routeCtrl;