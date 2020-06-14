import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';
import { Link } from 'react-router-dom';

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = { movies: [], loading: true };
  }

  componentDidMount() {
    movieAPI.getMovies().then((res) => this.setState({ movies: res, loading: false }));
  }

  render() {
    const { movies, loading } = this.state;
    if (loading) return <Loading />; // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        <Link to="movies/new">ADICIONAR CARTÃO</Link>
        {movies.map((movie) => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
      </div>
    );
  }
}

export default MovieList;
