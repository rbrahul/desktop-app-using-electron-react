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
}

 
};
 
export default TaskActions;