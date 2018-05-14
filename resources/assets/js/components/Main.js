import React, { Component } from 'react';
import ReactDOM from 'react-dom';

 
/* Main Component */
class Main extends Component {
 
  constructor() {
   
    super();
    //Initialize the state in the constructor
    this.state = {
        students: [],
    }
  }
  /*componentDidMount() is a lifecycle method
   * that gets called after the component is rendered
   */
  componentDidMount() {
    /* fetch API in action */
    fetch('/api/students')
        .then(response => {
            return response.json();
        })
        .then(students => {
            //Fetched student is stored in the state
            this.setState({ students });
        });
  }
 
 renderstudents() {
    return this.state.students.map(student => {
        return (
            <li key={student.id} >
                { student.name } 
            </li>      
        );
    })
  }
   
  render() {
    return (
        <div>
              <ul>
                { this.renderstudents() }
              </ul> 
            </div> 
       
    );
  }
}
 
export default Main;
 
/* Rendering on Root DIV */
 
if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}

