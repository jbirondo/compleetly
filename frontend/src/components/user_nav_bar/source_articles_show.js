import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom' 
import { fetchArticles } from '../../actions/source_articles_actions';
<<<<<<< HEAD
import { createReadLater } from "../../actions/read_later_actions"
=======
import './source_articles_show.css';
>>>>>>> styling

class SourceArticlesShow extends React.Component {
    constructor(props) {
        super(props);
        // this.articles = null;
        this.state = {
            articles: []
        }
    }

    componentDidMount() {
        // const url = 'https://newsapi.org/v2/sources?' +
        // 'country=us&' +
        // 'category=technology&' +
        // 'apiKey=0fe3c7ee9aa4446d94b11b44f28c4b74';
        // const req = new Request(url);
        // axios(req).then(res => {
        //     this.setState({ articles: res.data.sources }
        // )
        if (this.props.location.state) {
            // const sourceName = this.props.match.params.source
            const sourceName = this.props.location.state.source.source
            // `sources=buzzfeed&` +
            const url = 'https://newsapi.org/v2/top-headlines?' +
            `sources=${sourceName}&` +
            'apiKey=0fe3c7ee9aa4446d94b11b44f28c4b74';
            const req = new Request(url);
            // debugger;
            this.props.fetchArticles(req).then(res => {
                // debugger;
                this.setState({articles: Object.values(this.props.articles)})})
        }
    }

    componentDidUpdate(prevProps) {
        // debugger;
        // this.articles = null;
        if (this.props.match.params.source !== prevProps.match.params.source) {
            const sourceName = this.props.location.state.source.source
            // `sources=buzzfeed&` +
            const url = 'https://newsapi.org/v2/top-headlines?' +
                `sources=${sourceName}&` +
                'apiKey=0fe3c7ee9aa4446d94b11b44f28c4b74';
            const req = new Request(url);
            // debugger;
            this.props.fetchArticles(req).then(res =>
                this.setState({ articles: Object.values(this.props.articles)}))
        }
        // this.props.history.push('/newsfeed')
    }
    
    
    render() {
        // const { source } = this.props.location.state
        // if (!source) {
            //     return null;
            // }
            // if(!this.props.source || !this.props.articles) {
                //     return null;
                // }
        // if (!this.props.location) {
        //     return null;
        // }
        // if (this.props.follows)
        // if (Object.values(this.props.articles).length === 0) {
        //     return null;
        // }

        // this.articles = Object.values(this.props.articles);
        let articles;
        articles = this.state.articles;
        // debugger;
        if (this.state.articles.length === 0) {
            return null;
        }
        
<<<<<<< HEAD
        if (articles.length > 0) {
            articles = articles.map((article, i) => 
            <li key={i}>{article.title} {article.author} {article.description}
                    <button onClick={() => this.props.createReadLater({
                        readLaterURL: article.url,
                        readLaterDescription: article.description,
                        reader: this.props.user.id
                    })}>Read Later</button></li >
            )
        }
        // debugger;
        // const header = (this.state.articles[0]._self.props.articles[0].source) ? (<h3>{this.state.articles[0]._self.props.articles[0].source.name}</h3>) :
        //     (<h3>{this.state.articles[0]._self.props.articles[0].name}</h3>)
        const header = <h3>{this.state.articles[0].source.name}</h3>
=======
        if (this.articles.length > 0) {
            
            
            this.articles = this.articles.map((article, i) => {
                let image;
                if (article.urlToImage) {
                    image = <img alt={article.title} className='news-explore-img' src={article.urlToImage} />
                } else {
                    image = <img alt='stock-photograph' className='news-explore-img' src='https://images.unsplash.com/photo-1504465039710-0f49c0a47eb7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80' />
                }
    
                let author;
                if (article.author) {
                    author = <h3 className='news-explore-author'>by {article.author}</h3>
                } else {
                    author = <div></div>
                }
    
                let description;
                if (article.description === null) {
                    description = <p className='news-explore-content'>{article.content}</p>
                } else if (article.description.length > 100) {
                    description = <p className='news-explore-content'>{article.description}</p>
                } else if (article.content === null) {
                    description = <p className='news-explore-content'>{article.description}</p>
                } else if (article.content.includes('+')) {
                    description = <p className='news-explore-content'>{article.content.slice(0, -14)}</p>
                } else {
                    description = <p className='news-explore-content'>{article.content}</p>
                }            

                return (
                    <li key={i} className='news-explore-li'>
                        <a target='_blank' href={article.url} className='a-tag'>
                            <div className='img-div'>
                                {image}
                            </div>
                            <div className='title-author-desc-div-show'>
                                <h2 className='article-title'>{article.title}</h2>
                                {author}
                                {description}
                            </div>
                        </a>
                    </li>
                )
            })
        }
        // debugger;
        const header = (this.articles[0]._self.props.articles[0].source) ? (<a className='source-title' target='_blank' href={this.props.location.state.source.followURL}>{this.articles[0]._self.props.articles[0].source.name}</a>) :
            (<a className='source-title' target='_blank' href={this.props.location.state.source.followURL}>{this.articles[0]._self.props.articles[0].name}</a>)
        
>>>>>>> styling
        return(
      
            <div>
                {header}
<<<<<<< HEAD
                
                {articles}
=======
                <p className='bottom-border'></p>
                {this.articles}
>>>>>>> styling
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



