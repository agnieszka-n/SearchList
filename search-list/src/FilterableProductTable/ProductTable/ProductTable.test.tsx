import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ProductTable from './ProductTable';
import Product from '../../Product';
import ProductRow, { Props as ProductRowProps } from './ProductRow/ProductRow';
import ProductCategoryRow, { Props as ProductCategoryRowProps } from './ProductCategoryRow/ProductCategoryRow';

configure({ adapter: new Adapter() });

describe('ProductTable', () => {
  it('SHOULD render products and categories', () => {
    // Arrange
    const products: Product[] = [
      {
        category: 'Category',
        name: 'Product',
        price: '1',
        stocked: true
      }
    ];

    // Act
    const mainElement = shallow(<ProductTable products={products} />);

    // Assert
    const tableBody = mainElement.find('tbody');

    expect(tableBody.children()).toHaveLength(2);
    expect(tableBody.find(ProductRow).length).toEqual(1);
    expect(tableBody.find(ProductCategoryRow).length).toEqual(1);
  });

  it('SHOULD sort products and categories', () => {
    // Arrange
    const products: Product[] = [
      {
        category: 'Category 2',
        name: 'Product 2-2',
        price: '1',
        stocked: true
      },
      {
        category: 'Category 1',
        name: 'Product 1-1',
        price: '1',
        stocked: true
      },
      {
        category: 'Category 2',
        name: 'Product 2-1',
        price: '1',
        stocked: true
      }
    ];

    // Act
    const mainElement = shallow(<ProductTable products={products} />);

    // Assert
    const tableBody = mainElement.find('tbody');

    expect(tableBody.children()).toHaveLength(5);

    expect((tableBody.childAt(0).props() as ProductCategoryRowProps).category).toEqual('Category 1');
    expect((tableBody.childAt(1).props() as ProductRowProps).product.name).toEqual('Product 1-1');
    expect((tableBody.childAt(2).props() as ProductCategoryRowProps).category).toEqual('Category 2');
    expect((tableBody.childAt(3).props() as ProductRowProps).product.name).toEqual('Product 2-1');
    expect((tableBody.childAt(4).props() as ProductRowProps).product.name).toEqual('Product 2-2');
  });
});