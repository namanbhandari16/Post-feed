import React, {Component} from 'react'
import { Link} from 'react-router-dom';
import axios from 'axios';
const date = (d)=>{
	const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
	var num
	num=parseInt(d.slice(5,8))
	var month = months[num-1]
	return String(month +" "+ d.slice(9,11) +", "+d.slice(0,4))
}
class Landing extends Component{
constructor(){
	super();
	this.state={
		posts:[]
	}
}
componentDidMount(){
	axios.get('/feed')
	.then(res=>{
		this.setState({posts:res.data});
		//console.log(this.state.posts)
	})
	.catch(err=>
		console.log(err))
}
render(){
	const po = this.state.posts.map(post => (
		<div className="card mx-auto" key={post._id} style={{width:"30rem", maxHeight:"20rem"}}>
		<div className="card-body">
		<Link style={{ textDecoration: 'none' }} to={{pathname:"/read", state: {id:post._id} }}>
		  <h4 className="card-title text-left text-dark">{post.title}</h4>
		  <h6 className="card-subtitle text-left p-1 text-dark font-italic">Curated at {date(post.date.slice(0,10))}</h6>
		  <p className="card-text text-left text-dark">{post.desc}</p>
		</Link>
		</div>
		</div>
	  ));
	return(
		
	<div className="container p-2">{po}</div>
	);
}
}

export default Landing;