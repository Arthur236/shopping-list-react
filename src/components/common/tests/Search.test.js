import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import Search from '../Search';

describe('Test Cases For Search', () => {
    let wrapper = null;

    beforeEach(() => {
        wrapper = shallow(<Search />);
    });

    it('renders the search input', () => {
        expect(wrapper.find('input').length).toBe(1);
    });
});
