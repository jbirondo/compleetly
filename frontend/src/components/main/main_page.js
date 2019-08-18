import React from 'react';
import { openModal } from '../../actions/modal_actions'
import {connect} from 'react-redux';
import './mainPage.css'
import landing from "./landing.png"

class MainPage extends React.Component {
    constructor(props){
      super(props)
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
            <div className="main-page-section-features-container">
              <div className="main-page-section-kicker">
                The best of the web
              </div>
              <h2 className="main-page-section-header">
                Discover insightful sources
              </h2>
              <div className="main-page-section-features-grid-container">
                <div className="main-page-section-feature-grid-item">
                  <div className="main-page-section-feature-grid-item-picture-1">
                  </div>
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
                  <div className="main-page-section-feature-grid-item-picture-2">
                  </div>
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
                  <div className="main-page-section-feature-grid-item-picture-3">
                  </div>
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
                  <div className="main-page-section-feature-grid-item-picture-4">
                  </div>
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
                  <div className="main-page-section-feature-grid-item-picture-5">
                  </div>
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
                  <div className="main-page-section-feature-grid-item-picture-6">
                  </div>
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

          </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return{
     openModal: modal => dispatch(openModal(modal))
    }
}
export default connect(null, mapDispatchToProps)(MainPage);