import React from "react";

export default class ProductRow extends React.Component {
  render(): JSX.Element {
    return (
      <tr>
        <td>Product name</td>
        <td>Product price</td>
      </tr>
    )
  }
}