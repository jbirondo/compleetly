import { connect } from 'react-redux';
import News from './news_explore';
import { createReadLater } from "../../../actions/read_later_actions"
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('c74b69f1594f4080902981643aa178df')

const msp = state => {
    return {
    user: state.session.user
    }
}

const mdp = dispatch => ({
    createReadLater: user => dispatch(createReadLater(user)),
})

export default connect(msp, mdp)(News)