import React from "react";
import './ProductCategoryRow.css';

interface Props {
  category: string;
}

export default class ProductCategoryRow extends React.Component<Props> {
  render(): JSX.Element {
    return (
      <tr className="ProductCategoryRow">
        <td colSpan={2}>
          {this.props.category}
        </td>
      </tr>
    )
  }
}