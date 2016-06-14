import React, {Component} from 'react';
import TaskActions from './taskactions';

export default class TodoLists extends Component{
	constructor(props){
	super(props);
	this.state={
            tasks:this.props.tasks
        }
	}
    deleteTask(e){
        e.preventDefault();

        let status=confirm("Do you want to delete this task?");
        if(status==true){
           let taskIndex=e.target.getAttribute('data-task-id');
            
        TaskActions.deleteTask(taskIndex);
    
        }
    }
    changeStatus(id,status,e){
      e.preventDefault();
      TaskActions.changeStatus(id,status);
      //alert("fired");
    }
	render(){
   var taskr=this.state.tasks||[];
				const taskItems=taskr.map((task,i)=>{
          let setDone={
            'display':(task.status=='Done')?'inline-block':'none'
        };
             let setPending={
            'display':(task.status=='Done')?'none':'inline-block'
        };
				
					let id=i;
			return (   <tr key={i}>
                  <td>{i+1}</td>
                  <td>{task.description}</td>
                  <td>{task.date}</td>
                  <td>{task.priority}</td>
                  <td>{task.status}</td>
                  <td>  
	                  <a className="pointer"  title="Done" style={setPending}   onClick={this.changeStatus.bind(this,id,'Pending')}><i className="material-icons left">done</i></a> 
	                   <a className="pointer" title="Undo"  style={setDone}  onClick={this.changeStatus.bind(this,id,'Done')} ><i className="material-icons left">settings_backup_restore</i></a>
	                   <a className="pointer" title="Delete" onClick={this.deleteTask.bind(this)} ><i className="material-icons left" data-task-id={id}>delete</i></a>
                   </td>
                </tr>);
		});
	return(   

	<div className="row">
		<div className="col s12">
           <p className="flow-text">Todo Items</p>
           <div className="divider"></div>
            <table className="striped">
              <thead>
                <tr>
                	<th>SL</th>
                    <th data-field="id">Todo</th>
                    <th data-field="name">Date</th>
                    <th data-field="price">Priority</th>
                    <th data-field="price">Status</th>
                    <th data-field="price">#</th>
                </tr>
              </thead>
              <tbody>

{taskItems}
                                
              </tbody>
            </table>
          </div>
	</div>);
	}
}