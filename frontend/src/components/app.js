
// src/components/app.js

import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container';
import Modal from './modal/modal'
import MainPage from './main/main_page';

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