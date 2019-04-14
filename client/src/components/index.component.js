import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';

export default class Index extends Component {

  constructor(props) {
      super(props);
      this.state = {students: []};
    }
    componentDidMount(){
      axios.get('http://localhost:8080/')
        .then(response => {
          this.setState({ students: response.data });
		   console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    tabRow(){
      return this.state.students.map(function(object, i){
          return <TableRow obj={object} key={i} />;
      });
    }

    render() {
      return (
        <div>
          <h3 align="left">Students</h3>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th colSpan="2">Action</th>
              </tr>
            </thead>
            <tbody>
              { this.tabRow() }
            </tbody>
          </table>
        </div>
      );
    }
  }