import React, { Component } from 'react';
import * as api from '../../services/api';

import './Home.css';

class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = { categories: [] };
  }

  componentDidMount() {
    api.getCategories().then((categories) => this.setState({ categories }));
  }

  render() {
    const { categories } = this.state;
    const { changeCategory } = this.props;

    return (
      <div className="categories-container">
        <p className="categories-title">Categorias:</p>
        <div className="categories-list">
          {categories.map((category) => (
            <div key={category.id}>
              <label className="category" htmlFor={category.id}>
                <input
                  type="radio"
                  name="categorie"
                  value={category.id}
                  data-testid="category"
                  onClick={(event) => changeCategory(event)}
                />
                {category.name}
              </label>
              <br />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Categories;
