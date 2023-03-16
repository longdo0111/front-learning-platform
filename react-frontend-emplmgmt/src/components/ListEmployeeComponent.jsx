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
    this.editEmployee = this.editEmployee.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
    this.viewEmployee = this.viewEmployee.bind(this);
  };

  editEmployee(id) {
    this.props.navigate(`/add-employee/${id}`);
  }

  componentDidMount() {
      EmployeeService.getEmployees().then((res) => {
        this.setState({employees : res.data});
      });
  }

  addEmployee(){
    this.props.navigate('/add-employee/_add');
  }

  deleteEmployee(id) {
    EmployeeService.deleteEmployee(id).then((res) => {
       this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
    });
  }

  viewEmployee(id) {
    this.props.navigate(`/view-employee/${id}`);
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
                                <button className="btn btn-info" onClick={ () => this.editEmployee(employee.id)}>Update</button>
                                <button className="btn btn-danger" style={{"marginLeft": "10px"}} onClick={ () => this.deleteEmployee(employee.id)}>Delete</button>
                                <button className="btn btn-primary" style={{"marginLeft": "10px"}} onClick={ () => this.viewEmployee(employee.id)}>View</button>
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
function ListEmployeeComponentWithNavigate(props) {
  let navigate = useNavigate();
  return <ListEmployeeComponent {...props} navigate={navigate} />
}

export default ListEmployeeComponentWithNavigate
