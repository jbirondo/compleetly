import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';
import LoginFormContainer from './session_form/loginform_container';
import SignUpFormContainer from './session_form/signup_form_container';
import NewsFeed from './newsfeed/news_explore';
import NewsFeedAddContent from './newsfeed_addcontent/add_content';
import TechnologyFeed from './newsfeed_addcontent/content_pages/technology';
import SportsFeed from './newsfeed_addcontent/content_pages/sports';
import ScienceFeed from './newsfeed_addcontent/content_pages/science';
import HealthFeed from './newsfeed_addcontent/content_pages/health';
import GeneralFeed from './newsfeed_addcontent/content_pages/general';
import EntertainmentFeed from './newsfeed_addcontent/content_pages/entertainment';
import BusinessFeed from './newsfeed_addcontent/content_pages/business';
import UserNavBar from "./user_nav_bar/user_nav_bar";
import SourceArticlesShow from './user_nav_bar/source_articles_show';
// import NavBarContainer from './nav/navbar_container';

import NavBarContainer from './nav_bar/nav_bar_container';
import Modal from './modal/modal'
import MainPage from './main/main_page';
import './cssreset.css';

const App = () => (
   <div>
      <Modal />
      <NavBarContainer />
      <AuthRoute path="/" component={MainPage} />
      <ProtectedRoute path="/" component={UserNavBar} />
      <Switch>
         <ProtectedRoute exact path="/newsfeed" component={NewsFeed} />
         <ProtectedRoute exact path="/newsfeed/add" component={NewsFeedAddContent} />
         <ProtectedRoute exact path="/:source/articles" component={SourceArticlesShow} />
         <ProtectedRoute exact path="/newsfeed/technology" component={TechnologyFeed} />
         <ProtectedRoute exact path="/newsfeed/science" component={ScienceFeed} />
         <ProtectedRoute exact path="/newsfeed/sports" component={SportsFeed} />
         <ProtectedRoute exact path="/newsfeed/health" component={HealthFeed} />
         <ProtectedRoute exact path="/newsfeed/general" component={GeneralFeed} />
         <ProtectedRoute exact path="/newsfeed/entertainment" component={EntertainmentFeed} />
         <ProtectedRoute exact path="/newsfeed/business" component={BusinessFeed} />
         {/* <AuthRoute exact path="/login" component={LoginFormContainer} /> */}
         {/* <AuthRoute exact path="/signup" component={SignUpFormContainer} /> */}
         {/* <AuthRoute exact path="/login" component={LoginFormContainer} />
         <AuthRoute exact path="/signup" component={SignUpFormContainer} /> */}
      </Switch>
   </div>
);


export default App;