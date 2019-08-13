import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';
import LoginFormContainer from './loginform/loginform_container';
import SignUpFormContainer from './loginform/signup_form_container';
import NewsFeed from './newsfeed/news_explore';
import NewsFeedAddContent from './newsfeed_addcontent/add_content';
import TechnologyFeed from './newsfeed_addcontent/content_pages/technology';
import SportsFeed from './newsfeed_addcontent/content_pages/sports';
import ScienceFeed from './newsfeed_addcontent/content_pages/science';
import HealthFeed from './newsfeed_addcontent/content_pages/health';
import GeneralFeed from './newsfeed_addcontent/content_pages/general';
import EntertainmentFeed from './newsfeed_addcontent/content_pages/entertainment';
import BusinessFeed from './newsfeed_addcontent/content_pages/business';
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
         <Route exact path="/newsfeed/add" component={NewsFeedAddContent} />
         <Route exact path="/newsfeed/technology" component={TechnologyFeed} />
         <Route exact path="/newsfeed/science" component={ScienceFeed} />
         <Route exact path="/newsfeed/sports" component={SportsFeed} />
         <Route exact path="/newsfeed/health" component={HealthFeed} />
         <Route exact path="/newsfeed/general" component={GeneralFeed} />
         <Route exact path="/newsfeed/entertainment" component={EntertainmentFeed} />
         <Route exact path="/newsfeed/business" component={BusinessFeed} />
         <AuthRoute exact path="/login" component={LoginFormContainer} />
         <AuthRoute exact path="/signup" component={SignUpFormContainer} />
         {/* <AuthRoute exact path="/login" component={LoginFormContainer} />
         <AuthRoute exact path="/signup" component={SignupFormContainer} /> */}
      </Switch>
   </div>
);


export default App;