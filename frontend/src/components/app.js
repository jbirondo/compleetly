import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';
import LoginFormContainer from './loginform/loginform_container';
import SignUpFormContainer from './loginform/signup_form_container';
import NewsFeed from './newsfeed/news_explore'
// import NavBarContainer from './nav/navbar_container';

import MainPage from './main/main_page';
// import LoginFormContainer from './session/login_form_container';
// import SignupFormContainer from './session/signup_form_container';

const App = () => (
   <div>
      {/* <NavBarContainer /> */}
      <Switch>
         <Route exact path="/" component={MainPage} />
         <Route exact path="/newsfeed" component={NewsFeed} />
         <AuthRoute exact path="/login" component={LoginFormContainer} />
         <AuthRoute exact path="/signup" component={SignUpFormContainer} />
         {/* <AuthRoute exact path="/login" component={LoginFormContainer} />
         <AuthRoute exact path="/signup" component={SignupFormContainer} /> */}
      </Switch>
   </div>
);

export default App;