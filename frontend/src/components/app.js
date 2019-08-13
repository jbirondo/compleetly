
// src/components/app.js

import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';
// import LoginFormContainer from './session_form/loginform_container';
// import SignUpFormContainer from './session_form/signup_form_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import Modal from './modal/modal'
import MainPage from './main/main_page';
// import LoginFormContainer from './session/login_form_container';
// import SignupFormContainer from './session/signup_form_container';

const App = () => (
   <div>
      <Modal />
      <NavBarContainer />
      <Switch>
         <Route exact path="/" component={MainPage} />
         {/* <AuthRoute exact path="/login" component={LoginFormContainer} />
         <AuthRoute exact path="/signup" component={SignUpFormContainer} /> */}
      </Switch>
   </div>
);

export default App;