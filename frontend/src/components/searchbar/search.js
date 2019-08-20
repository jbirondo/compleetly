import React from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';
import Results from './results';

class Search extends React.Component {
    state = {
        query: '',
        results: []
    }

    getInfo = () => {
        const url = 'https://newsapi.org/v2/everything?' +
            `q=${this.state.query}&` +
            'apiKey=0fe3c7ee9aa4446d94b11b44f28c4b74';
        const req = new Request(url);
        axios(req).then(({data}) => {
            // debugger;
            this.setState({
                results: data.articles
            })
        })
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

    update = () => {
        this.setState({
            query: this.search.value
        }) 
        // () => {
        //     if (this.state.query && this.state.query.length > 1) {
        //         if (this.state.query.length % 2 === 0) {
        //             this.getInfo()
        //         }
        //     } else if (!this.state.query) {
        //     }
        // })
    }

    // handleSubmit = (e) => {

    // }

    render() {
        return (
            <form>
                <input
                    placeholder='Search for...'
                    ref={input => this.search = input}
                    // onChange={this.update}
                    onKeyPress={(e) => {(e.key === 'Enter' ? this.getInfo() : this.update())}}
                />
                <Results results={this.state.results} />
            </form>
        )
    }
}

export default withRouter(Search)