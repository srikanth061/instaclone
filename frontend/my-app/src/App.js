import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
// import history from "./utils/history";
import HomePage from "./components/HomePage";
import Posts from "./components/Posts";
import PrivateRoute from './utils/PrivateRoute';
import Createpost from './components/create';


function App() {
  return (
    <Router >
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <PrivateRoute exact path="/posts" component={Posts}/>
      <Route exact path="/posts/Createpost" component={Createpost}/>
    </Switch>
    </Router>
  );
}

export default App;
