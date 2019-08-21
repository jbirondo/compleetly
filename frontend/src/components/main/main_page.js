import React from 'react';
import { withRouter } from 'react-router';
import { openModal } from '../../actions/modal_actions'
import {connect} from 'react-redux';
import './mainPage.css'

import landing from "./landing.png"

import newyorktimes from './icons/new-york-times-icon.png'
import techcrunch from './icons/techcrunch-icon.png'
import youtube from './icons/youtube-icon.png'
import google from './icons/google-icon.png'
import twitter from './icons/twitter-icon.png'
import rss from './icons/rss-feed-icon.png'

import organize from './icons/organize-icon.png'
import read from './icons/read-icon.png'
import search from './icons/search-icon.png'
import readlater from './icons/read-later-icon.png'
import share from './icons/share-icon.png'
import discover from './icons/discover-icon.png'

import sharedfeeds from './icons/shared-feeds-icon.png'
import sharedboards from './icons/shared-boards-icon.png'
import evernote from './icons/evernote-icon.png'
import onenote from './icons/one-note-365-icon.png'
import trello from './icons/trello-icon.png'
import slack from './icons/slack-icon.png'



class MainPage extends React.Component {
    constructor(props){
      super(props)

      this.disableWarning = null;
    }

    render() {
        return (
          <div className="main-page-container">

              <div className="main-page-header-container">
                <h1 className="main-page-header">
                  Where readers become leaders
                  <div className="main-page-sub-header">
                    Keep up with all the topics that matter to you. All in one place.
                  </div>
                </h1>
                <button className="main-page-sign-up-button" 
                onClick={() => this.props.openModal("signup")}>
                  Get started for free
                </button>
              </div>

              <div className="main-page-landing-img-container">
                <img src={landing} className="main-page-landing-img" alt=""/> 
              </div>



            <div className="main-page-section-features-container feature-1">
                <div className="main-page-section-kicker">
                  The best of the web
                </div>
                <h2 className="main-page-section-header">
                  Discover insightful sources
                </h2>
              <div className="main-page-section-features-grid-container">
                <div className="main-page-section-feature-grid-item">
                  <img alt=" " src={newyorktimes} className="main-page-section-feature-grid-item-picture-1" />
                  <div className="main-page-section-feature-grid-item-content-1">
                    <div className="grid-item-header-1">
                      Publications
                    </div>
                    <div className="grid-item-description-1">
                      Don't miss a beat from New York Times or any other industry journal you trust
                    </div>
                  </div>
                </div>
                <div className="main-page-section-feature-grid-item">
                  <img alt=" " src={techcrunch} className="main-page-section-feature-grid-item-picture-2"/>
                  <div className="main-page-section-feature-grid-item-content-2">
                    <div className="grid-item-header-2">
                      Blogs
                    </div>
                    <div className="grid-item-description-2">
                      Dive deeper by following blogs from the latest movers, shakers, and thinkers
                    </div>
                  </div>
                </div>
                <div className="main-page-section-feature-grid-item">
                  <img alt=" " src={youtube}className="main-page-section-feature-grid-item-picture-3"/>
                  <div className="main-page-section-feature-grid-item-content-3">
                    <div className="grid-item-header-3">
                      YouTube Channels
                    </div>
                    <div className="grid-item-description-3">
                      See new videos from the YouTube channels you follow
                    </div>
                  </div>
                </div>
                <div className="main-page-section-feature-grid-item">
                  <img alt=" " src={google} className="main-page-section-feature-grid-item-picture-4"/>
                  <div className="main-page-section-feature-grid-item-content-4">
                    <div className="grid-item-header-4">
                      Keyword Alerts
                    </div>
                    <div className="grid-item-description-4">
                      Monitor news about your company, your product, your craft, and your competitors
                    </div>
                  </div>
                </div>
                <div className="main-page-section-feature-grid-item">
                  <img alt=" " src={twitter} className="main-page-section-feature-grid-item-picture-5"/>
                  <div className="main-page-section-feature-grid-item-content-5">
                    <div className="grid-item-header-5">
                      Tweets
                    </div>
                    <div className="grid-item-description-5">
                      Follow your favorite twitter influencer or hashtag and never miss crucial updates
                    </div>
                  </div>
                </div>
                <div className="main-page-section-feature-grid-item">
                  <img alt=" " src={rss} className="main-page-section-feature-grid-item-picture-6"/>
                  <div className="main-page-section-feature-grid-item-content-6">
                    <div className="grid-item-header-6">
                      RSS Feeds
                    </div>
                    <div className="grid-item-description-6">
                      Follow anyone on the Web who publishes an RSS feed
                    </div>
                  </div>
                </div>
              </div>
            </div>



            <div className="main-page-section-features-container feature-2">
              <div className="main-page-section-kicker">
                Cut the noise
              </div>
              <h2 className="main-page-section-header">
                Never miss important stories
              </h2>
              <div className="main-page-section-features-grid-container">
                <div className="main-page-section-feature-grid-item">
                  <img alt=" " src={organize} className="main-page-section-feature-grid-item-picture-1" />
                  <div className="main-page-section-feature-grid-item-content-1">
                    <div className="grid-item-header-1">
                      Organize
                    </div>
                    <div className="grid-item-description-1">
                      Let the web work for you by arranging the content you rely on into easy-to-read feeds.
                    </div>
                  </div>
                </div>
                <div className="main-page-section-feature-grid-item">
                  <img alt=" " src={read} className="main-page-section-feature-grid-item-picture-2" />
                  <div className="main-page-section-feature-grid-item-content-2">
                    <div className="grid-item-header-2">
                      Read
                    </div>
                    <div className="grid-item-description-2">
                      Compleetly offers a clean, minimalist reading experience optimized for productivity.                    </div>
                  </div>
                </div>
                <div className="main-page-section-feature-grid-item">
                  <img alt=" " src={search} className="main-page-section-feature-grid-item-picture-3" />
                  <div className="main-page-section-feature-grid-item-content-3">
                    <div className="grid-item-header-3">
                      Search
                    </div>
                    <div className="grid-item-description-3">
                      Delve into the specific articles that interest you within your Compleetly or within a specific publication.
                    </div>
                  </div>
                </div>
                <div className="main-page-section-feature-grid-item">
                  <img alt=" " src={readlater} className="main-page-section-feature-grid-item-picture-4" />
                  <div className="main-page-section-feature-grid-item-content-4">
                    <div className="grid-item-header-4">
                      Read Later
                    </div>
                    <div className="grid-item-description-4">
                      Save articles and easily get back to them. Tag with Compleetly or use favorite web services like Evernote, Pocket, and Instapaper.
                    </div>
                  </div>
                </div>
                <div className="main-page-section-feature-grid-item">
                  <img alt=" " src={share} className="main-page-section-feature-grid-item-picture-5" />
                  <div className="main-page-section-feature-grid-item-content-5">
                    <div className="grid-item-header-5">
                      Share
                    </div>
                    <div className="grid-item-description-5">
                      Easily share articles to Facebook, Twitter, LinkedIn, Pinterest, email, and more. Schedule posts with Hootsuite or Buffer.
                    </div>
                  </div>
                </div>
                <div className="main-page-section-feature-grid-item">
                  <img alt=" " src={discover} className="main-page-section-feature-grid-item-picture-6" />
                  <div className="main-page-section-feature-grid-item-content-6">
                    <div className="grid-item-header-6">
                      Discover
                    </div>
                    <div className="grid-item-description-6">
                      Discover fresh, authoritative voices on niche and broad topics alike. Channel the mainstream or pull from the diamonds in the rough.
                    </div>
                  </div>
                </div>
              </div>
            </div>



            <div className="main-page-section-features-container feature-3">
              <div className="main-page-section-kicker">
                Smarter together
              </div>
              <h2 className="main-page-section-header">
                Collaborate with your teammates
              </h2>
              <div className="main-page-section-features-grid-container">
                <div className="main-page-section-feature-grid-item">
                  <img alt=" " src={sharedfeeds} className="main-page-section-feature-grid-item-picture-1" />
                  <div className="main-page-section-feature-grid-item-content-1">
                    <div className="grid-item-header-1">
                      Shared Feeds
                    </div>
                    <div className="grid-item-description-1">
                      Choose to share what you read with colleagues and networks. Discover what other thought leaders and teammates read.
                    </div>
                  </div>
                </div>
                <div className="main-page-section-feature-grid-item">
                  <img alt=" " src={sharedboards} className="main-page-section-feature-grid-item-picture-2" />
                  <div className="main-page-section-feature-grid-item-content-2">
                    <div className="grid-item-header-2">
                      Shared Boards
                    </div>
                    <div className="grid-item-description-2">
                      Work with your teammates to curate, comment, and prioritize the best articles about specific topics and ideas.
                    </div>
                  </div>
                </div>
                <div className="main-page-section-feature-grid-item">
                  <img alt=" " src={evernote} className="main-page-section-feature-grid-item-picture-3" />
                  <div className="main-page-section-feature-grid-item-content-3">
                    <div className="grid-item-header-3">
                      Evernote Business
                    </div>
                    <div className="grid-item-description-3">
                      Streamline your curation efforts by saving articles to shared Evernote business notebooks.
                    </div>
                  </div>
                </div>
                <div className="main-page-section-feature-grid-item">
                  <img alt=" " src={onenote} className="main-page-section-feature-grid-item-picture-4" />
                  <div className="main-page-section-feature-grid-item-content-4">
                    <div className="grid-item-header-4">
                      OneNote 365
                    </div>
                    <div className="grid-item-description-4">
                      Fuel your thoughts, ideas, and to-do's with articles to give you a leg up at work, home, and school.
                    </div>
                  </div>
                </div>
                <div className="main-page-section-feature-grid-item">
                  <img alt=" " src={trello} className="main-page-section-feature-grid-item-picture-5" />
                  <div className="main-page-section-feature-grid-item-content-5">
                    <div className="grid-item-header-5">
                      Trello
                    </div>
                    <div className="grid-item-description-5">
                      Enrich your projects, cards, and teams with timely content.
                    </div>
                  </div>
                </div>
                <div className="main-page-section-feature-grid-item">
                  <img alt=" " src={slack} className="main-page-section-feature-grid-item-picture-6" />
                  <div className="main-page-section-feature-grid-item-content-6">
                    <div className="grid-item-header-6">
                      Slack
                    </div>
                    <div className="grid-item-description-6">
                      Empower your teams with articles as they happen and spark insightful conversations.
                    </div>
                  </div>
                </div>
              </div>
            </div >

            <div className="main-page-footer-container">
              <h2 className="main-page-footer-header">
                Where readers become leaders
                <div className="main-page-footer-subheader">
                  Keep up with all the topics that matter to you. All in one place.
                </div>
              </h2>
              <button className="main-page-sign-up-button footer-button"
                onClick={() => this.props.openModal("signup")}>
                Get started for free
                </button>
              <div className="main-page-footer-top-link">
                Discover Compleetly's top blogs and websites
              </div>
            </div>
          </div>
        );
    }
}



// export default withRouter(MainPage);
const mapDispatchToProps = dispatch => {
    return{
     openModal: modal => dispatch(openModal(modal))
    }
}
export default withRouter(connect(null, mapDispatchToProps)(MainPage));
