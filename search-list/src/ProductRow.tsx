import React from "react";
import Product from "./Product";
import './ProductRow.css';

interface Props {
  product: Product
}

export default class ProductRow extends React.Component<Props> {
  render(): JSX.Element {
    const product = this.props.product;

    return (
      <tr>
        <td className={product.stocked ? '' : 'ProductRow--unavailable'}>{product.name}</td>
        <td>{product.price}</td>
      </tr>
    )
  }
}