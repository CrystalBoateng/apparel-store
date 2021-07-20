import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { SubtractAdd } from '../subtract-add/SubtractAdd';
import { fetchOne } from './detailAPI';
import './Detail.css';

export class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      title: "",
      price: "",
      description: "",
      category: "",
      image: "",
      id: "",
    };
  }
  componentDidMount() {
    // pulls detail view data from the API, for the item in the URL path
    fetchOne(this.props.location.pathname)
      .then((data)=>{ 
        this.setState({
          title: data.title,
          price: data.price,
          description: data.description,
          category: data.category,
          image: data.image,
          id: data.id,
        });
    });
  }
  render() {
    return (
      <main id="detail">
        <div></div>
        <h1>{this.state.title}</h1>
        <div>
          <img src={this.state.image} />
          <div>
            <p id="detail-price">${this.state.price}</p>
            <p id="detail-category">{this.state.category}</p>
            <p id="detail-description">{this.state.description}</p>
            <p id="detail-id" data-id={this.state.id}>Product # {this.state.id}</p>
            <SubtractAdd />
          </div>
        </div>
      </main>
    );
  }
}