import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { fetchCategories } from '../../../actions/source_articles_actions';
import { createFollow, deleteFollow } from '../../../actions/follow_actions';
import Articles from './articles';

// const NewsAPI = require('newsapi');
// const newsapi = new NewsAPI('0fe3c7ee9aa4446d94b11b44f28c4b74');

class GeneralFeed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: []
        }
    };

    componentDidMount() {
        // this.getArticles();
        // this.articles = null;
        const url = 'https://newsapi.org/v2/sources?' +
            'country=us&' +
            'category=general&' +
            'apiKey=e7cee6371dc3402f80bc03f623f8c410';
        const req = new Request(url);
        this.props.fetchCategories(req).then(res =>
            this.setState({articles: this.props.articles}));
    }

    render() {

        let articles;
        if ((this.state.articles.length === 0) || !this.props.follows) {
            return null;
        } else {
            articles = <Articles articles={this.state.articles} propFollows={this.props.follows} />
        }

        return ( // article componenet that only receives articles as props, only render this component if I have these props. have render component do NO fetching logic
            // only pass articles to render component when I have successfully fetched
            <div>
                {articles}
            </div>
        )
    }
}

const msp = state => ({
    // errors: state.errors.follows // don't have error reducers set up
    currentUserId: state.session.user.id,
    currentUser: state.session.user,
    follows: state.entities.follows,
    articles: state.entities.articles,
    entities: state.entities
})

const mdp = dispatch => ({
    createFollow: follow => dispatch(createFollow(follow)),
    fetchCategories: req => dispatch(fetchCategories(req)),
    deleteFollow: follow => dispatch(deleteFollow(follow))
})

export default withRouter(connect(msp, mdp)(GeneralFeed));
