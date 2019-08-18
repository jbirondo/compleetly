import { connect } from 'react-redux';
import News from './news_explore';
import { createReadLater } from "../../../actions/read_later_actions"
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('0fe3c7ee9aa4446d94b11b44f28c4b74')

const msp = state => {
    return {
    user: state.session.user
    }
}

const mdp = dispatch => ({
    createReadLater: user => dispatch(createReadLater(user)),
})

export default connect(msp, mdp)(News)