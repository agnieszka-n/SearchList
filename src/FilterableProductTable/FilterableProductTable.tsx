import React from "react";
import SearchBar from './SearchBar/SearchBar';
import ProductTable from './ProductTable/ProductTable';
import Product from '../Product';

interface Props {
  allProducts: Product[]
}

interface State {
  filterText: string;
  inStockOnly: boolean;
}

export default class FilterableProductTable extends React.Component<Props, State> {
  private onInStockOnlyChanged(event: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({ inStockOnly: event.target.checked });
  }

  private onFilterTextChanged(event: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({ filterText: event.target.value });
  }

  constructor(props: Props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false
    };
  }

  render(): JSX.Element {
    const filteredProducts = this.props.allProducts.filter(item => {
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
