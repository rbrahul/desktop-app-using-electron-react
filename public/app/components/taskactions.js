import AppDispatcher from './dispatcher';
import TaskConstants from './constants';
 
let TaskActions = {
 
createTask(task){
	AppDispatcher.dispatch({
	type: TaskConstants.CREATE_TASK,
	task: task
});
},

deleteTask(taskId){
	AppDispatcher.dispatch({
	type: TaskConstants.DELETE_TASK,
	id: taskId
});
},
changeStatus(taskId,type){
	AppDispatcher.dispatch({
	type: TaskConstants.CHANGE_STATUS,
	id: taskId,
	status:type
});
}

 
};
 
export default TaskActions;