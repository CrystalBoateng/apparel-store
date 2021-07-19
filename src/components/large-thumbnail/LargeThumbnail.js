import React from 'react';
import { SubtractAdd } from '../subtract-add/SubtractAdd';
import './LargeThumbnail.css';

export function LargeThumbnail(props) {
  return (
    <div>
      <a href={"/" + props.id}>
        <img src={props.src} width="100px"/>
        <p>{props.title}</p>
        <p>${props.price}</p>
        <p>{props.category}</p>
      </a>
      <SubtractAdd />
    </div>
  );
}
