import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom' 
import { fetchArticles } from '../../actions/source_articles_actions';
import { createReadLater } from "../../actions/read_later_actions"

class SourceArticlesShow extends React.Component {
    constructor(props) {
        super(props);
        this.articles = null;
    }

    componentDidMount() {
        // const url = 'https://newsapi.org/v2/sources?' +
        // 'country=us&' +
        // 'category=technology&' +
        // 'apiKey=c74b69f1594f4080902981643aa178df';
        // const req = new Request(url);
        // axios(req).then(res => {
        //     this.setState({ articles: res.data.sources }
        // )
        if (this.props.location.state) {
            // debugger;
            // const sourceName = this.props.match.params.source
            const sourceName = this.props.location.state.source.source
            // `sources=buzzfeed&` +
            const url = 'https://newsapi.org/v2/top-headlines?' +
            `sources=${sourceName}&` +
            'apiKey=c74b69f1594f4080902981643aa178df';
            const req = new Request(url);
            // debugger;
            this.props.fetchArticles(req)
        }
    }

    componentDidUpdate(prevProps) {
        // debugger;
        if (this.props.match.params.source !== prevProps.match.params.source) {
            const sourceName = this.props.location.state.source.source
            // `sources=buzzfeed&` +
            const url = 'https://newsapi.org/v2/top-headlines?' +
                `sources=${sourceName}&` +
                'apiKey=0fe3c7ee9aa4446d94b11b44f28c4b74';
            const req = new Request(url);
            // debugger;
            this.props.fetchArticles(req)
        }
        // this.props.history.push('/newsfeed')
    }
    
    
    render() {
        // const { source } = this.props.location.state
        // if (!source) {
            //     return null;
            // }
            // debugger;
            // if(!this.props.source || !this.props.articles) {
                //     return null;
                // }
                // debugger;
        // if (!this.props.location) {
        //     return null;
        // }
        // if (this.props.follows)
        // if (Object.values(this.props.articles).length === 0) {
        //     return null;
        // }

        this.articles = Object.values(this.props.articles);
        // debugger;
        if (this.articles.length === 0 || !this.articles) {
            return null;
        }
        
        if (this.articles.length > 0) {
            this.articles = this.articles.map((article, i) => 
            <li key={i}>{article.title} {article.author} {article.description}
            <button onClick={() => this.props.createReadLater({
                    readLaterURL: article.url,
                    readLaterDescription: article.description,
                    reader: this.props.user.id
            })}>Read Later</button></li >
            )
        }
        // debugger;
        const header = (this.articles[0]._self.props.articles[0].source) ? (<h3>{this.articles[0]._self.props.articles[0].source.name}</h3>) :
            (<h3>{this.articles[0]._self.props.articles[0].name}</h3>)
        
        return(
            
            <div>
                {header}
                
                {this.articles}
            </div>
        )
    }

};


const msp = (state, ownProps) => {
    // let follows;
    // const user = state.session.user;
    // if (!user.sourcesArray) {
    //     follows = user.followedSources.map(id => state.entities.follows[id] )
    // }

    return {
        articles: state.entities.articles,
        follows: state.entities.follows,
        user: state.session.user
    }
};

const mdp = dispatch => ({
    fetchArticles: req => dispatch(fetchArticles(req)),
    createReadLater: readLater => dispatch(createReadLater(readLater)),
});

export default withRouter(connect(msp, mdp)(SourceArticlesShow));



