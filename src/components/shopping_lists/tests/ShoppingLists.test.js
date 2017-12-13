import expect from 'expect';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { ShoppingLists } from '../ShoppingLists';

configure({ adapter: new Adapter() });

describe('ShoppingLists Tests', () => {
    let wrapper = null;

    beforeEach(() => {
        const props = {
            loading: false,
            shoppingLists: {},
            actions: { getLists: () => { return Promise.resolve(); } }
        };

        wrapper = shallow(<ShoppingLists {...props} />);
    });

    it('renders correctly', () => {
        expect(wrapper.length).toEqual(1);
    })
});
