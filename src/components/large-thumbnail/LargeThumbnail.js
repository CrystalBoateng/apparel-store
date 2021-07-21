import React from 'react';
import PropTypes from 'prop-types';
import { SubtractAdd } from '../subtract-add/SubtractAdd';
import './LargeThumbnail.css';

export function LargeThumbnail(props) {
  return (
    <div className="large-thumbnail">
      <a href={"/" + props.id}>
        <img alt={props.title} src={props.src} />
        <p>{props.title}</p>
        <p>${props.price}</p>
        <p>{props.category}</p>
      </a>
      <SubtractAdd />
    </div>
  );
}

LargeThumbnail.defaultProps = {
  category: "",
  id: 0,
  price: 0,
  src: "",
  title: "",
}

LargeThumbnail.propTypes = {
  category: PropTypes.string,
  id: PropTypes.number,
  price: PropTypes.number,
  src: PropTypes.string,
  title: PropTypes.string,
}