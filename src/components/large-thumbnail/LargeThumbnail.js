import React from 'react';
import { SubtractAdd } from '../subtract-add/SubtractAdd';
import './LargeThumbnail.css';

export function LargeThumbnail(props) {
  return (
    <div class="large-thumbnail">
      <a href={"/" + props.id}>
        <img src={props.src} />
        <p>{props.title}</p>
        <p>${props.price}</p>
        <p>{props.category}</p>
      </a>
      <SubtractAdd />
    </div>
  );
}
