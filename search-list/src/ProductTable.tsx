import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";
import './ProductTable.css';

export default class ProductTable extends React.Component {
  render(): JSX.Element {
    return (
      <table className="ProductTable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <ProductCategoryRow />
          <ProductRow />
          <ProductRow />
          <ProductRow />
          <ProductCategoryRow />
          <ProductRow />
          <ProductRow />
          <ProductRow />
        </tbody>
      </table>
    )
  };
}