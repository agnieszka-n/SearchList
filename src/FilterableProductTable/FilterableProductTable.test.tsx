import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FilterableProductTable from './FilterableProductTable';
import Product from '../Product';
import ProductTable, { Props as ProductTableProps } from './ProductTable/ProductTable';
import SearchBar from './SearchBar/SearchBar';

const allProducts: Product[] = [{
  category: 'Food',
  name: 'Pizza',
  price: '$10',
  stocked: true
}, {
  category: 'Sport',
  name: 'Football',
  price: '$2',
  stocked: false
}];

configure({ adapter: new Adapter() });

describe('FilterableProductTable', () => {
  it('SHOULD render a list with all products', () => {
    // Arrange
    const productsTableProps = () => mainElement.find(ProductTable).props() as ProductTableProps;

    // Act
    const mainElement = shallow(<FilterableProductTable allProducts={allProducts} />);

    // Assert
    expect(productsTableProps().products.length).toEqual(2);
  });

  it('WHEN filter by name changes, SHOULD filter products', () => {
    // Arrange
    const mainElement = shallow<FilterableProductTable>(<FilterableProductTable allProducts={allProducts} />);
    const searchBar = mainElement.find(SearchBar);
    const productsTableProps = () => mainElement.find(ProductTable).props() as ProductTableProps;

    // Act
    searchBar.simulate('filterTextChanged', { target: { value: 'ball' } });

    // Assert
    expect(productsTableProps().products.length).toEqual(1);
    expect(productsTableProps().products[0].name).toEqual('Football');
  });

  it('WHEN filter by only in stock changes, SHOULD filter products', () => {
    // Arrange
    const mainElement = shallow<FilterableProductTable>(<FilterableProductTable allProducts={allProducts} />);
    const searchBar = mainElement.find(SearchBar);
    const productsTableProps = () => mainElement.find(ProductTable).props() as ProductTableProps;

    // Act
    searchBar.simulate('inStockOnlyChanged', { target: { checked: true } });

    // Assert
    expect(productsTableProps().products.length).toEqual(1);
    expect(productsTableProps().products[0].name).toEqual('Pizza');
  });
});
