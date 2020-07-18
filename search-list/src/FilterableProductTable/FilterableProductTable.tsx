import React from "react";
import SearchBar from './SearchBar/SearchBar';
import ProductTable from "./ProductTable/ProductTable";
import Product from './Product';

interface State {
  filterText: string;
  inStockOnly: boolean;
}

export default class FilterableProductTable extends React.Component<{}, State> {
  private readonly allProducts: Product[];

  private onInStockOnlyChanged(event: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({ inStockOnly: event.target.checked });
  }

  private onFilterTextChanged(event: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({ filterText: event.target.value });
  }

  constructor(props: {}) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false
    };

    this.allProducts = [
      { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
      { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
      { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
      { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
      { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
      { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
    ];
  }

  render(): JSX.Element {
    const filteredProducts = this.allProducts.filter(item => {
      if (this.state.inStockOnly && !item.stocked) {
        return false;
      }

      return item.name.toUpperCase().includes(this.state.filterText.toUpperCase());
    });

    return (
      <div>
        <SearchBar filterText={this.state.filterText} inStockOnly={this.state.inStockOnly} onInStockOnlyChanged={this.onInStockOnlyChanged.bind(this)} onFilterTextChanged={this.onFilterTextChanged.bind(this)} />
        <ProductTable products={filteredProducts} />
      </div>
    );
  }
}
