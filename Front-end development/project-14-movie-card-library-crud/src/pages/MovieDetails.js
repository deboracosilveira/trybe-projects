import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: '',
      loading: true,
    };
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  componentDidMount() {
    movieAPI
      .getMovie(this.props.match.params.id)
      .then((res) => this.setState({ movie: res, loading: false }));
  }

  deleteMovie() {
    movieAPI.deleteMovie(this.props.match.params.id);
  }

  render() {
    const { movie, loading } = this.state;

    if (loading) return <Loading />;

    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link to="/" onClick={this.deleteMovie}>
          DELETAR
        </Link>
      </div>
    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
