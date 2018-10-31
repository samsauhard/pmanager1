import React, { Component } from 'react';
import uuid from 'uuid';
class AddProject extends Component {
  constructor(){
    super();
    this.state = {newProject:{}
  }}
  static defaultProps ={
    categories : ['aa','bb','cc']}
handleSubmit(e)
{
  if(this.refs.title.value === ''){
    alert('Enter Title');
  }
  else
  {
    this.setState({newProject:{
      id:uuid.v4(),
      title: this.refs.title.value,
      name: this.refs.cat.value
    }}, function(){
      console.log(this.state);
      this.props.addProject(this.state.newProject);
    })

  }
    e.preventDefault();

}
      
  
  render() {
    let catop = this.props.categories.map(cat =>{
      return <option key={cat}> {cat}</option>
    });
  
    return (
      <div className="AddProject">
      <h3>Add Project</h3>
      <form onSubmit={this.handleSubmit.bind(this)}><div>
      <input type="text" ref="title"/>
      </div><div><select ref="cat">
      {catop}</select></div>
      <input type="submit" value="Submit" />
      </form>

      </div>
    );
  }
}
export default AddProject;
