import React from 'react';
import Home from './Home/Home';
import TattooPage from './TattooPage/TattooPage';
import BodyPiercers from './BodyPiercers/BodyPiercers';
import Events from './Events/Events';
import Profile from './Profile/Profile';
import Auth from './Auth/Auth';
import Dashboard from './Dashboard/Dashboard';

import { isAuthenticated } from "../../utils/authCalls";
import { withRouter } from "react-router";
import { Route, Switch, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Comp, destination, path, ...rest }) => {
  return (
    <Route
      path={path}
      {...rest}
      render={props => {
        return isAuthenticated() ? (
          <Comp {...props} />
        ) : (
          <Redirect
            to={{pathname: `/login`}}
          />
        );
      }}
    />
  );
};

class Main extends React.Component {
  componentDidUpdate(nextProps) {
    if (nextProps.location.pathname !== this.props.location.pathname) {
      window.location.reload();
    }

    window.scrollTo(0, 0);
  }

  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/login" component={Auth}/>

          <Route exact path="/" component={Home}/>

          <Route exact path='/tatuadores' component={TattooPage}/>

          <Route exact path='/body-piercers' component={BodyPiercers}/>

          <Route exact path='/eventos' component={Events}/>

          <Route exact path='/artistas/:artist_slug' component={Profile}/>

          <ProtectedRoute exact path='/dashboard' component={Dashboard}/>
        </Switch>
      </main>
    );
  }
}

export default withRouter(Main);
