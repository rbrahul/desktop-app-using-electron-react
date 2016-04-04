import React, {Component} from 'react';

export default class TodoLists extends Component{
	constructor(props){
	super(props);
	}

	render(){
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
                    <th data-field="price">#</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Alvin</td>
                  <td>Feb 10, 2016</td>
                  <td>High</td>
                  <td>  
	                  <a className="grey darken-4" title="Done"><i className="material-icons left">done</i></a> 
	                   <a className="" title="Undo"><i className="material-icons left">settings_backup_restore</i></a><a className="grey darken-4" title="Delete"><i className="material-icons left">delete</i></a>
                   </td>
                </tr>

                                
              </tbody>
            </table>
          </div>
	</div>);
	}
}