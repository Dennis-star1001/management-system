
import { Box } from '@chakra-ui/react';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import Attendance from './Attendance';
import Employees from './Employees';
import Login from './Login';
import popup from './popup';
function App() {
  return (
    <Router>
      <Box>
        <Switch>
          <Route path='/' exact component={Login}/>
          <Route path='/Dashboard' component={Dashboard}/>
          <Route path='/Attendance' component={Attendance}/>
          <Route path='/Employees' component={Employees}/>
          <Route path='/popup' component={popup}/>
        </Switch>
      </Box>
    </Router>
  );
}

export default App;
