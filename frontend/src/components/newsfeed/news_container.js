import { connect } from 'react-redux';
import News from './news_explore';
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('c74b69f1594f4080902981643aa178df')

const msp = state => ({

})

const mdp = dispatch => ({



})

export default connect(msp, mdp)(News)