import React, {Component} from 'react';
import TaskActions from './taskactions';

export default class InputArea extends Component{
	constructor(){
	super();
	this.state={task:{description:"",priority:"",date:"",status:"Pending"}};
	}

	addNewTask(e){
		e.preventDefault();
		let taskDescription=this.refs.task.value;
		let priority=this.refs.priority.value;
		let currentDate=new Date().toString();
		priority=(priority=="")?"Less":priority;
		this.setState({task:{description:taskDescription,priority:priority,date:currentDate,status:"Pending"}},function(){
			TaskActions.createTask(this.state.task);
			this.refs.task.value="";
			this.refs.priority.value="";

		});
	

		//TaskActions

	}

	render(){
	return(   
 <div className="col s12">
	 <div className="row">
	 <form action="#" onSubmit={this.addNewTask.bind(this)}>
        <div className="input-field col s6">
          <i className="material-icons prefix">mode_edit</i>
          <input id="icon_prefix" placeholder="Write your todo..." ref="task" type="text" className="validate"/>
          <label htmlFor ="icon_prefix">Todo</label>
        </div>

		  <div className="input-field col s4">
		    <select defaultValue="" ref="priority">
		      <option value="" disabled >Priority</option>
		      <option value="Hight">High</option>
		      <option value="Medium">Medium</option>
		      <option value="Less">Less</option>
		    </select>
		    <label>Priority</label>
		  </div>

		  <div className="input-field col s2">
				  <button className="btn waves-effect waves-light" type="submit" name="action">Save
				    <i className="material-icons right">send</i>
				  </button>
		  </div>
</form>

        </div>
        </div>

        );
	}
}