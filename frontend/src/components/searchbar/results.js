import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { createReadLater } from "../../actions/read_later_actions";
import { deleteReadLater } from "../../actions/read_later_actions";
import addreadlatericon from '../user_nav_bar/icons/add-read-later-icon.png'


class Results extends React.Component {
  constructor(props) {
    super(props);

    this.readLater = null;
    this.state = {
      warningDestroyer: null
    };
  }

  isIncluded(article) {
    // debugger;
    for (let i = 0; i < this.props.user.readLater.length; i++) {
      if (
        this.props.user.readLater[i].readLaterURL === article.url
      ) {
        this.readLater = this.props.user.readLater[i];
        return true;
      }
    }
    return false;
  }

  render() {
    // debugger;
    // if (!this.props.location.state) {
    //     return null;
    // }
    // debugger;
    
    const options = this.props.location.state.articles.map((res, i) => {
      // debugger
      let image;
      if (res.urlToImage) {
        image = (
          <img
            alt={res.title}
            className="news-explore-img"
            src={res.urlToImage}
          />
        );
      } else {
        image = (
          <img
            alt="stock-photograph"
            className="news-explore-img"
            src="https://images.unsplash.com/photo-1560177112-fbfd5fde9566?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
          />
        );
      }

      let readLaterButton;
      // debugger;
      readLaterButton = !this.isIncluded(res) ? (
        <button
          onClick={() =>
            this.props.createReadLater({
              readLaterURL: res.url,
              readLaterName: res.source.name,
              readLaterDescription: res.description,
              reader: this.props.user.id
            })
          }
          className="source-read-later-button"
        >
          <i className="far fa-bookmark add-source-read-later-icon"></i>
          {/* <img
                        src={addreadlatericon}
                        className="add-source-read-later-icon"
                        alt=" "
                      /> */}
        </button>
      ) : (
        <button
          onClick={() =>
            this.props.deleteReadLater({
              reader: this.props.user.id,
              readLaterId: this.readLater._id
            })
          }
          className="delete-source-read-later-button"
          //   className="source-read-later-button"
        >
          <i className="fas fa-bookmark delete-source-read-later-icon"></i>
          {/* <img
                        src={addreadlatericon}
                        className="delete-source-read-later-icon"
                        // className="add-source-read-later-icon"
                        alt=" "
                      /> */}
        </button>
      );

      let description;
      if (res.description === null && res.content) {
        description = (
          <p className="news-explore-content">{res.content.slice(0, -13)}</p>
        );
      } else if (res.description.length > 100) {
        description = <p className="news-explore-content">{res.description}</p>;
      } else if (res.description && res.content === null) {
        description = <p className="news-explore-content">{res.description}</p>;
      } else if (res.content && res.content.includes("+")) {
        description = (
          <p className="news-explore-content">{res.content.slice(0, -13)}</p>
        );
      } else {
        description = <p className="news-explore-content">No description.</p>;
      }

      let compName;
      if (res.source.name && res.author) {
        compName = ` | ${res.source.name}`;
      } else if (res.source.name) {
        compName = `by ${res.source.name}`;
      } else {
        compName = "";
      }

      let author;
      if (res.author) {
        author = (
          <h3 className="news-explore-author">
            by {res.author} {compName}
          </h3>
        );
      } else {
        author = <h3 className="news-explore-author">{compName}</h3>;
      }

      // debugger;
      return (
        <li key={i} className="news-explore-li">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={res.url}
            className="a-tag"
          >
            <div className="img-div">{image}</div>
            <div className="title-author-desc-div">
              <h2 className="news-explore-title">{res.title}</h2>
              {author}
              {description}
            </div>
          </a>
          {/* <button
            onClick={() =>
              this.props.createReadLater({
                readLaterURL: res.url,
                readLaterDescription: res.description,
                reader: this.props.user.id,
                readLaterName: res.source.name
              })
            }
            className="source-read-later-button"
          > */}
          {readLaterButton}
            {/* <img
              src={addreadlatericon}
              className="add-source-read-later-icon"
              alt=" "
            />
          </button> */}
        </li>
      );
    });
    return (
      <div className="today-container">
        <h1 className="today-header">Search</h1>
        <h3 className="desc-header">Top results matching your search</h3>
        <ul>{options}</ul>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {

    return {
        user: state.session.user
    }
};

const mapDispatchToProps = dispatch => ({
  createReadLater: readLater => dispatch(createReadLater(readLater)),
  deleteReadLater: readLater => dispatch(deleteReadLater(readLater))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Results));
