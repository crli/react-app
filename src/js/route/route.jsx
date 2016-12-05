import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';
import Index from '../components/Index';
import Menu from '../components/Menu';
import About from '../components/About';
import User from '../components/User';
import Login from '../components/Login';
import Register from '../components/Register';
import ArticleId from '../components/ArticleId.jsx';


class Main extends Component {
    render(){
        return(
            <div>{this.props.children}</div>
        )
    }
}

const route = (
    <Router history={ hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Index} />
            <Route path="Article/:id" component={ArticleId} />
            <Route path="Menu" component={Menu} />
            <Route path="About" component={About} />
            <Route path="User" component={User} />
            <Route path="Login" component={Login} />
            <Route path="Register" component={Register} />
        </Route>
    </Router>
)

export default route