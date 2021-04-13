import React from 'react';
import axios from 'axios';
const url = "https://172.18.0.70:3000"

export default class routePage extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			author: "",
			img: "",
			ir: "",
			algunos: ""
		}
	}

	async componentDidMount() {
		await axios.get(`${url}/api/routes/${this.props.match.params.id}`)
		.then(res => {
			this.setState({author: res.data.author});
    		this.setState({img: res.data.image});
   			this.setState({algunos: "Algunos payasos de la comunidad..."})
			this.setState({ir: "¡Quiero Ir!"})
		})
		.catch(error => {
			if (error.response){
				this.setState({author: "404: Not Found"})
				this.setState({img: "https://image.freepik.com/vector-gratis/error-404-no-encontrado-efecto-falla_8024-5.jpg"})
			}
		})

	}
	
	render() {
		return(
			<div>
	            <div className="box">
		  			<div className="carta-reviews">
		  				<div className="headerCarta">{this.state.author}</div>
		  				<img src={this.state.img} className="img" alt=""/>
		    			<p className="h6Style-reviews">{this.state.algunos}</p>
		    			<a href="https://discord.gg/aTTTcCKknW" className="headerCarta">{this.state.ir}</a>
		  			</div>
	  			</div>
  			</div>	
		)
	}

}