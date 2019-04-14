import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.onStudentNameChange = this.onStudentNameChange.bind(this);
    this.onStudentAgeChange = this.onStudentAgeChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      age: '',
    }
  }
  onStudentNameChange(e) {
    this.setState({
      name: e.target.value
    });
  }
  onStudentAgeChange(e) {
    this.setState({
      age: e.target.value
    })  
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      name: this.state.name,
      age: this.state.age,
    };
    axios.post('http://localhost:8080/', obj)
        .then(res => console.log(res.data));
    
    this.setState({
      name: '',
      age: '',
    })
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3>Add New Student</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Student Name:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.name}
                      onChange={this.onStudentNameChange}
                      />
                </div>
                <div className="form-group">
                    <label>Student Age: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.age}
                      onChange={this.onStudentAgeChange}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" value="Add Student" className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}