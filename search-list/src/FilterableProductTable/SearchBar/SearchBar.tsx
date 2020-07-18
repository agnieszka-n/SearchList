import React from "react";
import './SearchBar.css';

export default class SearchBar extends React.Component {
  render(): JSX.Element {
    return (
      <div className="SearchBar">
        <div>
          <input className="SearchBar__text" placeholder="Search..." type="text" />
        </div>
        <input type="checkbox" id="stockOnly" />
        <label htmlFor="stockOnly">Only show products in stock</label>
      </div>
    )
  }
}