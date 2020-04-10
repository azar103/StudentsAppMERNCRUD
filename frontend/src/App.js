import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Header from './Components/Header/Header';
import CreateForm from './Components/CreateForm/CreateForm';
import ListStudents from './Components/ListStudents/ListStudent';
import EditForm from './Components/EditForm/EditForm';

function App() {
  return (
    <Router>
    <div>
       <Header />
       <div className="container">
       <Switch>
          <Route exact path="/" component={CreateForm} />
          <Route path="/students" component={ListStudents} />
          <Route path="/new-student" component={CreateForm} />
          <Route path="/edit-student/:id" component={EditForm} />
       </Switch>
       </div> 
    </div>
    </Router>
  );
}

export default App;
