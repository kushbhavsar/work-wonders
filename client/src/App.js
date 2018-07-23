import React, { Component } from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Register from './pages/Register';
import BidAuction from './pages/BidAuction';
import Postpage from './pages/Postpage';
import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';
import Bidpage from './pages/Bidpage'


class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser (userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/users/login').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }

  render() {
    return (
      <div className="App">
   
        <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
        {/* greet user if logged in: */}
        {this.state.loggedIn &&
          <p>Join the party, {this.state.username}!</p>
        }
        {/* Routes to different components */}
        <Route
          exact path="/"
          component={Home} />
        <Route
          path="/login"
          render={() =>
            <LoginForm
              updateUser={this.updateUser}
            />}
        />
        <Route
          exact path = "/register" 
          component = {Register}
        />
        
        < Route  exact path = "/bidauction"
         component = {BidAuction}
         /> 
         < Route  exact path = "/postpage"
          component = {Postpage}
          /> 
          < Route  exact path = "/bidpage"
         component = {Bidpage}
         /> 
      </div>
    );
  }
}


// const App = () => (

//   <Router>
//         <div >
//           <Switch>
//             < Route  exact path="/" component = {Home}/>
//             < Route  exact path = "/postpage" component = {Postpage}/> 
//             < Route  exact path = "/register" component = {Register}/>
//             < Route  exact path = "/bidauction" component = {BidAuction}/> 
//           </Switch>
//         </div>

//   </Router>

// );
export default App;
