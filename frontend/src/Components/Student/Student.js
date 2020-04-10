import React from 'react'
import { Link, Redirect } from 'react-router-dom';
import './Student.css'
import axios from 'axios'
class Student extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
        this.state = {
              redirectTo: false
        }
    }

_deleteStudent = () => {
    axios.delete('http://localhost:3001/api/students/'+this.props.student._id)
         .then(() => {
             this.setState({
                 redirectTo: true   
             }) 
         })
    }

    render() {
        const { _id, name, email, rollno } = this.props.student;
        if(this.state.redirectTo){
            return(
                <Redirect to="/students" />
            )
        }else {
            return(

                <tr>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{rollno}</td>
                    <td ><Link to={`/edit-student/${_id}`} className="edit-link"><button className="btn btn-primary">Edit</button></Link>
                    <button className="btn btn-danger" onClick={this._deleteStudent}>Delete</button>
                    </td>
                    
                </tr>
             )
        }
        
    }
}

export default Student