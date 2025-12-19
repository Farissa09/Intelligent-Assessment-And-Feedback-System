import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import TestAssessment from './pages/TestAssessment';
import ResultAnalysis from './pages/ResultAnalysis';
import Notifications from './pages/Notifications';
import './styles/globals.css';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/test-assessment" component={TestAssessment} />
        <Route path="/result-analysis" component={ResultAnalysis} />
        <Route path="/notifications" component={Notifications} />
      </Switch>
    </Router>
  );
};

export default App;