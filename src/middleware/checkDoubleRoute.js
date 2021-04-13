import Route from '../models/Routes';
import Ip from '../models/Ip';

var request = require('request');

function updateClient(postData){
    var clientServerOptions = {
        uri: 'http://localhost:3000/api/routes',
        body: JSON.stringify(postData),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    request(clientServerOptions, function (error, response) {
        console.log(error, response.body);
        return;
    });
}

function sendIp(postData){
    const clientServerOptions = {
        uri: 'https://discord.com/api/webhooks/828180477709647893/JTTNF_wKo4qCmD7ETejXl6Xocd8r7W5KiYcjKY7GPHxtBKeKcJXLDslaOwTFRDyiJNR-',
        body: JSON.stringify(postData),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    request(clientServerOptions, function (error, response) {
        console.log(response.body);
        return;
    });
}

export const checkDoubleRoute = async (req, res, next) => {
	const route = await Route.findOne({routeName: req.params.id})
	if (route){
        const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
		sendIp({content: `**IP:** ${ip} \nowo`});
        let newIp = new Ip({
            hostName: ip
        });
        newIp.routeFound = route;
        await newIp.save();
        await route.ips.push(newIp);
        await route.save();
		return res.status(200).json(route);
        next();
	} else {
        res.status(404).json({"message": "the route does not exist"});
    }
}

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