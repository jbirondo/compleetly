import React from "react";
import { withRouter } from "react-router";
import axios from "axios";
// import Results from './results';
import "./search.css";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      redirect: false,
      articles: []
    };
  }

  getInfo = e => {
    e.preventDefault();
    const url =
      "https://newsapi.org/v2/everything?" +
      "language=en&" +
      `q=${this.state.query}&` +
      "apiKey=e7cee6371dc3402f80bc03f623f8c410";
    const req = new Request(url);
    // debugger;
    axios(req).then(({ data }) => {
      this.props.history.push({
        pathname: `/searchresults/${this.state.query}`,
        state: { articles: data.articles }
      });
    });
  };

  update = e => {
    this.setState({
      query: this.search.value,
      articles: []
    });
  };

  render() {
    // debugger;

    // const { redirect } = this.state;

    // debugger;
    return (
      <form onSubmit={this.getInfo}>
        <input
          className="upper-nav-search-bar"
          placeholder="Search for..."
          ref={input => (this.search = input)}
          onChange={this.update}
          onKeyPress={this.handleKeyPress}
        />
      </form>
    );
  }
}

export default withRouter(Search);
