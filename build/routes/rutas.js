"use strict";

var _middleware = require("../middleware");

var _require = require('express'),
    Router = _require.Router;

var router = Router();

var _require2 = require('../controllers/rutas.controller'),
    getRoute = _require2.getRoute,
    getRoutes = _require2.getRoutes;

router.route('/').get(getRoutes);
router.route('/:id').get([_middleware.checkRoute.checkDoubleRoute], getRoute);
module.exports = router;