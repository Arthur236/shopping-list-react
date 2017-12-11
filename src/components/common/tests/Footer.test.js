import expect from 'expect';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Footer from '../Footer';

configure({ adapter: new Adapter() });

describe('Footer Tests', () => {
    let wrapper = null;

    beforeEach(() => {
        wrapper = shallow(<Footer />);
    });

    it('renders a div and p tag', () => {
        expect(wrapper.find('div').length).toBe(1);
        expect(wrapper.find('p').text()).toContain('Shopping List Application');
    })
});
