import React from "react";
import ProductCategoryRow from "./ProductCategoryRow/ProductCategoryRow";
import ProductRow from "./ProductRow/ProductRow";
import './ProductTable.css';
import Product from "../../Product";

export interface Props {
  products: Product[]
}

export default class ProductTable extends React.Component<Props> {
  private isGreaterThan(text1: string, text2: string) {
    if (text1 < text2) {
      return -1;
    }

    if (text1 === text2) {
      return 0;
    }

    return 1;
  }

  private sortProductsByCategoryAndName(products: Product[]) {
    return products.sort((a, b) => {
      const isCategoryEqual = this.isGreaterThan(a.category, b.category);

      return isCategoryEqual === 0 ? this.isGreaterThan(a.name.toUpperCase(), b.name.toUpperCase()) : isCategoryEqual;
    });
  }

  render(): JSX.Element {
    const sortedProducts = this.sortProductsByCategoryAndName(this.props.products);
    const tableRows: JSX.Element[] = [];

    let currentCategory: string | null = null;

    sortedProducts.forEach(item => {
      if (item.category !== currentCategory) {
        currentCategory = item.category;
        tableRows.push(<ProductCategoryRow category={currentCategory} key={currentCategory} />);
      }
      tableRows.push(<ProductRow product={item} key={item.name} />);
    });

    return (
      <table className="ProductTable">
        <thead>
          <tr>
            <th className="ProductTable__column">Name</th>
            <th className="ProductTable__column">Price</th>
          </tr>
        </thead>
        <tbody>
          {tableRows}
        </tbody>
      </table>
    )
  };
}