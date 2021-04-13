const routeCtrl = {};
const Route = require('../models/Routes');
const Ip = require('../models/Ip');

routeCtrl.getRoutes = async (req, res) => {
	let findUs = await Route.find().populate('ips');
	res.status(200).json(findUs);
}

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

routeCtrl.getRoute = async (req, res) => {
	let findRoute = await Route.findById(req.params.id);
	res.status(200).json(findRoute);
}

module.exports = routeCtrl;