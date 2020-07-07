import React from 'react';

function Review(props) {
  const { reviewInput, handleInputChange, handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="reviewInput">
        Name:
        <input
          name="reviewInput"
          data-testid="product-detail-evaluation"
          type="text"
          value={reviewInput}
          onChange={handleInputChange}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Review;
