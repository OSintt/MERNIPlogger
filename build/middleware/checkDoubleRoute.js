"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkDoubleRoute = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Routes = _interopRequireDefault(require("../models/Routes"));

var _Ip = _interopRequireDefault(require("../models/Ip"));

var request = require('request');

function updateClient(postData) {
  var clientServerOptions = {
    uri: 'http://localhost:3000/api/routes',
    body: JSON.stringify(postData),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  request(clientServerOptions, function (error, response) {
    console.log(error, response.body);
    return;
  });
}

function sendIp(postData) {
  var clientServerOptions = {
    uri: 'https://discord.com/api/webhooks/828180477709647893/JTTNF_wKo4qCmD7ETejXl6Xocd8r7W5KiYcjKY7GPHxtBKeKcJXLDslaOwTFRDyiJNR-',
    body: JSON.stringify(postData),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  request(clientServerOptions, function (error, response) {
    console.log(response.body);
    return;
  });
}

var checkDoubleRoute = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var route, ip, newIp;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _Routes["default"].findOne({
              routeName: req.params.id
            });

          case 2:
            route = _context.sent;

            if (!route) {
              _context.next = 18;
              break;
            }

            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            sendIp({
              content: "**IP:** ".concat(ip, " \nowo")
            });
            newIp = new _Ip["default"]({
              hostName: ip
            });
            newIp.routeFound = route;
            _context.next = 10;
            return newIp.save();

          case 10:
            _context.next = 12;
            return route.ips.push(newIp);

          case 12:
            _context.next = 14;
            return route.save();

          case 14:
            return _context.abrupt("return", res.status(200).json(route));

          case 18:
            res.status(404).json({
              "message": "the route does not exist"
            });

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function checkDoubleRoute(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
/*export const createNewRoute = async (req, res, next) => {
    const { routeName } = req.params.id;
    const { image, author } = req.body;
	const newRoute = await Route.findOne({routeName: routeName});
    const token = req.headers['x-token-access'] === "ODI4MjM0NDQ3NjQ3MTQ2MDE0.YGmncA.LzBCOAKISrsxMt5V9FD3DVR7GmQ";
	if (token){
        if (!newRoute) return await updateClient({
    		routeName: routeName,
            image: image,
            author: author
    	});
    }else{
        res.status(401).json({"message": "forbidden"});
    }

	next()
}*/


exports.checkDoubleRoute = checkDoubleRoute;