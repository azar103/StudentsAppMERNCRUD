import React from 'react'
import axios from 'axios'
import Student from '../Student/Student'

class ListStudents extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
        this.state = {
            students: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:3001/api/students').then((res) => {
            this.setState({
                students: res.data
            })
        })
    }
    render() {
        return(
           <table className="table table-bordered">
                  <thead>
                   <tr>      
                   <th>Name</th>
                   <th>Email</th>
                   <th>roll No</th>
                   <th>Action</th>
                   </tr>
                 </thead>
                 <tbody>
               {this.state.students.length>0 && this.state.students.map((student, index) => 
                    <Student 
                       key={index}
                       student={student}
                    />)}
                 </tbody>    

           </table>
        )
    }
}

export default ListStudents