import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SearchBar from './SearchBar';

configure({ adapter: new Adapter() });

describe('SearchBar', () => {
  it('SHOULD render', () => {
    // Act
    const mainElement = shallow(<SearchBar filterText="" inStockOnly={true} onFilterTextChanged={jest.fn()} onInStockOnlyChanged={jest.fn()} />);

    // Assert
    const filterTextInput = mainElement.find('[data-testid="searchQuery"]');
    expect(filterTextInput).toHaveLength(1);

    const inStockOnlyInput = mainElement.find('[data-testid="inStockOnly"]');
    expect(inStockOnlyInput).toHaveLength(1);
  });

  it('WHEN filter text changes, SHOULD raise onFilterTextChanged', () => {
    // Arrange
    const onFilterTextChanged = jest.fn();

    // Act
    const mainElement = shallow(<SearchBar filterText="" inStockOnly={true} onFilterTextChanged={onFilterTextChanged} onInStockOnlyChanged={jest.fn()} />);
    const filterTextInput = mainElement.find('[data-testid="searchQuery"]');
    filterTextInput.simulate('change', { target: { value: 'a' } });
    filterTextInput.simulate('change', { target: { value: 'as' } });

    // Assert
    expect(onFilterTextChanged).toBeCalledTimes(2);
  });

  it('WHEN in stock only check changes, SHOULD raise onInStockOnlyChanged', () => {
    // Arrange
    const onInStockOnlyTextChanged = jest.fn();

    // Act
    const mainElement = shallow(<SearchBar filterText="" inStockOnly={true} onFilterTextChanged={jest.fn()} onInStockOnlyChanged={onInStockOnlyTextChanged} />);

    const inStockOnlyInput = mainElement.find('[data-testid="inStockOnly"]');
    inStockOnlyInput.simulate('change', { target: { checked: true } });
    inStockOnlyInput.simulate('change', { target: { checked: false } });
    inStockOnlyInput.simulate('change', { target: { checked: true } });
    
    // Assert
    expect(onInStockOnlyTextChanged).toBeCalledTimes(3);
  });
});