import React, {Component} from 'react'
import axios from 'axios';
class Create extends Component{
    constructor(){
		super();
		this.state={
            title:'',
            desc:'',
            post:''
		};
		this.onChange = this.onChange.bind(this);
		this.onSubmit =this.onSubmit.bind(this);
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });	
    }
        onSubmit(e){
            e.preventDefault();
            const newPost = {
          title: this.state.title,
          desc: this.state.desc,
          type:'text',
          post:this.state.post
        };
        this.setState({
            title:'',
            desc:'',
            post:''
        });
        axios.post('/create/new', newPost);
        this.props.history.push('/')
        }
render(){
    return(
        <div className="conatiner m-4">
        <h2 className="text-left p-2"> Create Post</h2>
        <form onSubmit={this.onSubmit}>
        <div className="form-group">
            <input
                  placeholder="Title"
                  name="title"
                  value={this.state.title}
                  onChange={this.onChange}
                  className="form-control form-control-lg"
                />
            </div>
            <div className="form-group">
            <textarea
                  placeholder="Description"
                  name="desc"
                  value={this.state.desc}
                  onChange={this.onChange}
                  rows="3"
                  className="form-control form-control-lg"
                />
            </div>   
            <div className="form-group">
            <textarea
                  placeholder="Post"
                  name="post"
                  value={this.state.post}
                  onChange={this.onChange}
                  rows="12"
                  className="form-control form-control-lg"
                />
            </div>    
            <div className="text-right"><input type="submit" className="btn btn-info btn-lg"  value="Publish"/></div>
          </form>
        </div>
    );
}}

export default Create;