import {EventEmitter} from 'fbemitter';
import AppDispatcher from './dispatcher';
import taskConstants from './constants';
 
const CHANGE_EVENT = 'change';
let __emitter = new EventEmitter();
let tasks = [];
 
let TaskStore = {
 
getState() {
	if(tasks.length==0){
		let taskList=JSON.parse(localStorage.getItem("tasks"));
		if(taskList!==null){
			tasks=taskList;
		}

	}

	return tasks;
},
 
addListener(callback) {
return __emitter.addListener(CHANGE_EVENT, callback);
}
 
};
 
TaskStore.dispatchToken = AppDispatcher.register((action) => {
switch (action.type) {
case taskConstants.CREATE_TASK:
tasks.push(action.task);
localStorage.setItem("tasks",JSON.stringify(tasks));

__emitter.emit(CHANGE_EVENT);
break;

case taskConstants.DELETE_TASK:
tasks.splice(action.id,1);
localStorage.setItem("tasks",JSON.stringify(tasks));
__emitter.emit(CHANGE_EVENT);
break;

case taskConstants.CHANGE_STATUS:
	tasks[action.id]['status']=(action.status=='Done')?'Pending':'Done';
	localStorage.setItem("tasks",JSON.stringify(tasks));
	__emitter.emit(CHANGE_EVENT);
break;

}
 
});
 
export default TaskStore;