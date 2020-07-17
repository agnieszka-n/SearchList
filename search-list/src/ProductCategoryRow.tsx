import React from "react";

export default class ProductCategoryRow extends React.Component {
  render(): JSX.Element {
    return (
      <tr>
        <td colSpan={2}>
          Product category
      </td>
      </tr>
    )
  }
}