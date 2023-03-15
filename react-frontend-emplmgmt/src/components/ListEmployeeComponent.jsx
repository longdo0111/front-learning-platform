import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

class ListEmployeeComponent extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
        employees: []
    }
    this.addEmployee = this.addEmployee.bind(this);
  };

  componentDidMount() {
      EmployeeService.getEmployees().then((res) => {
        this.setState({employees : res.data});
      });
  }

  addEmployee(){
    this.props.navigate('/add-employee');
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Employee List</h2>
        <div className="row">
          <button className="col-sm-3 btn btn-primary" onClick={this.addEmployee}>Add Employee</button>
        </div>
        <br/>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                  <th>Employee First Name</th>
                  <th>Employee Last Name</th>
                  <th>Employee Email Id</th>
                  <th>Actions</th>
              </tr>
            </thead>

            <tbody>
                {
                    this.state.employees.map(
                        employee =>
                        <tr key="{employee.id}">
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.emailId}</td>
                            <td>
                                
                            </td>
                        </tr>
                    )
                }              
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
function WithNavigate(props) {
  let navigate = useNavigate();
  return <ListEmployeeComponent {...props} navigate={navigate} />
}

export default WithNavigate
