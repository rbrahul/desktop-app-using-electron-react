import AppDispatcher from './dispatcher';
import TaskConstants from './constants';
 
let TaskActions = {
 
createTask(task){
	AppDispatcher.dispatch({
	type: TaskConstants.CREATE_TASK,
	task: task
});
	console.log("task created");
},

deleteTask(taskId){
	AppDispatcher.dispatch({
	type: TaskConstants.DELETE_TASK,
	id: taskId
});
	console.log("deleted a task");
},
changeStatus(taskId,type){
	AppDispatcher.dispatch({
	type: TaskConstants.CHANGE_STATUS,
	id: taskId,
	status:type
});
	console.log("changed status");
}

 
};
 
export default TaskActions;