import React, {Component} from 'react';

export default class InputArea extends Component{
	constructor(){
	super();
	}

	render(){
	return(   
 <div className="col s12">
	 <div className="row">
        <div className="input-field col s6">
          <i className="material-icons prefix">mode_edit</i>
          <input id="icon_prefix" placeholder="Write your todo..." type="text" className="validate"/>
          <label htmlFor ="icon_prefix">Todo</label>
        </div>

		  <div className="input-field col s4">
		    <select defaultValue="">
		      <option value="" disabled >Priority</option>
		      <option value="1">High</option>
		      <option value="2">Medium</option>
		      <option value="3">Less</option>
		    </select>
		    <label>Priority</label>
		  </div>

		  <div className="input-field col s2">
				  <button className="btn waves-effect waves-light" type="submit" name="action">Save
				    <i className="material-icons right">send</i>
				  </button>
		  </div>


        </div>
        </div>

        );
	}
}