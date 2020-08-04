import React from 'react';
import { Link } from 'react-router-dom';
import './Links.css';

class Links extends React.Component {
  render() {
    return (
      <div className="buttons-container">
        <Link data-testid="btn-ranking" to="/ranking" className="btn">
          RANKING
        </Link>
        <Link data-testid="btn-play-again" to="/" className="btn">
          PLAY AGAIN
        </Link>
      </div>
    );
  }
}

export default Links;
