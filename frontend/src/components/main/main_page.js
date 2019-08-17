import React from 'react';
import { withRouter } from 'react-router';


class MainPage extends React.Component {
    render() {
        return (
          <div>
            <h1>A Feedly Clone</h1>
            <footer className='footer'>
              &copy; 2019  Compleetly
              <a href="https://newsapi.org/">Powered by NewsAPI.org</a>
            </footer>
          </div>
        );
    }
}



export default withRouter(MainPage);