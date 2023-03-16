import React, { Component } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService'

class ViewEmployeeComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        id: this.props.params.id,
         employee: {}
      }
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then((res) => {
            this.setState({employee: res.data});
        })
    }

  render() {
    return (
      <div>
        <div className='card col-md-6 offset-md-3'>
            <h3>View Employee Details</h3>
            <div className='card-body'>
                <div className='row'>
                    <label>Employee First Name:</label>
                    <div>{ this.state.employee.firstName }</div>
                    <label>Employee Last Name:</label>
                    <div>{ this.state.employee.lastName }</div>
                    <label>Employee Email Address:</label>
                    <div>{ this.state.employee.emailId }</div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
function ViewEmployeeComponentWithNavigate(props) {
    let navigate = useNavigate();
    let params = useParams();
    return <ViewEmployeeComponent {...props} navigate={navigate} params={params}/>
}
export default ViewEmployeeComponentWithNavigate
