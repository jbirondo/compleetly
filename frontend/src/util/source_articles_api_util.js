import axios from 'axios';

// export const fetchArticles = () => {
//     const url = 'https://newsapi.org/v2/sources?' +
//         'country=us&' +
//         'category=technology&' +
//         'apiKey=c74b69f1594f4080902981643aa178df';
//     const req = new Request(url);
//         axios(req).then(res => {
//             this.setState({ articles: res.data.sources })
// }

export const fetchArticles = req => {
    return axios(req);
}

export const fetchCategories = req => {
    return axios(req);
}



   