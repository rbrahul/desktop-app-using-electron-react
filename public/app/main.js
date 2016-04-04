import React, {Component} from 'react';
import { render } from 'react-dom';
import TaskStore from './components/taskstore.js';
import TaskActions from './components/taskactions.js';
import InputArea from './components/todoinput.js';
import TodoLists from './components/todolist.js';

class App extends Component{
	constructor(){
		super(...arguments);

		this.state = {
				tasks: TaskStore.getState()
					}
				
		}
componentDidMount() {
this.storeSubscription = TaskStore.addListener( 
data => this.handleStoreChange(data));
}
 
componentWillUnmount() {
this.storeSubscription.remove();
}
 
handleStoreChange(){
this.setState({tasks: TaskStore.getState()});
}
		render(){
			return(<div>
			<InputArea/>
			<TodoLists tasks={this.state.tasks}/>
			</div>);
		}
}


render(<App />, document.getElementById('app'));