import React, {Component} from 'react'
import axios from 'axios';
class Read extends Component{
    constructor(){
        super();
        this.state={
            title:'',
            desc:'',
            post:''
        }
    }
    componentDidMount(){
        const str='/read/'.concat(String(this.props.location.state.id));
        axios.get(str)
        .then(res=>{
            this.setState({title:res.data.title, desc:res.data.desc, post:res.data.post});
        })
        .catch(err=>
            console.log(err))
        }
    render(){
        return(<div className="container p-4">
            <h3 className="text-center">{this.state.title}</h3>
            <h6 className="p-2">{this.state.desc}</h6>
            <p className="text-left p-2" style={{"white-space": "pre-line"}}>{this.state.post}</p>
        </div>
        );
    }
}

export default Read;
