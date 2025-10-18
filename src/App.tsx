import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Dashboard from './components/Dashboard';
import RentManagement from './components/RentManagement';
import Communication from './components/Communication';
import Payments from './components/Payments';
import Notifications from './components/Notifications';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={Profile} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/rent-management" component={RentManagement} />
        <Route path="/communication" component={Communication} />
        <Route path="/payments" component={Payments} />
        <Route path="/notifications" component={Notifications} />
      </Switch>
    </Router>
  );
};

export default App;