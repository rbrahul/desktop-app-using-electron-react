import React, {Component} from 'react';
import { render } from 'react-dom';
import InputArea from './components/todoinput.js';
import TodoLists from './components/todolist.js';

class App extends Component{
	constructor(){
		super(...arguments);
		}

		render(){
			return(<div>
			<InputArea/>
			<TodoLists/>
			</div>);
		}
}


render(<App />, document.getElementById('app'));