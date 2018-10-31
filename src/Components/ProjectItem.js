import React, { Component } from 'react';

class ProjectItem extends Component {
	deleteProject()
	{
		console.log("test");
		this.props.onDelete(this.id);
	}
  render() {
    return (
      <li className="ProjectItem">
            	{this.props.project.title} -- {this.props.project.name} <a href='#' onClick={this.deleteProject.bind(this,this.props.project.id)}>x</a>
    
      </li>
    );
  }
}

export default ProjectItem;
