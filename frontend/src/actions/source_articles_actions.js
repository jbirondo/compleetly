import * as APIUtil from '../util/source_articles_api_util';

export const RECEIVE_CURRENT_ARTICLES = "RECEIVE_CURRENT_ARTICLES";
export const RECEIVE_ARTICLE_ERRORS = "RECEIVE_ARTICLE_ERRORS";
export const RECEIVE_CATEGORY_ARTICLES = "RECEIVE_CATEGORY_ARTICLES";

// const url = 'https://newsapi.org/v2/sources?' +
//     'country=us&' +
//     'category=technology&' +
//     'apiKey=c74b69f1594f4080902981643aa178df';
// const req = new Request(url);
// axios(req).then(res => {
//     this.setState({ articles: res.data.sources })

export const receiveErrors = errors => ({
    type: RECEIVE_ARTICLE_ERRORS,
    errors
});

export const receiveCurrentArticles = articles => ({
    type: RECEIVE_CURRENT_ARTICLES,
    articles
})
export const receiveCategoryArticles = articles => ({
    type: RECEIVE_CATEGORY_ARTICLES,
    articles
})

export const fetchArticles = req => dispatch => {
    return APIUtil.fetchArticles(req).then(res => {
        dispatch(receiveCurrentArticles(res))    //might need to change res.data?
    })
        .catch(err => dispatch(receiveErrors(err.response.json)))
}

export const fetchCategories = req => dispatch => {
    return APIUtil.fetchCategories(req).then(res => {
        dispatch(receiveCategoryArticles(res))    //might need to change res.data?
    })
        .catch(err => dispatch(receiveErrors(err.response.json)))
}