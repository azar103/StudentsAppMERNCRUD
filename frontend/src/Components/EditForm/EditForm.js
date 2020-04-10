import React from 'react'
import axios from 'axios'
import { Redirect } from 'react-router'

class EditForm extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
        this.state= {
            name: '',
            email: '',
            rollno: '',
            redirectTo: false
        }
    }
    componentDidMount() {
        axios.get('http://localhost:3001/api/students/'+this.props.match.params.id).then(
            (res)  => {
                this.setState({
                    name: res.data.name,
                    email: res.data.email,
                    rollno: res.data.rollno
                })
            }
        )
    }
   _editStudent = (e) => {
       e.preventDefault()
       const student = {
           name: this.state.name,
           email: this.state.email,
           rollno: this.state.rollno
       }
       axios.put('http://localhost:3001/api/students/'+this.props.match.params.id,  student)
            .then(() =>{
                this.setState({
                    redirectTo: true
                })
            })
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
    render() {
        if(this.state.redirectTo){
            return(<Redirect to="/students"/>)
        }else {
            return(
                <form className="col-sm-8 col-sm-offset-2" onSubmit={this._editStudent}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text"  className="form-control"  onChange={this._handleChangeName} value={this.state.name}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">
                          Email
                    </label>
                    <input type="text"  className="form-control"  onChange={this._handleChangeEmail} value={this.state.email}/>
                </div>
                <div className="form-group">
                    <label htmlFor="rollno">
                          Rollno
                    </label>
                    <input type="number"  className="form-control"  onChange={this._handleChangeRollNo} value={this.state.rollno}/>
                </div>
                <button type="submit" className="btn btn-danger btn-lg">Edit Student</button>
           </form>
            )
        }
    }
}

export default EditForm