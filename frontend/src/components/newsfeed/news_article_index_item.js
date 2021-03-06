import React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { createReadLater } from "../../actions/read_later_actions";
import { deleteReadLater } from "../../actions/read_later_actions";

import addreadlatericon from "../user_nav_bar/icons/add-read-later-icon.png";
import "./newsfeed.css";

class NewsFeedIndexItem extends React.Component {
  constructor(props) {
    super(props);
    // this.readLaterArray = this.props.user.readLater;
    this.readLater = null;
  }

  isIncluded() {
    for (let i = 0; i < this.props.user.readLater.length; i++) {
        // debugger;
      if (this.props.user.readLater[i].readLaterURL === this.props.article.url) {
        this.readLater = this.props.user.readLater[i];
        return true;
      }
    }
    return false;
  }

  render() {
    let readLaterArray;
    let article = this.props.article;
    let idx = this.props.key;

    let readLaterButton;
      readLaterButton =
        !this.isIncluded() ? (
          <button
            onClick={() =>
              this.props.createReadLater({
                readLaterURL: article.url,
                readLaterName: article.source.name,
                readLaterDescription: article.description,
                reader: this.props.user.id
              })
            }
            className="source-read-later-button"
          >
            <i className="far fa-bookmark add-source-read-later-icon"></i>
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
          >
            <i className="fas fa-bookmark delete-source-read-later-icon"></i>
          </button>
        );
    let image;
    if (article.urlToImage) {
      image = (
        <img
          alt={article.title}
          className="news-explore-img"
          src={article.urlToImage}
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

    let compName;
    if (article.source.name && article.author) {
      compName = ` | ${article.source.name}`;
    } else if (article.source.name) {
      compName = `by ${article.source.name}`;
    } else {
      compName = "";
    }

    let author;
    if (article.author) {
      author = <h3 className="news-explore-author">by {article.author}</h3>;
      author = (
        <h3 className="news-explore-author">
          by {article.author} {compName}
        </h3>
      );
    } else {
      author = <div></div>;
      author = <h3 className="news-explore-author">{compName}</h3>;
    }

    let description;
    if (article.description === null) {
      description = <p className="news-explore-content">{article.content}</p>;
    } else if (article.description.length > 100) {
      description = (
        <p className="news-explore-content">{article.description}</p>
      );
    } else if (article.content === null) {
      description = (
        <p className="news-explore-content">{article.description}</p>
      );
    } else if (article.content.includes("+")) {
      description = (
        <p className="news-explore-content">{article.content.slice(0, -13)}</p>
      );
    } else {
      description = <p className="news-explore-content">{article.content}</p>;
    }
    return (
      <li key={idx} className="news-explore-li">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={article.url}
          className="a-tag"
        >
          <div className="img-div">{image}</div>
          <div className="title-author-desc-div">
            <h2 className="news-explore-title">{article.title}</h2>
            {author}
            {description}
          </div>
        </a>
        {readLaterButton}
      </li>
    );
  }
}

const msp = state => {
  return {
    user: state.session.user
  };
};

const mdp = dispatch => ({
  createReadLater: readLater => dispatch(createReadLater(readLater)),
  deleteReadLater: readLater => dispatch(deleteReadLater(readLater))
});

export default withRouter(
  connect(
    msp,
    mdp
  )(NewsFeedIndexItem)
);
