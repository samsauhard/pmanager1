import React, { Component } from 'react';
import Projects from'./Components/projects';
import AddProject from './Components/AddProject'
import uuid from 'uuid';
import $ from 'jquery';
import './App.css';
class App extends Component {
  constructor()
  {
  	super();
  	this.state={
  		projects:[],
  		todos: []
  	}
}

getToDos()
	{
		$.ajax({
			url: 'https://jsonplaceholder.typicode.com/todos/1',
			dataType:'json',
			cache:false,
			success:function(data){
				this.setState({todos: data})
				console.log(this.state.todos);
			}.bind(this),
			error:function(xhr,status,err){
				console.log(err);
			}
		});
	}
  	componentWillMount(){
  		
  		this.setState({projects:[
  		{
  			id:uuid.v4(),
  			title:'a',
  			name:'aa'
  		},
  		{
  			id:uuid.v4(),
  			title:'b',
  			name:'bb'
  		},
  		{
  			id:uuid.v4(),
  			title:'c',
  			name:'cc'
  		}]});
  		this.getToDos();
  	}

	
	componentDidMount()
	{
		this.getToDos();
	}
  handleAdd(project)
  {
  	console.log(project);
  	let data = this.state.projects;
  	data.push(project);
  	this.setState({projects:data})
  }
  handleDelete(id)
  {
  	let pro = this.state.projects;
  	let index = this.state.projects.findIndex(x=> x.id === id);
  	pro.splice(index, 1);
  	this.setState({projects:pro})
  }
  render() {
    return (
      <div className="App">

       My App
       <Projects projects={this.state.projects} onDelete = {this.handleDelete.bind(this)} />
       <AddProject addProject = {this.handleAdd.bind(this)}/>
      </div>
    );
  }
}

export default App;
