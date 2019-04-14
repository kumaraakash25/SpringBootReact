
import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.onChangeStudentName = this.onChangeStudentName.bind(this);
    this.onChangeStudentAge = this.onChangeStudentAge.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      age: '',
    }
  }

  componentDidMount() {
	  console.log(this.props.match.params.id);
      axios.get('http://localhost:8080/'+this.props.match.params.id)
          .then(response => {
              this.setState({ 
                name: response.data.name, 
                age: response.data.age });
          })
          .catch(function (error) {
              console.log(error);
          })
    }

  onChangeStudentName(e) {
    this.setState({
      name: e.target.value
    });
  }
  onChangeStudentAge(e) {
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
    axios.put('http://localhost:8080/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));
    window.alert("Student record edited") ;
    this.props.history.push('/index');
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Update Record</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Name:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.name}
                      onChange={this.onChangeStudentName}
                      />
                </div>
                <div className="form-group">
                    <label>Age: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.age}
                      onChange={this.onChangeStudentAge}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" 
                      value="Update Record" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}