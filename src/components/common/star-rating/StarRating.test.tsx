import React from 'react';
import { render, shallow } from 'enzyme';
import { StarRating } from './StarRating';
import { StarIcon } from '../../icons/StarIcon';

describe('Star rating', () => {
  const baseProps = {
    starCount: 5,
    rating: 4.6
  };

  it('should render correct number of stars based on star count', () => {
    const component = shallow(<StarRating {...baseProps} />);
    const stars = component.find(StarIcon);

    expect(stars).toHaveLength(baseProps.starCount);
  });

  it('should throw error if star count is invalid', () => {
    const component = () => render(<StarRating {...baseProps} starCount={11} />);
    expect(component).toThrow();
  });

  it('should color rating star based on rating', () => {
    const starWidth = 24;
    const component = shallow(<StarRating {...baseProps} />);

    const stars = component.find(StarIcon);
    expect(stars.at(0).prop('clipPathWidth')).toEqual(starWidth);
    expect(stars.at(4).prop('clipPathWidth')).toEqual(
      Math.abs(5 - baseProps.rating - 1) * starWidth
    );
  });
});
