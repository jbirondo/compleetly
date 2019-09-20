import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NewsFeed from './newsfeed/news_explore';
import NewsFeedAddContent from './newsfeed_addcontent/add_content_container';
import TechnologyFeed from './newsfeed_addcontent/content_pages/technology';
import SportsFeed from './newsfeed_addcontent/content_pages/sports';
import ScienceFeed from './newsfeed_addcontent/content_pages/science';
import HealthFeed from './newsfeed_addcontent/content_pages/health';
import GeneralFeed from './newsfeed_addcontent/content_pages/general';
import EntertainmentFeed from './newsfeed_addcontent/content_pages/entertainment';
import BusinessFeed from './newsfeed_addcontent/content_pages/business';
import UserNavBar from "./user_nav_bar/user_nav_bar";
import SourceArticlesShow from './user_nav_bar/source_articles_show';
import ReadLater from "./read_later/read_later";
import NavBarContainer from './nav_bar/nav_bar_container';
import Modal from './modal/modal'
import MainPage from './main/main_page';
import Results from './searchbar/results'; 
import {filters} from './newsfeed/filters';
import './cssreset.css';

const App = () => (
   <div>
      <Modal />
      <NavBarContainer />
      <div className="main-page-container">
            <AuthRoute path="/" component={MainPage} />
            <ProtectedRoute path="/" component={UserNavBar} />
         <div className="main-content-container">
            <Switch>
               <ProtectedRoute exact path="/:user_id/read_later" component={ReadLater} />
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
               <ProtectedRoute path="/searchresults/:search" component={Results} />
               <ProtectedRoute exact path="/:user_id/filters" component={filters}/>
               {/* <AuthRoute exact path="/login" component={LoginFormContainer} /> */}
               {/* <AuthRoute exact path="/signup" component={SignUpFormContainer} /> */}
               {/* <AuthRoute exact path="/login" component={LoginFormContainer} />
               <AuthRoute exact path="/signup" component={SignUpFormContainer} /> */}
            </Switch>
         </div>
      </div>
   </div>
);


export default App;