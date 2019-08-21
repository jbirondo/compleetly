import React from 'react';
import { withRouter, Redirect } from 'react-router';
import axios from 'axios';
import Results from './results';
import './search.css'

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            redirect: false,
            articles: []
        }
    }

    // componentDidMount() {
    //     this.setState({
    //         query: '',
    //         redirect: false,
    //         articles: [],
    //     })
    // }
    // componentDidUpdate(prevProps) {
    //     debugger;
    //     if (this.props.location.pathname !== prevProps.location.pathname) {
    //         this.setState({
    //             query: '',
    //             redirect: false,
    //             articles: []
    //         })
    //     }
    // }

    getInfo = (e) => {
        e.preventDefault();
        const url = 'https://newsapi.org/v2/everything?' +
            'language=en&' +
            `q=${this.state.query}&` +
            'apiKey=e7cee6371dc3402f80bc03f623f8c410';
        const req = new Request(url);
        // debugger;
        axios(req).then(({data}) => {
            // debugger
            // let articles = data.articles;
            // return <Redirect to={{
            //     pathname: '/searchresults',
            //     state: { articles }
            // }}
            // />
            this.props.history.push({pathname: `/searchresults/${this.state.query}`, state: {articles: data.articles}})
            
            
            // debugger;
            // this.setState({
                //     results: data.articles,
                //     redirect: true,
                // })
                // return <Results results={data.articles} />
                // let resultData = data.articles;        
        })
        // this.setState({ query: ''})
        // .then(() => {
        //     this.setState({
        //         query: '',
        //         redirect: false,
        //         articles: [],
        //     })
        // })
        // let articles = this.state.articles
        // <Redirect to={{
        //             pathname: '/searchresults',
        //             state: { articles }
        //         }}
        //     />
    }

    // // this.articles = null;
    // const url = 'https://newsapi.org/v2/sources?' +
    //     'country=us&' +
    //     'category=business&' +
    //     'apiKey=0fe3c7ee9aa4446d94b11b44f28c4b74';
    // const req = new Request(url);
    //     this.props.fetchCategories(req).then(res =>
    //     this.setState({ articles: this.props.articles })
    // );

    update = (e) => {
        this.setState({
            query: this.search.value,
            articles: []
        }) 
        // if (e.key === 'Enter') {
        //     this.setState({ query: '' })
        // }
        // () => {
        //     if (this.state.query && this.state.query.length > 1) {
        //         if (this.state.query.length % 2 === 0) {
        //             this.getInfo()
        //         }
        //     } else if (!this.state.query) {
        //     }
        // })
    }

    // handleKeyPress = (e) => {
    //     e.preventDefault();
    //     if (e.key === 'Enter') {
    //         this.setState({query: ''})
    //     }
    // }

    // handleSubmit = (e) => {

    // }

    render() {
        // debugger;

        // const { redirect } = this.state;
        
        // debugger;
        return (
            <form 
            onSubmit={this.getInfo}>
                <input
                    className="upper-nav-search-bar"
                    placeholder='Search for...'
                    ref={input => this.search = input}
                    onChange={this.update}
                    onKeyPress={this.handleKeyPress}
                />
            </form>
        )
    }
}

export default withRouter(Search)