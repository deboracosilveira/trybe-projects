import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

import PropTypes from 'prop-types';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: {
        title: '',
        storyline: '',
        imagePath: '',
        genre: '',
        rating: '',
        subtitle: '',
        id: '',
      },
      loaded: false,
      shouldRedirect: false,
    };
  }

  componentDidMount() {
    movieAPI
      .getMovie(this.props.match.params.id)
      .then((res) => this.setState({ movie: res, loaded: true }));
  }

  render() {
    const { movie, loaded, shouldRedirect } = this.state;
    if (shouldRedirect) return <Redirect to="/" />;
    if (loaded) {
      const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;
      return (
        <div data-testid="movie-details">
          <img alt="Movie Cover" src={`../${imagePath}`} />
          <p>{`Title: ${title}`}</p>
          <p>{`Subtitle: ${subtitle}`}</p>
          <p>{`Storyline: ${storyline}`}</p>
          <p>{`Genre: ${genre}`}</p>
          <p>{`Rating: ${rating}`}</p>
          <Link to={`/movies/${movie.id}/edit`}>EDITAR</Link>
          <Link to="/">VOLTAR</Link>
          <Link
            to="/"
            onClick={() => {
              movieAPI.deleteMovie(id);
              this.setState({ shouldRedirect: true });
            }}
          >
            DELETAR
          </Link>
        </div>
      );
    }

    return <Loading />;
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  match: PropTypes.shape({ params: PropTypes.shape({ id: PropTypes.string }) }),
};
