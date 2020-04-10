import React from 'react'
import axios from 'axios'
import { Redirect } from 'react-router'

class CreateForm extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            rollno: '',
            redirectTo: false
        }
    }
    _handleChangeName = (e) => {
         this.setState({
             name: e.target.value
         })
    }

    _handleChangeEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    _handleChangeRollNo = (e) => {
        this.setState({
            rollno: e.target.value
        })
    }

    _postStudent = (e) => {
        e.preventDefault();
        const student= {
            name: this.state.name,
            email: this.state.email,
            rollno: this.state.rollno
        }
        axios.post('http://localhost:3001/api/students', student)
             .then(() => {
                 this.setState({
                     redirectTo: true
                 })
             })

       this.setState({
           name: '',
           email: '',
           rollno: ''
       })      
    }

    render() {
        if(this.state.redirectTo){
            return(<Redirect to="/students"/>)
        }else {
            return(
                <form className="col-sm-8 col-sm-offset-2" onSubmit={this._postStudent}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text"  className="form-control" value={this.state.name} onChange={this._handleChangeName}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">
                          Email
                    </label>
                    <input type="text"  className="form-control" value={this.state.email} onChange={this._handleChangeEmail}/>
                </div>
                <div className="form-group">
                    <label htmlFor="rollno">
                          Rollno
                    </label>
                    <input type="number"  className="form-control" value={this.state.rollno} onChange={this._handleChangeRollNo}/>
                </div>
                <button type="submit" className="btn btn-danger btn-lg">Create Student</button>
           </form>
            )
        }
       
    }
}

export default CreateForm