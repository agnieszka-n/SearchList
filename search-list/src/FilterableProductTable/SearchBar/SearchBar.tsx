import React from "react";
import './SearchBar.css';

interface Props {
  filterText: string;
  inStockOnly: boolean;
  onFilterTextChanged: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onInStockOnlyChanged: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default class SearchBar extends React.Component<Props> {
  render(): JSX.Element {
    return (
      <div className="SearchBar">
        <div>
          <input className="SearchBar-text" placeholder="Search..." type="text" value={this.props.filterText} onChange={this.props.onFilterTextChanged} />
        </div>
        <input type="checkbox" id="stockOnly" checked={this.props.inStockOnly} onChange={this.props.onInStockOnlyChanged} />
        <label htmlFor="stockOnly">Only show products in stock</label>
      </div>
    )
  }
}