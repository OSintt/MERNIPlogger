const { Router } = require('express');
const router = Router();
const { getRoute, getRoutes } = require('../controllers/rutas.controller');

import { checkRoute } from '../middleware';

router.route('/')
	.get(getRoutes)
router.route('/:id')
	.get([checkRoute.checkDoubleRoute], getRoute)

module.exports = router; 