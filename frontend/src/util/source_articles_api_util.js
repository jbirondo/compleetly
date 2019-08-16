import axios from 'axios';

// export const fetchArticles = () => {
//     const url = 'https://newsapi.org/v2/sources?' +
//         'country=us&' +
//         'category=technology&' +
//         'apiKey=0fe3c7ee9aa4446d94b11b44f28c4b74';
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



   